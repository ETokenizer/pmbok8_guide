/**
 * PMP 全真模拟考试引擎
 * 180 题 · 230 分钟 · PMP 认证模拟
 */
import { fetchCloudQuestions } from './question-bank.js';
import { recordQuizAnswer } from './progress.js';
import { addWrongAnswer } from './wrong-book.js';

let examState = {
    questions: [],
    answers: {},        // {index: selectedOption}
    marked: [],         // indices of marked questions
    currentIndex: 0,
    timeLeft: 230 * 60,
    timer: null,
    started: false,
    submitted: false
};

// Open the exam modal (premium check done in caller)
export function openPMPExam() {
    resetExamState();
    const modal = document.getElementById('examModalOverlay');
    if (!modal) return;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

export function closeExamModal() {
    if (examState.started && !examState.submitted) {
        if (!confirm('考试正在进行，确定要退出吗？进度将丢失。')) return;
    }
    stopTimer();
    const modal = document.getElementById('examModalOverlay');
    if (modal) { modal.classList.remove('active'); setTimeout(() => modal.style.display = 'none', 300); }
}

function resetExamState() {
    stopTimer();
    examState = {
        questions: [], answers: {}, marked: [], currentIndex: 0,
        timeLeft: 230 * 60, timer: null, started: false, submitted: false
    };
    const area = document.getElementById('examQuestionArea');
    if (area) area.innerHTML = `<div style="text-align:center;padding:60px 20px">
        <div style="font-size:48px;margin-bottom:20px">📝</div>
        <h3 style="color:var(--pmi-dark);margin-bottom:10px">PMP 全真模拟考试</h3>
        <p style="color:#666;margin-bottom:20px">共 180 题，考试时间 230 分钟</p>
        <ul style="text-align:left;max-width:500px;margin:0 auto;color:#555;line-height:2">
            <li>✅ 涵盖项目管理所有知识领域</li>
            <li>✅ 包含情境题、计算题、概念题</li>
            <li>✅ 答题后可查看详细解析</li>
            <li>✅ 自动计算分数和能力分析</li>
        </ul>
        <button onclick="window.startPMPExam()" style="margin-top:30px;padding:15px 40px;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;border:none;border-radius:10px;font-size:16px;font-weight:600;cursor:pointer;box-shadow:0 4px 15px rgba(34,197,94,0.3)">🚀 开始考试</button></div>`;
    const nav = document.getElementById('examQuestionNav');
    if (nav) nav.innerHTML = '';
    const btn = document.getElementById('startExamBtn');
    if (btn) btn.style.display = 'block';
    const sub = document.getElementById('submitExamBtn');
    if (sub) sub.style.display = 'none';
    updateTimerDisplay();
}

// Start the exam
export async function startPMPExam() {
    const startBtn = document.getElementById('startExamBtn');
    if (startBtn) { startBtn.disabled = true; startBtn.textContent = '⏳ 加载题库中...'; }

    // Load 180 questions from cloud + local
    let cloud = null;
    try { cloud = await fetchCloudQuestions(); } catch(e) { console.warn('Cloud fetch failed, using local'); }
    const pool = cloud && cloud.length > 0 ? cloud : getLocalFallbackQuestions();
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    examState.questions = shuffled.slice(0, 180);

    // If not enough questions, duplicate and reshuffle
    if (examState.questions.length < 180) {
        const dup = [];
        while (dup.length < 180) dup.push(...pool);
        const reshuffled = [...dup].sort(() => Math.random() - 0.5);
        examState.questions = reshuffled.slice(0, 180);
    }

    examState.started = true;
    examState.answers = {};
    examState.marked = [];
    examState.currentIndex = 0;
    examState.timeLeft = 230 * 60;

    document.getElementById('startExamBtn').style.display = 'none';
    document.getElementById('submitExamBtn').style.display = 'block';
    renderExamNav();
    showPMPQuestion(0);
    startTimer();
}

// Timer
function startTimer() {
    stopTimer();
    examState.timer = setInterval(() => {
        examState.timeLeft--;
        updateTimerDisplay();
        if (examState.timeLeft <= 0) {
            stopTimer();
            submitPMPExam(true);
        }
    }, 1000);
}
function stopTimer() { if (examState.timer) { clearInterval(examState.timer); examState.timer = null; } }
function updateTimerDisplay() {
    const el = document.getElementById('examTimer');
    if (!el) return;
    const m = Math.floor(examState.timeLeft / 60);
    const s = examState.timeLeft % 60;
    el.textContent = `${String(m).padStart(3,'0')}:${String(s).padStart(2,'0')}`;
}

// Question navigation grid
function renderExamNav() {
    const nav = document.getElementById('examQuestionNav');
    if (!nav) return;
    let html = '';
    for (let i = 0; i < examState.questions.length; i++) {
        const isAnswered = examState.answers[i] !== undefined;
        const isMarked = examState.marked.includes(i);
        const isCurrent = i === examState.currentIndex;
        let bg = '#e5e7eb', color = '#374151', border = '1px solid #d1d5db';
        if (isCurrent) { bg = '#3b82f6'; color = '#fff'; border = '1px solid #3b82f6'; }
        else if (isMarked) { bg = '#fbbf24'; border = '1px solid #fbbf24'; }
        else if (isAnswered) { bg = '#3b82f6'; color = '#fff'; border = '1px solid #3b82f6'; }
        html += `<button style="width:36px;height:36px;background:${bg};color:${color};border:${border};border-radius:6px;font-size:12px;cursor:pointer" onclick="window.showPMPQuestion(${i})">${i+1}</button>`;
    }
    nav.innerHTML = html;
}

// Display a question
export function showPMPQuestion(index) {
    if (index < 0 || index >= examState.questions.length) return;
    examState.currentIndex = index;
    const q = examState.questions[index];
    const area = document.getElementById('examQuestionArea');
    const isMarked = examState.marked.includes(index);
    if (!area || !q) return;

    area.innerHTML = `
        <div class="exam-q-card">
            <div class="exam-q-head">
                <span style="font-size:14px;color:#888">第 ${index+1} 题 / 共 ${examState.questions.length} 题</span>
                <div style="display:flex;gap:10px">
                    <span style="font-size:12px;color:#888">${q.category==='principle'?'📘 原则':q.category==='domain'?'🌐 绩效域':q.category==='process'?'🔄 流程':q.category==='agile'?'🚀 敏捷':'📋 综合'}</span>
                    <button class="exam-mark-btn${isMarked?' marked':''}" onclick="window.togglePMPMark(${index})">📌 ${isMarked?'已标记':'标记'}</button>
                </div>
            </div>
            <div class="exam-q-text">${index+1}. ${q.question}</div>
            <div class="exam-q-options">
                ${q.options.map((opt, i) => `
                    <div class="exam-opt${examState.answers[index]===i?' selected':''}" onclick="window.selectPMPAnswer(${index},${i})">
                        <span class="exam-opt-radio">${'ABCD'[i]}</span>
                        <span>${opt}</span>
                    </div>
                `).join('')}
            </div>
            <div class="exam-q-foot">
                <button class="exam-nav-btn" onclick="window.prevPMPQuestion()" ${index===0?'disabled':''}>⬅ 上一题</button>
                <span style="color:#888;font-size:13px">${q.difficulty==='easy'?'简单':q.difficulty==='medium'?'中等':'困难'}</span>
                <button class="exam-nav-btn" onclick="window.nextPMPQuestion()" ${index===examState.questions.length-1?'disabled':''}>下一题 ➡</button>
            </div>
        </div>`;
    renderExamNav();
}

// Answer selection
export function selectPMPAnswer(qIndex, optIndex) {
    examState.answers[qIndex] = optIndex;
    showPMPQuestion(qIndex);
}

// Navigation
export function prevPMPQuestion() { if (examState.currentIndex > 0) showPMPQuestion(examState.currentIndex - 1); }
export function nextPMPQuestion() { if (examState.currentIndex < examState.questions.length - 1) showPMPQuestion(examState.currentIndex + 1); }

// Mark for review
export function togglePMPMark(index) {
    const mi = examState.marked.indexOf(index);
    if (mi >= 0) examState.marked.splice(mi, 1);
    else examState.marked.push(index);
    showPMPQuestion(index);
    updateMarkedList();
}
function updateMarkedList() {
    const list = document.getElementById('examMarkedList');
    if (!list) return;
    if (examState.marked.length === 0) list.innerHTML = '<p style="font-size:12px;color:#999">暂无标记题目</p>';
    else list.innerHTML = examState.marked.map(i => `<button onclick="window.showPMPQuestion(${i})" style="width:32px;height:32px;background:#fbbf24;border:none;border-radius:4px;font-size:12px;cursor:pointer;margin:2px">${i+1}</button>`).join('');
}

// Submit exam
export function submitPMPExam(autoSubmit = false) {
    if (!autoSubmit && !confirm('确定要交卷吗？交卷后将显示成绩。')) return;
    stopTimer();
    examState.submitted = true;

    let correct = 0, wrong = 0, unanswered = 0;
    examState.questions.forEach((q, i) => {
        const ans = examState.answers[i];
        if (ans === undefined) unanswered++;
        else if (ans === q.correct) correct++;
        else wrong++;

        // Record in learning system
        const isCorrect = ans === q.correct;
        if (ans !== undefined) {
            recordQuizAnswer(q.category||'mixed', q.categoryId||0, q.id||('exam_'+i), q.difficulty||'medium', isCorrect);
            if (!isCorrect) addWrongAnswer(q.id||('exam_'+i), q.question, q.options, q.correct, ans, q.explanation||'', q.category||'mixed', q.categoryId||0, q.difficulty||'medium');
        }
    });

    const score = Math.round((correct / examState.questions.length) * 100);
    const passed = score >= 70;
    document.getElementById('submitExamBtn').style.display = 'none';

    const area = document.getElementById('examQuestionArea');
    area.innerHTML = `
        <div style="text-align:center;padding:30px">
            <div style="font-size:64px;margin-bottom:15px">${passed?'🎉':'😞'}</div>
            <h2 style="color:${passed?'#16a34a':'#dc2626'};margin-bottom:10px">${passed?'恭喜通过！PASS':'未通过 NOT PASS'}</h2>
            <p style="color:#888;margin-bottom:25px">PMP 认证通过线: 70% (约 126/180)</p>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:15px;max-width:600px;margin:0 auto 25px">
                <div style="background:#f0fdf4;padding:15px;border-radius:8px"><div style="font-size:28px;font-weight:700;color:#16a34a">${correct}</div><div style="font-size:12px;color:#888">正确</div></div>
                <div style="background:#fef2f2;padding:15px;border-radius:8px"><div style="font-size:28px;font-weight:700;color:#dc2626">${wrong}</div><div style="font-size:12px;color:#888">错误</div></div>
                <div style="background:#f8fafc;padding:15px;border-radius:8px"><div style="font-size:28px;font-weight:700;color:#888">${unanswered}</div><div style="font-size:12px;color:#888">未答</div></div>
                <div style="background:#eff6ff;padding:15px;border-radius:8px"><div style="font-size:28px;font-weight:700;color:#${passed?'16a34a':'dc2626'}">${score}%</div><div style="font-size:12px;color:#888">得分</div></div>
            </div>
            <button onclick="window.closeExamModal()" style="padding:12px 30px;background:var(--pmi-blue);color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer">关闭</button>
        </div>`;
}

// Local fallback bank (used if cloud unavailable)
function getLocalFallbackQuestions() {
    return [
        { id:'X001',category:'principle',categoryId:1,difficulty:'easy',question:'PMBOK第8版中"整体视角"原则强调什么？',options:['A. 只关注自己负责的模块','B. 从全局出发理解项目在组织中的位置和关联','C. 把项目拆得越细越好','D. 忽略外部环境变化'],correct:1,explanation:'整体视角要求项目经理从全局出发，理解项目与组织战略、其他系统、外部环境的相互关联。'},
        { id:'X002',category:'principle',categoryId:2,difficulty:'medium',question:'"聚焦价值"原则的核心是什么？',options:['A. 按时完成所有计划功能','B. 优先交付对组织最有价值的成果','C. 尽可能多地完成功能','D. 只关注成本控制'],correct:1,explanation:'聚焦价值意味着资源有限时优先交付高价值成果。'},
        { id:'X003',category:'domain',categoryId:1,difficulty:'easy',question:'治理绩效域的主要关注点是什么？',options:['A. 仅关注项目进度','B. 建立决策流程、监督机制和问责制度','C. 只关注成本控制','D. 替代项目经理进行日常管理'],correct:1,explanation:'治理绩效域的核心是建立有效的决策和监督框架。'},
        { id:'X004',category:'process',categoryId:1,difficulty:'easy',question:'制定项目章程的输出是什么？',options:['A. 项目管理计划','B. 项目章程和假设日志','C. 工作绩效数据','D. 风险登记册'],correct:1,explanation:'制定项目章程(#1)输出项目章程和假设日志。'},
        { id:'X005',category:'agile',categoryId:0,difficulty:'easy',question:'Scrum框架中三个角色是什么？',options:['A. PM/BA/DEV','B. PO/SM/Developers','C. Sponsor/PM/Team','D. Leader/Manager/Worker'],correct:1,explanation:'PO(产品负责人)、SM(敏捷教练)、Developers(开发团队)。'}
    ];
}

// Expose all functions globally
window.openPMPExam = openPMPExam;
window.closeExamModal = closeExamModal;
window.startPMPExam = startPMPExam;
window.showPMPQuestion = showPMPQuestion;
window.selectPMPAnswer = selectPMPAnswer;
window.prevPMPQuestion = prevPMPQuestion;
window.nextPMPQuestion = nextPMPQuestion;
window.togglePMPMark = togglePMPMark;
window.submitPMPExam = submitPMPExam;
