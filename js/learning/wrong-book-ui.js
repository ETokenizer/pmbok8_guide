/**
 * 错题分析 — 独立弹窗
 * Wrong Book Analysis — Standalone Modal
 */
import { getWrongBookStats, getWrongAnswers, markMastered, removeWrongAnswer, clearWrongBook, recordReview } from './wrong-book.js';
import { recordQuizAnswer } from './progress.js';

let wbReview = { questions: [], index: 0, answers: {} };

export function openWrongBook() {
    let modal = document.getElementById('wrongBookModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'wrongBookModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `<div class="modal-content wide"><div class="modal-header" style="background:linear-gradient(135deg,#dc2626,#991b1b)"><h3>📕 错题分析 | Wrong Book</h3><button class="modal-close" onclick="window.closeWrongBook()">×</button></div><div class="modal-body" id="wrongBookBody"></div></div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', e => { if (e.target === modal) closeWrongBook(); });
    }
    if (wbReview.questions.length > 0 && wbReview.index < wbReview.questions.length) {
        renderWBQuestion();
    } else {
        renderWrongBookList();
    }
    modal.style.display = 'flex';
}
export function closeWrongBook() { const m = document.getElementById('wrongBookModal'); if (m) m.style.display = 'none'; }

function renderWrongBookList() {
    const stats = getWrongBookStats();
    const items = getWrongAnswers('active');
    const body = document.getElementById('wrongBookBody');
    body.innerHTML = `
        <div class="lc-stat-cards" style="grid-template-columns:repeat(4,1fr);margin-bottom:15px">
            <div class="lc-stat-card"><div class="lc-stat-val">${stats.total}</div><div class="lc-stat-lbl">错题总数</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val" style="color:#ef4444">${stats.active}</div><div class="lc-stat-lbl">待复习</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val" style="color:#10b981">${stats.mastered}</div><div class="lc-stat-lbl">已掌握</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val">${Object.keys(stats.byCategory).length}</div><div class="lc-stat-lbl">涉及类别</div></div>
        </div>
        ${stats.active > 0 ? `<button class="lc-btn" onclick="window._startWBReview()" style="margin-bottom:15px">📖 复习全部错题 (${stats.active}题)</button>` : ''}
        ${Object.keys(stats.byCategory).length > 0 ? `<h4 style="margin-bottom:10px">按类别分布</h4>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:15px">${Object.entries(stats.byCategory).map(([cat, s]) =>
            `<span style="padding:6px 12px;background:#fef2f2;border:1px solid #fecaca;border-radius:20px;font-size:12px">${cat}: ${s.active}/${s.total}</span>`
        ).join('')}</div>` : ''}
        ${items.length > 0 ? `<h4>待复习错题</h4>${items.slice(0,30).map((w,i) => `
            <div class="wb-item"><div style="flex:1"><strong>#${i+1}</strong> ${w.question.substring(0,80)}...</div>
            <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
                <span style="font-size:11px;padding:2px 6px;border-radius:4px;background:${w.difficulty==='easy'?'#d1fae5':w.difficulty==='medium'?'#fef3c7':'#fee2e2'};color:${w.difficulty==='easy'?'#059669':w.difficulty==='medium'?'#b45309':'#dc2626'}">${w.difficulty==='easy'?'简':w.difficulty==='medium'?'中':'难'}</span>
                <span style="font-size:11px;color:#888">错${w.wrongCount}次</span>
                <button class="lc-btn small" onclick="markMastered('${w.questionId}');renderWrongBookList();">✅</button>
                <button class="lc-btn small danger" onclick="removeWrongAnswer('${w.questionId}');renderWrongBookList();">🗑️</button>
            </div></div>`).join('')}` : `<div style="text-align:center;padding:30px;color:#888">🎉 没有待复习的错题！</div>`}
        ${stats.total > 0 ? `<div style="margin-top:15px;text-align:right"><button class="lc-btn danger" onclick="if(confirm('确定清空所有错题？')){clearWrongBook();renderWrongBookList();}">🗑️ 清空错题本</button></div>` : ''}`;
}

window._startWBReview = () => {
    const items = getWrongAnswers('active');
    wbReview.questions = items.map(w => ({
        id: w.questionId, category: w.category, categoryId: w.categoryId,
        difficulty: w.difficulty, question: w.question, options: w.options,
        correct: w.correctIndex, explanation: w.explanation
    }));
    wbReview.index = 0;
    wbReview.answers = {};
    renderWBQuestion();
};

function renderWBQuestion() {
    const items = wbReview.questions;
    const idx = wbReview.index;
    if (idx < 0 || idx >= items.length) { wbReview.questions = []; renderWrongBookList(); return; }
    const q = items[idx];
    const ans = wbReview.answers[idx];
    const body = document.getElementById('wrongBookBody');
    body.innerHTML = `
        <div style="margin-bottom:10px;display:flex;justify-content:space-between;align-items:center">
            <span style="font-weight:600">错题复习 ${idx+1}/${items.length}</span>
            <button class="lc-btn small" onclick="wbReview.questions=[];renderWrongBookList();">← 返回列表</button>
        </div>
        <div class="exam-q-card">
            <div class="exam-q-text">${idx+1}. ${q.question}</div>
            <div class="exam-q-options">${q.options.map((opt, i) => `
                <div class="exam-opt${ans===i?(ans===q.correct?' correct':' incorrect'):''}${ans!==i&&i===q.correct&&ans!==undefined?' correct':''}"
                    onclick="${ans===undefined?'window._wbAnswer('+idx+','+i+')':''}" style="${ans!==undefined?'pointer-events:none;opacity:0.85':''}">
                    <span class="exam-opt-radio">${'ABCD'[i]}</span><span>${opt}</span>
                </div>`).join('')}</div>
            ${ans!==undefined ? `<div style="margin:0 24px 16px;padding:12px;border-radius:6px;border-left:4px solid ${ans===q.correct?'#10b981':'#ef4444'};background:${ans===q.correct?'#f0fdf4':'#fef2f2'}">
                <strong>${ans===q.correct?'✅ 正确':'❌ 错误。正确答案: '+'ABCD'[q.correct]}</strong>
                <div style="font-size:13px;margin-top:6px;line-height:1.6">${q.explanation}</div></div>` : ''}
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:12px">
            <button class="lc-btn" onclick="window._wbGo(${idx-1})" ${idx===0?'disabled':''}>← 上一题</button>
            <button class="lc-btn" onclick="window._wbGo(${idx+1})" ${idx===items.length-1?'disabled':''}>下一题 →</button>
        </div>`;
}

window._wbAnswer = (idx, opt) => {
    wbReview.answers[idx] = opt;
    const q = wbReview.questions[idx];
    const correct = opt === q.correct;
    recordQuizAnswer(q.category||'mixed', q.categoryId||0, q.id||'', q.difficulty||'medium', correct);
    if (correct) recordReview(q.id, true);
    renderWBQuestion();
};
window._wbGo = (idx) => { wbReview.index = idx; renderWBQuestion(); };

window.openWrongBook = openWrongBook;
window.closeWrongBook = closeWrongBook;
