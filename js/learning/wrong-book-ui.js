/**
 * 错题分析 — PMBOK7 风格
 */
import { getWrongBookStats, getWrongAnswers, markMastered, removeWrongAnswer, clearWrongBook, recordReview } from './wrong-book.js';
import { recordQuizAnswer } from './progress.js';
import { isPremium } from '../auth/auth-service.js';

let currentFilter = 'all';
let wbReview = { questions: [], index: 0, answers: {} };

function getFilteredItems() {
    const all = getWrongAnswers('all');
    if (currentFilter === 'unmastered') return all.filter(w => !w.mastered);
    if (currentFilter === 'mastered') return all.filter(w => w.mastered);
    return all;
}

// Premium preview
function showPreview() {
    const all = getWrongAnswers('all');
    const previewItems = all.slice(0, 5);
    const totalWrong = all.length;
    const hasMore = totalWrong > 5;
    return `
        <div style="background:linear-gradient(135deg,#fff8e1,#ffecb3);padding:20px;border-radius:12px;margin-bottom:20px;border:2px solid #ffd54f">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:15px">
                <span style="font-size:24px">🎁</span><div><div style="font-weight:600;color:#8B6914">免费预览错题本功能</div><div style="font-size:12px;color:#666">激活 License 解锁全部 ${totalWrong} 道错题</div></div>
            </div>
            <button onclick="closeWrongBook();openAuthModal('license')" style="padding:10px 20px;background:linear-gradient(135deg,#D4AF37,#FFD700);color:#333;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer">👑 立即激活 License</button>
        </div>
        <div style="margin-bottom:15px;font-size:13px;color:#666">🔓 免费预览：${Math.min(5,totalWrong)}/${totalWrong} 道题${hasMore?`（还有${totalWrong-5}道需激活后查看）`:''}</div>
        ${previewItems.length===0 ? '<div style="text-align:center;padding:40px;color:#888"><p style="font-size:16px">📝 暂无错题</p><p style="font-size:13px">开始答题后做错的题目会自动记录</p></div>' :
        previewItems.map((item, i) => `
            <div class="wrong-item" style="padding:14px;margin:8px 0;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb">
                <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="font-size:12px;color:#888">${item.category} #${item.categoryId} · 错${item.wrongCount}次</span>${item.mastered?'<span style="font-size:11px;background:#d1fae5;color:#059669;padding:2px 8px;border-radius:10px">已掌握</span>':''}</div>
                <div style="font-size:14px;font-weight:600;color:#1f2937;margin-bottom:8px">${item.question.substring(0,100)}...</div>
                <div style="font-size:12px;color:#888">你的答案：${item.options[item.userAnswer]?.substring(0,30)}... | 正确：${item.options[item.correctIndex]?.substring(0,30)}...</div>
                ${i<5 ? `<div style="margin-top:8px;display:flex;gap:6px"><button class="lc-btn small" onclick="window._wbRetryItem('${item.questionId}')">🔄 重做</button>${!item.mastered?`<button class="lc-btn small" onclick="markMastered('${item.questionId}');_renderWBContent();">✅ 已掌握</button>`:''}</div>` : `<div style="margin-top:8px;text-align:center;padding:8px;background:#f5f5f5;border-radius:6px;font-size:12px;color:#666">🔒 激活后可用</div>`}
            </div>`).join('')}
        ${hasMore && previewItems.length>0 ? `<div style="margin-top:15px;text-align:center;padding:15px;background:#f8f9fa;border-radius:12px"><p style="color:#666;margin-bottom:10px">🔓 还有 ${totalWrong-5} 道错题等待查看</p><button onclick="closeWrongBook();openAuthModal('license')" style="padding:10px 24px;background:linear-gradient(135deg,#D4AF37,#FFD700);color:#333;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer">👑 激活解锁全部错题</button></div>`:''}`;
}

