/**
 * 学习中心 UI
 * Learning Center — 进度仪表盘 + 模拟考试 + 错题本 + 薄弱点分析
 */
import { getProgressSummary, getWeakAreas, getPrincipleProgress, getDomainProgress, resetProgress } from './progress.js';
import { getWrongBookStats, getWrongAnswers, markMastered, removeWrongAnswer, clearWrongBook } from './wrong-book.js';
import { openPMPExam } from './exam.js';
import { isCloudAvailable, getBankSize, fetchCloudQuestions } from './question-bank.js';
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
                <h3>🎯 进阶中心 | Premium</h3>
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
                        const names = ['采取整体观','聚焦价值','将质量融入过程与交付物','成为有担当的领导者','可持续性','构建赋能文化'];
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
    if (!isLoggedIn()) {
        return `<div style="text-align:center;padding:40px">
            <div style="font-size:48px;margin-bottom:10px">🔐</div>
            <h3>请先登录</h3>
            <p style="color:#666;margin:10px 0">登录后即可使用模拟考试功能</p>
            <button class="auth-submit-btn" style="max-width:300px" onclick="closeLearningCenter();openAuthModal('login')">🔐 登录 / 注册</button>
        </div>`;
    }

    return `
        <div style="text-align:center;padding:20px">
            <div style="background:linear-gradient(135deg,#e3f2fd,#bbdefb);padding:30px;border-radius:12px;margin-bottom:20px;border:2px solid #64b5f6">
                <div style="font-size:48px;margin-bottom:10px">📝</div>
                <h3 style="color:#1565c0">PMP 全真模拟考试</h3>
                <p style="color:#666;margin:10px 0">180 题 · 230 分钟 · 模拟真实 PMP 认证考试环境</p>
                <p style="font-size:12px;color:#888;margin-bottom:15px">☁️ 云端题库: ${isCloudAvailable()?getBankSize()+'题 ✅':'连接中...'}</p>
                <button onclick="closeLearningCenter();openPMPExam()" style="padding:16px 40px;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;border:none;border-radius:10px;font-size:16px;font-weight:600;cursor:pointer;box-shadow:0 4px 15px rgba(34,197,94,0.3)">
                    🚀 进入考场
                </button>
            </div>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;text-align:left">
                <div style="display:flex;gap:10px;align-items:flex-start;background:#f8fafc;padding:15px;border-radius:8px">
                    <span style="font-size:18px">⏱️</span><div><div style="font-weight:600;font-size:13px">真实计时</div><div style="font-size:11px;color:#888">230 分钟倒计时</div></div>
                </div>
                <div style="display:flex;gap:10px;align-items:flex-start;background:#f8fafc;padding:15px;border-radius:8px">
                    <span style="font-size:18px">📊</span><div><div style="font-weight:600;font-size:13px">即时评分</div><div style="font-size:11px;color:#888">交卷后立即出分</div></div>
                </div>
                <div style="display:flex;gap:10px;align-items:flex-start;background:#f8fafc;padding:15px;border-radius:8px">
                    <span style="font-size:18px">📝</span><div><div style="font-weight:600;font-size:13px">180 道题目</div><div style="font-size:11px;color:#888">覆盖全部考点</div></div>
                </div>
                <div style="display:flex;gap:10px;align-items:flex-start;background:#f8fafc;padding:15px;border-radius:8px">
                    <span style="font-size:18px">🔒</span><div><div style="font-weight:600;font-size:13px">专注环境</div><div style="font-size:11px;color:#888">无干扰答题体验</div></div>
                </div>
            </div>
        </div>`;
}

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

let wbReviewState = { questions: [], currentIndex: 0, answers: {} };

window.reviewWrongBook = () => {
    const items = getWrongAnswers('active');
    if (items.length === 0) return alert('没有待复习的错题');
    wbReviewState.questions = items.map((w, i) => ({
        id: w.questionId, category: w.category, categoryId: w.categoryId,
        difficulty: w.difficulty, question: w.question, options: w.options,
        correct: w.correctIndex, explanation: w.explanation
    }));
    wbReviewState.currentIndex = 0;
    wbReviewState.answers = {};
    renderWBReviewQuestion(0);
};

function renderWBReviewQuestion(idx) {
    const items = wbReviewState.questions;
    if (idx < 0 || idx >= items.length) return;
    wbReviewState.currentIndex = idx;
    const q = items[idx];
    const ans = wbReviewState.answers[idx];
    const body = document.getElementById('lcContent');
    body.innerHTML = `
        <div style="padding:10px"><h4>📕 错题复习 ${idx+1}/${items.length}</h4>
            <div class="exam-q-card" style="margin-top:10px">
                <div class="exam-q-text">${idx+1}. ${q.question}</div>
                <div class="exam-q-options">${q.options.map((opt, i) => `
                    <div class="exam-opt${ans===i?(ans===q.correct?' correct':' incorrect'):''}${ans!==i&&i===q.correct&&ans!==undefined?' correct':''}"
                        onclick="${ans===undefined?'window._wbAnswer('+idx+','+i+')':''}" style="${ans!==undefined?'pointer-events:none;opacity:0.85':''}">
                        <span class="exam-opt-radio">${'ABCD'[i]}</span><span>${opt}</span>
                    </div>`).join('')}</div>
                ${ans!==undefined ? `<div style="margin-top:12px;padding:12px;border-radius:6px;border-left:4px solid ${ans===q.correct?'#10b981':'#ef4444'};background:${ans===q.correct?'#f0fdf4':'#fef2f2'}">
                    <strong>${ans===q.correct?'✅ 正确':'❌ 错误。正确答案: '+'ABCD'[q.correct]}</strong>
                    <div style="font-size:13px;margin-top:6px;line-height:1.6">${q.explanation}</div>
                </div>` : ''}
            </div>
            <div style="display:flex;justify-content:space-between;margin-top:12px">
                <button class="lc-btn" onclick="window._wbPrev()" ${idx===0?'disabled':''}>← 上一题</button>
                <button class="lc-btn" onclick="window._wbNext()" ${idx===items.length-1?'disabled':''}>下一题 →</button>
            </div>
            <button class="lc-btn" style="margin-top:8px;width:100%;background:#888" onclick="switchLCTabContent('wrongbook')">返回错题本</button>
        </div>`;
}

window._wbAnswer = (idx, opt) => {
    wbReviewState.answers[idx] = opt;
    const q = wbReviewState.questions[idx];
    const correct = opt === q.correct;
    import('./progress.js').then(m => m.recordQuizAnswer(q.category||'mixed', q.categoryId||0, q.id||'', q.difficulty||'medium', correct));
    if (correct) import('./wrong-book.js').then(m => m.recordReview(q.id, true));
    renderWBReviewQuestion(idx);
};
window._wbPrev = () => renderWBReviewQuestion(wbReviewState.currentIndex - 1);
window._wbNext = () => renderWBReviewQuestion(wbReviewState.currentIndex + 1);

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

window.practiceWeak = (type, id) => {
    // Open standalone PMP exam for full simulation
    closeLearningCenter();
    openPMPExam();
};

// Export global functions
window.openLearningCenter = openLearningCenter;
window.closeLearningCenter = closeLearningCenter;
