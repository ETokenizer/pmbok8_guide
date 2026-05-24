/**
 * 薄弱点分析 — PMBOK7 风格
 */
import { getProgressSummary, getWeakAreas, getPrincipleProgress, getDomainProgress } from './progress.js';
import { getWrongBookStats } from './wrong-book.js';
import { openPMPExam } from './exam.js';
import { isPremium } from '../auth/auth-service.js';

const namesP = ['采取整体观','聚焦价值','将质量融入过程与交付物','成为有担当的领导者','可持续性','构建赋能文化'];
const namesD = ['治理','范围','进度','财务','相关方','资源','风险'];

// Premium preview
function showPreview() {
    const s = getProgressSummary();
    return `
        <div style="background:linear-gradient(135deg,#ede9fe,#ddd6fe);padding:20px;border-radius:12px;margin-bottom:20px;border:2px solid #a78bfa">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:15px">
                <span style="font-size:24px">🔍</span><div><div style="font-weight:600;color:#5b21b6">智能薄弱点识别</div><div style="font-size:12px;color:#666">激活 License 解锁完整分析功能</div></div>
            </div>
            <button onclick="closeWeakAnalysis();openAuthModal('license')" style="padding:10px 20px;background:linear-gradient(135deg,#D4AF37,#FFD700);color:#333;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer">👑 立即激活 License</button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px">
            <div style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div style="font-size:24px;font-weight:700;color:var(--pmi-blue)">${s.totalQuizzes}</div><div style="font-size:12px;color:#888">总答题数</div></div>
            <div style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div style="font-size:24px;font-weight:700;color:#f59e0b">${s.accuracy}%</div><div style="font-size:12px;color:#888">总正确率</div></div>
            <div style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div style="font-size:24px;font-weight:700;color:#8b5cf6">${s.totalQuizzes>0?'数据分析中':'?'}</div><div style="font-size:12px;color:#888">答题越多越准确</div></div>
        </div>
        <div style="background:linear-gradient(135deg,#fff3e0,#ffe0b2);padding:20px;border-radius:12px;border:2px solid #ffb74d;text-align:center">
            <p style="font-weight:600;color:#e65100;margin-bottom:10px">📊 需要更多答题数据</p>
            <p style="font-size:13px;color:#666;margin-bottom:15px">完成更多题目后，系统将自动分析你的薄弱领域</p>
            <button onclick="closeWeakAnalysis();openAuthModal('license')" style="padding:12px 24px;background:linear-gradient(135deg,#D4AF37,#FFD700);color:#333;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;width:100%">🔓 激活解锁完整分析</button>
        </div>`;
}

