/**
 * 学习仪表盘 — 独立弹窗
 * Learning Dashboard — Standalone Modal
 */
import { getProgressSummary, getPrincipleProgress, getDomainProgress, getWeakAreas, resetProgress } from './progress.js';
import { getWrongBookStats } from './wrong-book.js';
import { getBankSize, isCloudAvailable } from './question-bank.js';

export function openDashboard() {
    let modal = document.getElementById('dashboardModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'dashboardModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `<div class="modal-content wide"><div class="modal-header" style="background:linear-gradient(135deg,#1e40af,#3b82f6)"><h3>📊 学习仪表盘 | Learning Dashboard</h3><button class="modal-close" onclick="window.closeDashboard()">×</button></div><div class="modal-body" id="dashboardBody"></div></div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', e => { if (e.target === modal) closeDashboard(); });
    }
    renderDashboard();
    modal.style.display = 'flex';
}
export function closeDashboard() { const m = document.getElementById('dashboardModal'); if (m) m.style.display = 'none'; }

function renderDashboard() {
    const s = getProgressSummary();
    const weak = getWeakAreas();
    const wb = getWrongBookStats();
    const body = document.getElementById('dashboardBody');
    body.innerHTML = `
        <div class="lc-stat-cards">
            <div class="lc-stat-card"><div class="lc-stat-val">${s.principlesViewed}/6</div><div class="lc-stat-lbl">原则已学</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val">${s.domainsViewed}/7</div><div class="lc-stat-lbl">绩效域已学</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val">${s.totalQuizzes}</div><div class="lc-stat-lbl">总答题数</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val">${s.accuracy}%</div><div class="lc-stat-lbl">正确率</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val">${s.totalTime}分</div><div class="lc-stat-lbl">学习时长</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val">${s.streakDays}天</div><div class="lc-stat-lbl">连续学习</div></div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:15px">
            <div class="lc-card"><h4>📘 原则掌握度 | Principle Mastery</h4>
                ${[1,2,3,4,5,6].map(n => { const pp=getPrincipleProgress(n); const pct=pp.quizTotal>0?Math.round(pp.quizCorrect/pp.quizTotal*100):0; const names=['整体视角','聚焦价值','融入质量','负责任领导','协作团队','管家精神']; return `<div class="lc-progress-bar"><span class="lc-bar-label">${names[n-1]}</span><div class="lc-bar"><div class="lc-bar-fill" style="width:${pct}%;background:${pct>=60?'#10b981':pct>0?'#f59e0b':'#e5e7eb'}"></div></div><span class="lc-bar-pct">${pp.quizTotal>0?pct+'% ('+pp.quizCorrect+'/'+pp.quizTotal+')':'未答题'}</span></div>`; }).join('')}
            </div>
            <div class="lc-card"><h4>🌐 绩效域掌握度 | Domain Mastery</h4>
                ${[1,2,3,4,5,6,7].map(n => { const dp=getDomainProgress(n); const pct=dp.quizTotal>0?Math.round(dp.quizCorrect/dp.quizTotal*100):0; const names=['治理','范围','进度','财务','相关方','资源','风险']; return `<div class="lc-progress-bar"><span class="lc-bar-label">${names[n-1]}</span><div class="lc-bar"><div class="lc-bar-fill" style="width:${pct}%;background:${pct>=60?'#10b981':pct>0?'#f59e0b':'#e5e7eb'}"></div></div><span class="lc-bar-pct">${dp.quizTotal>0?pct+'% ('+dp.quizCorrect+'/'+dp.quizTotal+')':'未答题'}</span></div>`; }).join('')}
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:15px">
            <div class="lc-stat-card"><div class="lc-stat-val">${wb.total}</div><div class="lc-stat-lbl">错题总数</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val" style="color:#ef4444">${wb.active}</div><div class="lc-stat-lbl">待复习</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val" style="color:#10b981">${wb.mastered}</div><div class="lc-stat-lbl">已掌握</div></div>
            <div class="lc-stat-card"><div class="lc-stat-val">${isCloudAvailable()?getBankSize():'?'}</div><div class="lc-stat-lbl">云端题库</div></div>
        </div>
        ${weak.length > 0 ? `<div class="lc-card" style="margin-top:15px;border-left:4px solid #ef4444"><h4>⚠️ 需要加强的领域</h4>${weak.map(w => `<span style="display:inline-block;margin:4px;padding:4px 10px;background:#fef2f2;border-radius:4px;font-size:12px">${w.type==='principle'?'原则'+w.id:'绩效域'+w.id} (${Math.round(w.accuracy*100)}%)</span>`).join('')}</div>` : ''}
        <div style="margin-top:15px;text-align:right"><button class="lc-btn danger" onclick="if(confirm('确定清空所有学习进度？')){resetProgress();renderDashboard();}">🗑️ 重置进度</button></div>`;
}

window.openDashboard = openDashboard;
window.closeDashboard = closeDashboard;