function renderFull() {
    const stats = getWrongBookStats();
    const items = getFilteredItems();
    return `
        <div class="wrong-book-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px">
            <div><span style="font-size:18px;font-weight:600;color:var(--pmi-dark)">错题统计</span><p style="font-size:12px;color:#888;margin-top:5px">智能记录错题，针对性复习提分</p></div>
            <button onclick="window._retryAllWrong()" class="lc-btn" style="background:#f59e0b">🔄 全部重做</button>
        </div>
        <div class="wrong-book-filters" style="display:flex;gap:8px;margin-bottom:15px">
            <button class="filter-btn${currentFilter==='all'?' active':''}" onclick="window._wbFilter('all')" style="padding:8px 16px;border-radius:20px;cursor:pointer;font-size:13px;border:none;background:${currentFilter==='all'?'#f59e0b':'#f3f4f6'};color:${currentFilter==='all'?'#fff':'#374151'}">全部 (${stats.total})</button>
            <button class="filter-btn${currentFilter==='unmastered'?' active':''}" onclick="window._wbFilter('unmastered')" style="padding:8px 16px;border-radius:20px;cursor:pointer;font-size:13px;border:none;background:${currentFilter==='unmastered'?'#f59e0b':'#f3f4f6'};color:${currentFilter==='unmastered'?'#fff':'#374151'}">未掌握 (${stats.active})</button>
            <button class="filter-btn${currentFilter==='mastered'?' active':''}" onclick="window._wbFilter('mastered')" style="padding:8px 16px;border-radius:20px;cursor:pointer;font-size:13px;border:none;background:${currentFilter==='mastered'?'#f59e0b':'#f3f4f6'};color:${currentFilter==='mastered'?'#fff':'#374151'}">已掌握 (${stats.mastered})</button>
        </div>
        ${items.length === 0 ? `<div style="text-align:center;padding:40px;color:#888">${currentFilter==='mastered'?'暂无已掌握的错题':'🎉 没有错题！继续保持！'}</div>` :
        items.map((item, i) => `
            <div class="wrong-item" style="padding:14px;margin:8px 0;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb">
                <div style="display:flex;justify-content:space-between;margin-bottom:8px">
                    <span style="font-size:12px;color:#888">${item.category||'未知'} · 错${item.wrongCount}次</span>
                    <div style="display:flex;gap:6px">${item.mastered?'<span style="font-size:11px;background:#d1fae5;color:#059669;padding:2px 8px;border-radius:10px">已掌握</span>':'<span style="font-size:11px;background:#fef2f2;color:#dc2626;padding:2px 8px;border-radius:10px">待复习</span>'}</div>
                </div>
                <div style="font-size:14px;font-weight:600;color:#1f2937;margin-bottom:8px">${item.question}</div>
                <div style="font-size:12px;color:#888;margin-bottom:4px">你的答案：<span style="color:#dc2626">${item.options[item.userAnswer]||'?'}</span></div>
                <div style="font-size:12px;color:#888;margin-bottom:8px">正确答案：<span style="color:#059669">${item.options[item.correctIndex]||'?'}</span></div>
                <div style="display:flex;gap:6px">
                    <button class="lc-btn small" onclick="window._wbRetryItem('${item.questionId}')">🔄 重做</button>
                    ${!item.mastered ? `<button class="lc-btn small" onclick="markMastered('${item.questionId}');_renderWBContent();" style="background:#10b981">✅ 已掌握</button>` : ''}
                    <button class="lc-btn small danger" onclick="removeWrongAnswer('${item.questionId}');_renderWBContent();">🗑️</button>
                </div>
            </div>`).join('')}
        ${stats.total > 0 ? `<div style="margin-top:15px;text-align:right"><button class="lc-btn danger" onclick="if(confirm('清空全部错题？')){clearWrongBook();_renderWBContent();}">🗑️ 清空错题本</button></div>` : ''}`;
}

function _renderWBContent() { const b=document.getElementById('wbBody'); if(b) b.innerHTML=isPremium()?renderFull():showPreview(); }
window._renderWBContent = _renderWBContent;

