/**
 * 学习进度中心 — PMBOK7 风格
 */
import { getProgressSummary, getPrincipleProgress, getDomainProgress, getWeakAreas, resetProgress } from './progress.js';
import { getWrongBookStats } from './wrong-book.js';
import { isPremium } from '../auth/auth-service.js';

// Premium preview for non-premium users
function showPreview() {
    const s = getProgressSummary();
    return `
        <div style="background:linear-gradient(135deg,#e8f5e9,#c8e6c9);padding:20px;border-radius:12px;margin-bottom:20px;border:2px solid #81c784">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:15px">
                <span style="font-size:24px">🎯</span><div><div style="font-weight:600;color:#2e7d32">追踪你的学习进度</div><div style="font-size:12px;color:#666">激活 License 解锁完整数据分析</div></div>
            </div>
            <button onclick="closeDashboard();openAuthModal('license')" style="padding:10px 20px;background:linear-gradient(135deg,#D4AF37,#FFD700);color:#333;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer">👑 立即激活 License</button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px">
            <div style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div style="font-size:24px;font-weight:700;color:var(--pmi-blue)">${s.streakDays}</div><div style="font-size:12px;color:#888;margin-top:5px">🔥 连续学习</div></div>
            <div style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div style="font-size:24px;font-weight:700;color:#22c55e">${s.totalQuizzes}</div><div style="font-size:12px;color:#888;margin-top:5px">📝 完成答题</div></div>
            <div style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div style="font-size:24px;font-weight:700;color:#f59e0b">${s.accuracy}%</div><div style="font-size:12px;color:#888;margin-top:5px">✅ 正确率</div></div>
            <div style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div style="font-size:24px;font-weight:700;color:#8b5cf6">${s.totalTime}分</div><div style="font-size:12px;color:#888;margin-top:5px">⏱️ 学习时长</div></div>
        </div>
        <div style="background:linear-gradient(135deg,#fff3e0,#ffe0b2);padding:20px;border-radius:12px;border:2px solid #ffb74d;text-align:center">
            <p style="font-weight:600;color:#e65100;margin-bottom:10px">📈 激活 License 解锁完整功能</p>
            <ul style="font-size:13px;color:#555;text-align:left;max-width:400px;margin:0 auto 15px;line-height:2">
                <li>✅ 每项原则/绩效域学习进度详情</li><li>✅ 答题趋势与掌握度分析</li><li>✅ 薄弱领域智能识别</li><li>✅ 学习建议自动生成</li>
            </ul>
            <button onclick="closeDashboard();openAuthModal('license')" style="padding:12px 24px;background:linear-gradient(135deg,#D4AF37,#FFD700);color:#333;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;width:100%">🔓 激活解锁全部功能</button>
        </div>`;
}

