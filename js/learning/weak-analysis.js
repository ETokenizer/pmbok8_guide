/**
 * 薄弱点分析 — 独立弹窗
 * Weakness Analysis — Standalone Modal
 */
import { getProgressSummary, getWeakAreas, getPrincipleProgress, getDomainProgress } from './progress.js';
import { getWrongBookStats } from './wrong-book.js';
import { openPMPExam } from './exam.js';

export function openWeakAnalysis() {
    let modal = document.getElementById('weakModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'weakModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `<div class="modal-content wide"><div class="modal-header" style="background:linear-gradient(135deg,#7c3aed,#6d28d9)"><h3>🔍 薄弱点分析 | Weak Area Analysis</h3><button class="modal-close" onclick="window.closeWeakAnalysis()">×</button></div><div class="modal-body" id="weakBody"></div></div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', e => { if (e.target === modal) closeWeakAnalysis(); });
    }
    renderWeakAnalysis();
    modal.style.display = 'flex';
}
export function closeWeakAnalysis() { const m = document.getElementById('weakModal'); if (m) m.style.display = 'none'; }

function renderWeakAnalysis() {
    const s = getProgressSummary();
    const weak = getWeakAreas();
    const wb = getWrongBookStats();
    const body = document.getElementById('weakBody');

    // Principle detail breakdown
    const principleDetails = [1,2,3,4,5,6].map(n => {
        const p = getPrincipleProgress(n);
        const names = ['整体视角','聚焦价值','融入质量','负责任领导','协作团队','管家精神'];
        const acc = p.quizTotal > 0 ? Math.round(p.quizCorrect/p.quizTotal*100) : null;
        return { id: n, name: names[n-1], type: 'principle', accuracy: acc, correct: p.quizCorrect, total: p.quizTotal };
    });
    const domainDetails = [1,2,3,4,5,6,7].map(n => {
        const d = getDomainProgress(n);
        const names = ['治理','范围','进度','财务','相关方','资源','风险'];
        const acc = d.quizTotal > 0 ? Math.round(d.quizCorrect/d.quizTotal*100) : null;
        return { id: n, name: names[n-1], type: 'domain', accuracy: acc, correct: d.quizCorrect, total: d.quizTotal };
    });

    const allSorted = [...principleDetails, ...domainDetails].filter(d => d.accuracy !== null).sort((a,b) => (a.accuracy||0) - (b.accuracy||0));

    body.innerHTML = `
        <div class="lc-stat-cards" style="grid-template-columns:repeat(3,1fr);margin-bottom:15px">
            <div class="lc-stat-card"><div class="lc-stat-val">${s.totalQuizzes}</div><div class="lc-stat-lbl">总答题数</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val">${s.accuracy}%</div><div class="lc-stat-lbl">总正确率</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val" style="color:#ef4444">${weak.length}</div><div class="lc-stat-lbl">薄弱领域</div></div>
        </div>
        ${allSorted.length > 0 ? `
            <h4 style="margin-bottom:10px">📊 全部领域排名 (从弱到强)</h4>
            ${allSorted.map((d, i) => `
                <div class="weak-card" style="border-left:4px solid ${d.accuracy<60?'#ef4444':d.accuracy<80?'#f59e0b':'#10b981'}">
                    <div style="display:flex;align-items:center;gap:10px">
                        <span style="font-size:20px">${d.type==='principle'?'📘':'🌐'}</span>
                        <div style="flex:1"><strong>${d.type==='principle'?'原则':'绩效域'} ${d.id}: ${d.name}</strong>
                            <div style="font-size:12px;color:#888">答题 ${d.total} 次，正确 ${d.correct} 次</div></div>
                        <div style="width:150px"><div class="lc-bar"><div class="lc-bar-fill" style="width:${d.accuracy}%;background:${d.accuracy<60?'#ef4444':d.accuracy<80?'#f59e0b':'#10b981'}"></div></div></div>
                        <span style="font-weight:700;font-size:14px;color:${d.accuracy<60?'#ef4444':d.accuracy<80?'#b45309':'#059669'}">${d.accuracy}%</span>
                    </div>
                </div>`).join('')}
        ` : `<div style="text-align:center;padding:30px;color:#888">暂无答题数据。完成更多自测和模拟考试后，这里会显示各领域的掌握程度和薄弱点分析。</div>`}
        ${weak.length > 0 ? `
            <div style="margin-top:15px;padding:15px;background:#fef2f2;border-radius:var(--radius);border:1px solid #fecaca">
                <h4 style="color:#dc2626;margin-bottom:10px">💡 学习建议</h4>
                <ul style="padding-left:20px;line-height:2;color:#7f1d1d;font-size:13px">
                    <li>建议优先复习正确率低于60%的领域</li>
                    <li>使用模拟考试检验薄弱领域的提升效果</li>
                    <li>错题本中有${wb.active}道待复习题目</li>
                    ${weak.length >= 3 ? '<li>薄弱点较多，建议制定系统复习计划</li>' : ''}
                </ul>
                <button class="lc-btn" style="margin-top:8px" onclick="closeWeakAnalysis();openPMPExam();">🚀 开始模拟考试检验</button>
            </div>` : ''}
        <p style="font-size:11px;color:#888;margin-top:10px">* 分析基于已完成的答题数据。答题越多，分析越准确。</p>`;
}

window.openWeakAnalysis = openWeakAnalysis;
window.closeWeakAnalysis = closeWeakAnalysis;
