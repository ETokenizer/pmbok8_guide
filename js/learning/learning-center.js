/**
 * 学习中心 UI
 * Learning Center — 进度仪表盘 + 模拟考试 + 错题本 + 薄弱点分析
 */
import { getProgressSummary, getWeakAreas, getPrincipleProgress, getDomainProgress, resetProgress } from './progress.js';
import { getWrongBookStats, getWrongAnswers, markMastered, removeWrongAnswer, clearWrongBook } from './wrong-book.js';
import { startExam, getExamState, goToQuestion, nextQuestion, prevQuestion, answerQuestion, toggleFlag, submitExam, getScore, getCurrentQuestion, getAnswerStatus, renderExamNavGrid, clearExam } from './exam.js';
import { getQuestionCount, isCloudAvailable, getBankSize, getCategoryStats, fetchCloudQuestions } from './question-bank.js';
import { isLoggedIn, isPremium } from '../auth/auth-service.js';

// ==================== 学习中心主弹窗 ====================
let currentTab = 'dashboard';

export function openLearningCenter() {
    let modal = document.getElementById('learningCenterModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'learningCenterModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `<div class="modal-content wide" style="max-width:1100px;max-height:90vh">
            <div class="modal-header" style="background:linear-gradient(135deg,#1e40af,#3b82f6)">
                <h3>🎓 学习中心 | Learning Center</h3>
                <button class="modal-close" onclick="window.closeLearningCenter()">×</button>
            </div>
            <div class="modal-body" id="learningCenterBody" style="padding:0"></div>
        </div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', e => { if (e.target === modal) closeLearningCenter(); });
    }
    currentTab = 'dashboard';
    renderLearningCenter();
    modal.style.display = 'flex';
    // Preload cloud questions in background
    fetchCloudQuestions().then(n => { if (n) { const el = document.getElementById('lcContent'); if (el && currentTab === 'exam') el.innerHTML = renderExamEntry(); } });
}

export function closeLearningCenter() {
    const m = document.getElementById('learningCenterModal');
    if (m) m.style.display = 'none';
}

function renderLearningCenter() {
    const body = document.getElementById('learningCenterBody');
    const tabs = [
        { id: 'dashboard', icon: '📊', label: '学习仪表盘', en: 'Dashboard' },
        { id: 'exam', icon: '📝', label: '模拟考试', en: 'Mock Exam' },
        { id: 'wrongbook', icon: '📕', label: '错题本', en: 'Wrong Book' },
        { id: 'analysis', icon: '🔍', label: '薄弱点分析', en: 'Weak Areas' }
    ];

    body.innerHTML = `
        <div class="lc-tabs">${tabs.map(t => `
            <button class="lc-tab${currentTab===t.id?' active':''}" onclick="window.switchLCTab('${t.id}')">${t.icon} ${t.label}<br><small>${t.en}</small></button>
        `).join('')}</div>
        <div class="lc-content" id="lcContent"></div>
    `;

    switchLCTabContent(currentTab);
}

// ==================== 标签切换 ====================
window.switchLCTab = (tabId) => {
    currentTab = tabId;
    document.querySelectorAll('.lc-tab').forEach(t => t.classList.toggle('active', t.textContent.includes(tabId)));
    switchLCTabContent(tabId);
};

function switchLCTabContent(tabId) {
    const c = document.getElementById('lcContent');
    if (!c) return;
    switch (tabId) {
        case 'dashboard': c.innerHTML = renderDashboard(); break;
        case 'exam': c.innerHTML = renderExamEntry(); break;
        case 'wrongbook': c.innerHTML = renderWrongBook(); break;
        case 'analysis': c.innerHTML = renderWeakAnalysis(); break;
    }
}

// ==================== 仪表盘 ====================
function renderDashboard() {
    const s = getProgressSummary();
    const weak = getWeakAreas();
    return `
        <div class="lc-dashboard">
            <div class="lc-stat-cards">
                <div class="lc-stat-card"><div class="lc-stat-val">${s.principlesViewed}/6</div><div class="lc-stat-lbl">原则已学</div></div>
                <div class="lc-stat-card"><div class="lc-stat-val">${s.domainsViewed}/7</div><div class="lc-stat-lbl">绩效域已学</div></div>
                <div class="lc-stat-card"><div class="lc-stat-val">${s.totalQuizzes}</div><div class="lc-stat-lbl">总答题数</div></div>
                <div class="lc-stat-card"><div class="lc-stat-val">${s.accuracy}%</div><div class="lc-stat-lbl">正确率</div></div>
                <div class="lc-stat-card"><div class="lc-stat-val">${s.totalTime}分</div><div class="lc-stat-lbl">学习时长</div></div>
                <div class="lc-stat-card"><div class="lc-stat-val">${s.streakDays}天</div><div class="lc-stat-lbl">连续学习</div></div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:15px">
                <div class="lc-card">
                    <h4>📘 原则掌握度 | Principle Mastery</h4>
                    ${[1,2,3,4,5,6].map(n => {
                        const pp = getPrincipleProgress(n);
                        const pct = pp.quizTotal > 0 ? Math.round(pp.quizCorrect/pp.quizTotal*100) : 0;
                        const names = ['整体视角','聚焦价值','融入质量','负责任领导','协作团队','管家精神'];
                        return `<div class="lc-progress-bar"><span class="lc-bar-label">${names[n-1]}</span><div class="lc-bar"><div class="lc-bar-fill" style="width:${pct}%;background:${pct>=60?'#10b981':pct>0?'#f59e0b':'#e5e7eb'}"></div></div><span class="lc-bar-pct">${pp.quizTotal>0?pct+'% ('+pp.quizCorrect+'/'+pp.quizTotal+')':'未答题'}</span></div>`;
                    }).join('')}
                </div>
                <div class="lc-card">
                    <h4>🌐 绩效域掌握度 | Domain Mastery</h4>
                    ${[1,2,3,4,5,6,7].map(n => {
                        const dp = getDomainProgress(n);
                        const pct = dp.quizTotal > 0 ? Math.round(dp.quizCorrect/dp.quizTotal*100) : 0;
                        const names = ['治理','范围','进度','财务','相关方','资源','风险'];
                        return `<div class="lc-progress-bar"><span class="lc-bar-label">${names[n-1]}</span><div class="lc-bar"><div class="lc-bar-fill" style="width:${pct}%;background:${pct>=60?'#10b981':pct>0?'#f59e0b':'#e5e7eb'}"></div></div><span class="lc-bar-pct">${dp.quizTotal>0?pct+'% ('+dp.quizCorrect+'/'+dp.quizTotal+')':'未答题'}</span></div>`;
                    }).join('')}
                </div>
            </div>
            ${weak.length > 0 ? `<div class="lc-card" style="margin-top:15px;border-left:4px solid #ef4444"><h4>⚠️ 需要加强的领域</h4>${weak.map(w => `<span style="display:inline-block;margin:4px;padding:4px 10px;background:#fef2f2;border-radius:4px;font-size:12px">${w.type==='principle'?'原则'+w.id:'绩效域'+w.id} (${Math.round(w.accuracy*100)}%/${w.correct}/${w.total})</span>`).join('')}</div>` : ''}
            <div style="margin-top:15px;text-align:right"><button class="lc-btn danger" onclick="if(confirm('确定清空所有学习进度？')){resetProgress();switchLCTabContent('dashboard');}">🗑️ 重置进度</button></div>
        </div>`;
}

// ==================== 模拟考试入口 ====================
function renderExamEntry() {
    const st = getExamState();
    if (st.running) return renderExamInProgress();

    if (!isLoggedIn()) {
        return `<div class="lc-exam-entry" style="text-align:center;padding:40px">
            <div style="font-size:48px;margin-bottom:10px">🔐</div>
            <h3>请先登录</h3>
            <p style="color:#666;margin:10px 0">登录后即可使用模拟考试功能</p>
            <button class="auth-submit-btn" style="max-width:300px" onclick="closeLearningCenter();openAuthModal('login')">🔐 登录 / 注册</button>
        </div>`;
    }

    return `
        <div class="lc-exam-entry">
            <div style="text-align:center;padding:20px">
                <div style="font-size:48px;margin-bottom:10px">📝</div>
                <h3>PMP 模拟考试 | Mock Exam</h3>
                <p style="color:#666;margin:10px 0">模拟真实 PMP 考试环境，计时答题，检验学习成果</p>
                <p style="font-size:12px;color:#888">☁️ 云端题库: ${isCloudAvailable()?getBankSize()+'题 ✅':'连接中...'} | 📦 本地题库: 30题</p>
            </div>
            <div class="lc-exam-options">
                <div class="lc-exam-card" onclick="window.startMockExam(50,60,'exam')">
                    <div class="lc-exam-icon">🎯</div>
                    <h4>标准模拟考试</h4>
                    <p>50 题 · 60 分钟</p>
                    <p style="font-size:11px;color:#888">涵盖原则/绩效域/流程/敏捷</p>
                </div>
                <div class="lc-exam-card" onclick="window.startMockExam(20,30,'exam')">
                    <div class="lc-exam-icon">⚡</div>
                    <h4>快速测试</h4>
                    <p>20 题 · 30 分钟</p>
                    <p style="font-size:11px;color:#888">快速检验关键知识点</p>
                </div>
                <div class="lc-exam-card" onclick="window.startMockExam(10,0,'practice')">
                    <div class="lc-exam-icon">🔄</div>
                    <h4>练习模式</h4>
                    <p>10 题 · 不限时</p>
                    <p style="font-size:11px;color:#888">随时查看答案和解释</p>
                </div>
            </div>
        </div>`;
}

// ==================== 考试界面 ====================
window.startMockExam = async (count, minutes, mode) => {
    await startExam(count, minutes, mode);
    switchLCTabContent('exam');
};

function renderExamInProgress() {
    const st = getExamState();
    const q = getCurrentQuestion();
    if (!q) return '<p>加载中...</p>';

    const idx = st.currentIndex;
    const total = st.questions.length;
    const ans = st.answers[idx];
    const isPractice = st.mode === 'practice';

    return `
        <div class="exam-container">
            <div class="exam-topbar">
                ${st.mode === 'exam' ? `<div class="exam-timer" id="examTimer">--:--</div>` : '<div class="exam-timer">练习模式</div>'}
                <div class="exam-progress-text">第 ${idx+1}/${total} 题 ${st.flagged.includes(idx)?'🚩':''}</div>
                <button class="exam-btn small" onclick="window.flagQuestion()">${st.flagged.includes(idx)?'🏴 取消标记':'🚩 标记'}</button>
                <button class="exam-btn small danger" onclick="window.finishExam()">${isPractice?'结束练习':'交卷'}</button>
            </div>
            <div style="display:flex;gap:15px">
                <div style="flex:1">
                    <div class="exam-question-area">
                        <div class="exam-q-meta">
                            <span>${q.category==='principle'?'📘 原则':q.category==='domain'?'🌐 绩效域':q.category==='process'?'🔄 流程':q.category==='agile'?'🚀 敏捷':'📋 综合'}</span>
                            <span class="exam-diff-tag ${q.difficulty}">${q.difficulty==='easy'?'简单':q.difficulty==='medium'?'中等':'困难'}</span>
                        </div>
                        <div class="exam-question">${q.question}</div>
                        <div class="exam-options">
                            ${q.options.map((opt, i) => `
                                <button class="exam-option${ans&&ans.selected===i?(ans.correct?' correct':' incorrect'):''}${ans&&i===q.correct&&!ans.correct?' correct':''}"
                                    onclick="window.examSelectAnswer(${i})"
                                    ${ans&&isPractice?'':'disabled'}>
                                    <span class="exam-opt-letter">${'ABCD'[i]}</span> ${opt}
                                </button>
                            `).join('')}
                        </div>
                        ${ans ? `<div class="exam-feedback ${ans.correct?'correct':'incorrect'}">${ans.correct?'✅ 正确！':'❌ 错误。正确答案是 '+ 'ABCD'[q.correct]}<br>${q.explanation}</div>` : ''}
                    </div>
                    <div class="exam-nav-btns">
                        <button class="exam-btn" onclick="window.examPrev()" ${idx===0?'disabled':''}>← 上一题</button>
                        <button class="exam-btn" onclick="window.examNext()" ${idx===total-1?'disabled':''}>下一题 →</button>
                    </div>
                </div>
                <div class="exam-nav-grid">${renderExamNavGrid()}</div>
            </div>
        </div>`;
}

// Exam actions
window.examGoTo = (i) => { goToQuestion(i); switchLCTabContent('exam'); };
window.examNext = () => { nextQuestion(); switchLCTabContent('exam'); };
window.examPrev = () => { prevQuestion(); switchLCTabContent('exam'); };
window.examSelectAnswer = (optIdx) => {
    const st = getExamState();
    if (st.mode !== 'practice' && st.answers[st.currentIndex]) return; // can't change answer in exam mode
    answerQuestion(st.currentIndex, optIdx);
    switchLCTabContent('exam');
};
window.flagQuestion = () => { toggleFlag(getExamState().currentIndex); switchLCTabContent('exam'); };
window.finishExam = () => {
    if (getExamState().mode === 'exam' && !confirm('确定要交卷吗？未答题目计为错误。')) return;
    submitExam();
    switchLCTabContent('exam');
};

// ==================== 错题本 ====================
function renderWrongBook() {
    const stats = getWrongBookStats();
    const items = getWrongAnswers('active');
    return `
        <div class="lc-wrongbook">
            <div class="lc-stat-cards" style="grid-template-columns:repeat(4,1fr)">
                <div class="lc-stat-card"><div class="lc-stat-val">${stats.total}</div><div class="lc-stat-lbl">错题总数</div></div>
                <div class="lc-stat-card"><div class="lc-stat-val" style="color:#ef4444">${stats.active}</div><div class="lc-stat-lbl">待复习</div></div>
                <div class="lc-stat-card"><div class="lc-stat-val" style="color:#10b981">${stats.mastered}</div><div class="lc-stat-lbl">已掌握</div></div>
                <div class="lc-stat-card"><div class="lc-stat-val">${getBankSize()}</div><div class="lc-stat-lbl">题库总量</div></div>
            </div>
            ${stats.active > 0 ? `<div style="margin-top:15px"><button class="lc-btn" onclick="window.reviewWrongBook()">📖 复习错题 (${stats.active}题)</button>
                <button class="lc-btn danger" style="margin-left:8px" onclick="if(confirm('确定清空错题本？')){clearWrongBook();switchLCTabContent('wrongbook');}">🗑️ 清空</button></div>` :
            `<div style="text-align:center;padding:30px;color:#888">🎉 没有待复习的错题！</div>`}
            ${items.length > 0 ? `<div style="margin-top:15px"><h4>错题列表</h4>${items.slice(0,20).map((w,i) => `
                <div class="wb-item"><div style="flex:1"><strong>#${i+1}</strong> ${w.question.substring(0,80)}...</div>
                <div style="display:flex;gap:6px;align-items:center">
                    <span class="exam-diff-tag ${w.difficulty}">${w.difficulty==='easy'?'简':w.difficulty==='medium'?'中':'难'}</span>
                    <span style="font-size:11px;color:#888">错${w.wrongCount}次</span>
                    <button class="lc-btn small" onclick="markMastered('${w.questionId}');switchLCTabContent('wrongbook');">✅</button>
                    <button class="lc-btn small danger" onclick="removeWrongAnswer('${w.questionId}');switchLCTabContent('wrongbook');">🗑️</button>
                </div></div>`).join('')}</div>` : ''}
        </div>`;
}

window.reviewWrongBook = () => {
    const items = getWrongAnswers('active');
    if (items.length === 0) return alert('没有待复习的错题');
    // Convert wrong book items to exam format and start practice
    const st = getExamState();
    st.questions = items.map(w => ({
        id: w.questionId, category: w.category, categoryId: w.categoryId,
        difficulty: w.difficulty, question: w.question, options: w.options,
        correct: w.correctIndex, explanation: w.explanation
    }));
    st.currentIndex = 0; st.answers = {}; st.flagged = []; st.running = true; st.mode = 'practice';
    st.startTime = Date.now(); st.totalTime = 0;
    switchLCTabContent('exam');
};

// ==================== 薄弱点分析 ====================
function renderWeakAnalysis() {
    const weak = getWeakAreas();
    const s = getProgressSummary();
    return `
        <div class="lc-analysis">
            <h4>🔍 薄弱点分析 | Weak Area Analysis</h4>
            <p style="color:#666;font-size:13px;margin-bottom:15px">基于答题数据自动识别需要加强的领域（正确率 < 60%）</p>
            ${weak.length === 0 ? `<div style="text-align:center;padding:40px;color:#888">🎉 所有领域表现良好！答题数据不足或正确率均在阈值以上。</div>` : `
                <div class="lc-stat-cards" style="grid-template-columns:repeat(3,1fr);margin-bottom:15px">
                    <div class="lc-stat-card"><div class="lc-stat-val">${s.totalQuizzes}</div><div class="lc-stat-lbl">总答题数</div></div>
                    <div class="lc-stat-card"><div class="lc-stat-val">${s.accuracy}%</div><div class="lc-stat-lbl">总正确率</div></div>
                    <div class="lc-stat-card"><div class="lc-stat-val" style="color:#ef4444">${weak.length}</div><div class="lc-stat-lbl">薄弱领域</div></div>
                </div>
                ${weak.map((w,i) => `
                    <div class="weak-card">
                        <div style="display:flex;align-items:center;gap:10px">
                            <span style="font-size:24px">${w.type==='principle'?'📘':'🌐'}</span>
                            <div style="flex:1">
                                <strong>${w.type==='principle'?'原则 '+w.id:'绩效域 '+w.id}</strong>
                                <div style="font-size:12px;color:#888">正确率 ${Math.round(w.accuracy*100)}% (${w.correct}/${w.total})</div>
                            </div>
                            <div class="lc-progress-bar" style="width:200px"><div class="lc-bar"><div class="lc-bar-fill" style="width:${Math.round(w.accuracy*100)}%;background:#ef4444"></div></div></div>
                            <button class="lc-btn small" onclick="window.practiceWeak('${w.type}',${w.id})">🎯 专项练习</button>
                        </div>
                    </div>`).join('')}
            `}
        </div>`;
}

window.practiceWeak = async (type, id) => {
    await startExam(type === 'principle' ? 5 : 3, 0, 'practice');
    switchLCTabContent('exam');
};

// Export global functions
window.openLearningCenter = openLearningCenter;
window.closeLearningCenter = closeLearningCenter;