function renderFull() {
    const s = getProgressSummary();
    const wb = getWrongBookStats();
    const weak = getWeakAreas();
    const namesP = ['采取整体观','聚焦价值','将质量融入过程与交付物','成为有担当的领导者','可持续性','构建赋能文化'];
    const namesD = ['治理','范围','进度','财务','相关方','资源','风险'];

    return `
        <div class="progress-stats-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px">
            <div class="progress-stat-card" style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div class="progress-stat-value" style="font-size:24px;font-weight:700;color:var(--pmi-blue)">${s.totalTime}分</div><div class="progress-stat-label" style="font-size:12px;color:#888;margin-top:5px">总学习时长</div></div>
            <div class="progress-stat-card" style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div class="progress-stat-value" style="font-size:24px;font-weight:700;color:#22c55e">${s.totalQuizzes}</div><div class="progress-stat-label" style="font-size:12px;color:#888;margin-top:5px">完成答题</div></div>
            <div class="progress-stat-card" style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div class="progress-stat-value" style="font-size:24px;font-weight:700;color:#f59e0b">${s.accuracy}%</div><div class="progress-stat-label" style="font-size:12px;color:#888;margin-top:5px">正确率</div></div>
            <div class="progress-stat-card" style="background:#f8f9fa;padding:15px;border-radius:10px;text-align:center"><div class="progress-stat-value" style="font-size:24px;font-weight:700;color:#ef4444">${wb.active}</div><div class="progress-stat-label" style="font-size:12px;color:#888;margin-top:5px">待复习错题</div></div>
        </div>
        <div class="progress-section" style="margin-bottom:20px">
            <div class="progress-section-title" style="font-weight:600;color:var(--pmi-dark);margin-bottom:12px">📌 6 项原则学习进度</div>
            ${[1,2,3,4,5,6].map(n => { const pp=getPrincipleProgress(n); const pct=pp.quizTotal>0?Math.round(pp.quizCorrect/pp.quizTotal*100):0; return `<div style="display:flex;align-items:center;gap:10px;margin:8px 0;padding:10px;background:#f9fafb;border-radius:8px"><span style="width:80px;font-size:13px;text-align:right;flex-shrink:0">${namesP[n-1]}</span><div style="flex:1;height:10px;background:#e5e7eb;border-radius:5px;overflow:hidden"><div style="height:100%;border-radius:5px;width:${pct}%;background:${pct>=60?'#10b981':pct>0?'#f59e0b':'#e5e7eb'};transition:width 0.5s"></div></div><span style="font-size:12px;color:#888;width:80px;flex-shrink:0">${pp.quizTotal>0?pct+'% ('+pp.quizCorrect+'/'+pp.quizTotal+')':'未答题'}</span></div>`; }).join('')}
        </div>
        <div class="progress-section" style="margin-bottom:20px">
            <div class="progress-section-title" style="font-weight:600;color:var(--pmi-dark);margin-bottom:12px">🌐 7 个绩效域学习进度</div>
            ${[1,2,3,4,5,6,7].map(n => { const dp=getDomainProgress(n); const pct=dp.quizTotal>0?Math.round(dp.quizCorrect/dp.quizTotal*100):0; return `<div style="display:flex;align-items:center;gap:10px;margin:8px 0;padding:10px;background:#f9fafb;border-radius:8px"><span style="width:80px;font-size:13px;text-align:right;flex-shrink:0">${namesD[n-1]}</span><div style="flex:1;height:10px;background:#e5e7eb;border-radius:5px;overflow:hidden"><div style="height:100%;border-radius:5px;width:${pct}%;background:${pct>=60?'#10b981':pct>0?'#f59e0b':'#e5e7eb'};transition:width 0.5s"></div></div><span style="font-size:12px;color:#888;width:80px;flex-shrink:0">${dp.quizTotal>0?pct+'% ('+dp.quizCorrect+'/'+dp.quizTotal+')':'未答题'}</span></div>`; }).join('')}
        </div>
        <div class="progress-section">
            <div class="progress-section-title" style="font-weight:600;color:var(--pmi-dark);margin-bottom:12px">🔥 连续学习天数</div>
            <div style="display:flex;align-items:center;gap:15px;padding:15px;background:#f9fafb;border-radius:10px">
                <span style="font-size:28px;font-weight:700;color:var(--pmi-blue)">${s.streakDays}</span><span style="color:#888">天</span>
                <span style="font-size:12px;color:#888;margin-left:10px">${s.streakDays>0?'继续保持！':'今天开始学习吧！'}</span>
            </div>
        </div>
        ${weak.length > 0 ? `<div style="margin-top:15px;padding:12px;background:#fef2f2;border-radius:8px;border-left:4px solid #ef4444"><strong style="color:#dc2626">⚠️ 需要加强：</strong> ${weak.map(w => `${w.type==='principle'?'原则'+w.id:'绩效域'+w.id}(${Math.round(w.accuracy*100)}%)`).join('、')}</div>` : ''}
        <div style="margin-top:15px;text-align:right"><button class="lc-btn danger" onclick="if(confirm('确定清空所有学习进度？')){resetProgress();_renderDashboardContent();}">🗑️ 重置进度</button></div>`;
}

function _renderDashboardContent() { const b=document.getElementById('dashBody'); if(b) b.innerHTML=isPremium()?renderFull():showPreview(); }
window._renderDashboardContent = _renderDashboardContent;

// ============ Modal ============
export function openDashboard() {
    let m = document.getElementById('dashModal');
    if (!m) {
        m = document.createElement('div'); m.id = 'dashModal'; m.className = 'modal-overlay';
        m.innerHTML = `<div class="modal-content" style="max-width:900px"><div class="modal-header" style="background:linear-gradient(135deg,#10b981,#059669)"><h3>📊 学习进度 | Learning Progress</h3><button class="modal-close" onclick="window.closeDashboard()">×</button></div><div class="modal-body" id="dashBody"></div></div>`;
        document.body.appendChild(m);
        m.addEventListener('click', e => { if (e.target === m) closeDashboard(); });
    }
    _renderDashboardContent();
    m.style.display = 'flex';
}
export function closeDashboard() { const m = document.getElementById('dashModal'); if (m) m.style.display = 'none'; }

window.openDashboard = openDashboard;
window.closeDashboard = closeDashboard;