window._wbFilter = (f) => { currentFilter = f; _renderWBContent(); };
window._retryAllWrong = () => {
    const items = getWrongAnswers('active');
    if (items.length===0) return alert('没有待复习的错题');
    wbReview.questions = items.map(w => ({ id:w.questionId, category:w.category, categoryId:w.categoryId, difficulty:w.difficulty, question:w.question, options:w.options, correct:w.correctIndex, explanation:w.explanation }));
    wbReview.index=0; wbReview.answers={};
    _renderWBReview();
};
window._wbRetryItem = (qid) => {
    const item = getWrongAnswers('all').find(w=>w.questionId===qid);
    if (!item) return;
    wbReview.questions = [{ id:item.questionId, category:item.category, categoryId:item.categoryId, difficulty:item.difficulty, question:item.question, options:item.options, correct:item.correctIndex, explanation:item.explanation }];
    wbReview.index=0; wbReview.answers={};
    _renderWBReview();
};

function _renderWBReview() {
    const items = wbReview.questions; const idx = wbReview.index;
    if (idx < 0 || idx >= items.length) { wbReview.questions=[]; _renderWBContent(); return; }
    const q = items[idx]; const ans = wbReview.answers[idx];
    const b = document.getElementById('wbBody');
    b.innerHTML = `
        <div style="margin-bottom:10px;display:flex;justify-content:space-between;align-items:center"><span style="font-weight:600">错题复习 ${idx+1}/${items.length}</span><button class="lc-btn small" onclick="wbReview.questions=[];_renderWBContent();">← 返回列表</button></div>
        <div class="exam-q-card"><div class="exam-q-text">${idx+1}. ${q.question}</div>
            <div class="exam-q-options">${q.options.map((opt,i)=>`<div class="exam-opt${ans===i?(ans===q.correct?' correct':' incorrect'):''}${ans!==i&&i===q.correct&&ans!==undefined?' correct':''}" onclick="${ans===undefined?'window._wbDoAnswer('+idx+','+i+')':''}" style="${ans!==undefined?'pointer-events:none;opacity:0.85':''}"><span class="exam-opt-radio">${'ABCD'[i]}</span><span>${opt}</span></div>`).join('')}</div>
            ${ans!==undefined?`<div style="margin:0 24px 16px;padding:12px;border-radius:6px;border-left:4px solid ${ans===q.correct?'#10b981':'#ef4444'};background:${ans===q.correct?'#f0fdf4':'#fef2f2'}"><strong>${ans===q.correct?'✅ 正确':'❌ 错误。正确答案: '+'ABCD'[q.correct]}</strong><div style="font-size:13px;margin-top:6px;line-height:1.6">${q.explanation}</div></div>`:''}
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:12px"><button class="lc-btn" onclick="window._wbGoReview(${idx-1})" ${idx===0?'disabled':''}>← 上一题</button><button class="lc-btn" onclick="window._wbGoReview(${idx+1})" ${idx===items.length-1?'disabled':''}>下一题 →</button></div>`;
}
window._wbDoAnswer = (idx, opt) => { wbReview.answers[idx]=opt; const q=wbReview.questions[idx]; recordQuizAnswer(q.category||'mixed',q.categoryId||0,q.id||'',q.difficulty||'medium',opt===q.correct); if(opt===q.correct) recordReview(q.id,true); _renderWBReview(); };
window._wbGoReview = (idx) => { wbReview.index=idx; _renderWBReview(); };

// ============ Modal ============
export function openWrongBook() {
    let m = document.getElementById('wbModal');
    if (!m) {
        m = document.createElement('div'); m.id = 'wbModal'; m.className = 'modal-overlay';
        m.innerHTML = `<div class="modal-content" style="max-width:900px"><div class="modal-header" style="background:linear-gradient(135deg,#f59e0b,#d97706)"><h3>📕 错题分析 | Wrong Book</h3><button class="modal-close" onclick="window.closeWrongBook()">×</button></div><div class="modal-body" id="wbBody"></div></div>`;
        document.body.appendChild(m);
        m.addEventListener('click', e => { if (e.target === m) closeWrongBook(); });
    }
    wbReview.questions = [];
    _renderWBContent();
    m.style.display = 'flex';
}
export function closeWrongBook() { const m = document.getElementById('wbModal'); if (m) m.style.display = 'none'; }

window.openWrongBook = openWrongBook;
window.closeWrongBook = closeWrongBook;