function renderFull() {
    const s = getProgressSummary();
    const weak = getWeakAreas();
    const wb = getWrongBookStats();
    const allItems = [];
    [1,2,3,4,5,6].forEach(n => { const p=getPrincipleProgress(n); if(p.quizTotal>0) allItems.push({type:'principle',id:n,name:namesP[n-1],acc:Math.round(p.quizCorrect/p.quizTotal*100),correct:p.quizCorrect,total:p.quizTotal}); });
    [1,2,3,4,5,6,7].forEach(n => { const d=getDomainProgress(n); if(d.quizTotal>0) allItems.push({type:'domain',id:n,name:namesD[n-1],acc:Math.round(d.quizCorrect/d.quizTotal*100),correct:d.quizCorrect,total:d.quizTotal}); });
    allItems.sort((a,b)=>a.acc-b.acc);
    const weakItems = allItems.filter(d=>d.acc<60);
    const okItems = allItems.filter(d=>d.acc>=60&&d.acc<80);
    const goodItems = allItems.filter(d=>d.acc>=80);

    return `
        <div class="progress-stats-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px">
            <div class="progress-stat-card" style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div class="progress-stat-value" style="font-size:24px;font-weight:700;color:var(--pmi-blue)">${s.totalQuizzes}</div><div class="progress-stat-label" style="font-size:12px;color:#888">总答题数</div></div>
            <div class="progress-stat-card" style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div class="progress-stat-value" style="font-size:24px;font-weight:700;color:#f59e0b">${s.accuracy}%</div><div class="progress-stat-label" style="font-size:12px;color:#888">总正确率</div></div>
            <div class="progress-stat-card" style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div class="progress-stat-value" style="font-size:24px;font-weight:700;color:#ef4444">${weakItems.length}</div><div class="progress-stat-label" style="font-size:12px;color:#888">薄弱领域</div></div>
        </div>

        ${allItems.length > 0 ? `
            <h4 style="margin-bottom:12px;color:var(--pmi-dark)">📊 全部领域掌握排名（从弱到强）</h4>
            ${allItems.map((d,i) => `
                <div style="display:flex;align-items:center;gap:10px;padding:12px;margin:6px 0;background:#f9fafb;border-radius:8px;border-left:4px solid ${d.acc<60?'#ef4444':d.acc<80?'#f59e0b':'#10b981'}">
                    <span style="font-size:18px">${d.type==='principle'?'📘':'🌐'}</span>
                    <div style="flex:1"><strong>${d.type==='principle'?'原则':'绩效域'} ${d.id}: ${d.name}</strong><div style="font-size:11px;color:#888">答题${d.total}次 · 正确${d.correct}次</div></div>
                    <div style="width:120px;height:8px;background:#e5e7eb;border-radius:4px;overflow:hidden"><div style="height:100%;border-radius:4px;width:${d.acc}%;background:${d.acc<60?'#ef4444':d.acc<80?'#f59e0b':'#10b981'};transition:width 0.5s"></div></div>
                    <span style="font-weight:700;font-size:14px;min-width:40px;text-align:right;color:${d.acc<60?'#ef4444':d.acc<80?'#b45309':'#059669'}">${d.acc}%</span>
                </div>`).join('')}
        ` : `<div style="text-align:center;padding:30px;color:#888">暂无答题数据。完成更多自测和模拟考试后，这里将显示各领域的掌握程度和薄弱点分析。</div>`}

        ${weakItems.length > 0 ? `
            <div style="margin-top:15px;padding:15px;background:#fef2f2;border-radius:8px;border:1px solid #fecaca">
                <h4 style="color:#dc2626;margin-bottom:10px">💡 学习建议</h4>
                <ul style="padding-left:20px;line-height:2;color:#7f1d1d;font-size:13px">
                    <li>优先复习正确率低于60%的领域：${weakItems.map(w=>w.name).join('、')}</li>
                    <li>使用模拟考试检验薄弱领域的提升效果</li>
                    <li>错题本中有 <strong>${wb.active}</strong> 道待复习题目</li>
                    ${weakItems.length>=3?'<li>薄弱点较多，建议制定系统复习计划</li>':''}
                    ${goodItems.length>0?`<li>已掌握较好的领域：${goodItems.map(g=>g.name).join('、')} ✅</li>`:''}
                </ul>
                <button class="lc-btn" style="margin-top:8px" onclick="closeWeakAnalysis();openPMPExam();">🚀 开始模拟考试检验</button>
            </div>` : (allItems.length>0 ? `<div style="text-align:center;padding:20px;color:#888;margin-top:15px">🎉 所有领域表现良好！</div>` : '')}
        <p style="font-size:11px;color:#888;margin-top:10px">* 分析基于已完成的答题数据。答题越多，分析越准确。</p>`;
}

function _renderAnalysisContent() { const b=document.getElementById('weakBody'); if(b) b.innerHTML=isPremium()?renderFull():showPreview(); }

// ============ Modal ============
export function openWeakAnalysis() {
    let m = document.getElementById('weakModal');
    if (!m) {
        m = document.createElement('div'); m.id = 'weakModal'; m.className = 'modal-overlay';
        m.innerHTML = `<div class="modal-content" style="max-width:900px"><div class="modal-header" style="background:linear-gradient(135deg,#7c3aed,#6d28d9)"><h3>🔍 薄弱点分析 | Weakness Analysis</h3><button class="modal-close" onclick="window.closeWeakAnalysis()">×</button></div><div class="modal-body" id="weakBody"></div></div>`;
        document.body.appendChild(m);
        m.addEventListener('click', e => { if (e.target === m) closeWeakAnalysis(); });
    }
    _renderAnalysisContent();
    m.style.display = 'flex';
}
export function closeWeakAnalysis() { const m = document.getElementById('weakModal'); if (m) m.style.display = 'none'; }

window.openWeakAnalysis = openWeakAnalysis;
window.closeWeakAnalysis = closeWeakAnalysis;
