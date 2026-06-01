/**
 * PMBOK Edition 8 - 弹窗管理模块
 * Modal Management: 案例弹窗、自测弹窗、案例库弹窗、ITTO详情弹窗
 */
import { ittoRegistry, ittoProcLookup, ittoFocusAreas } from '../data/itto-registry.js';
import { ittoDefinitions, getDefinition } from '../data/itto-definitions.js';
import { bilingualName, englishName } from '../data/itto-bilingual.js';
import { recordQuizAnswer } from '../learning/progress.js';
import { addWrongAnswer } from '../learning/wrong-book.js';

let currentQuizzes = [];

export function setCurrentQuizzes(quizzes) { currentQuizzes = quizzes || []; }
function getCurrentQuizzes() { return currentQuizzes; }

// ============ 案例弹窗 ============
export function showCaseModal(item) {
    const modal = document.getElementById('caseModal');
    const content = document.getElementById('caseModalContent');
    if (!modal || !content) return;

    if (!item || !item.example) {
        content.innerHTML = '<p style="padding:20px;text-align:center;">暂无案例数据 | No case data available</p>';
    } else {
        content.innerHTML = `
            <h3 style="color:var(--pmi-blue);margin-bottom:15px;">📝 ${item.example.title}</h3>
            <div style="background:#f5f9fc;padding:15px;border-radius:8px;border-left:4px solid var(--pmi-blue);margin-bottom:15px;">
                <strong>场景 | Scenario:</strong><br>
                <span style="color:#555;line-height:1.8;">${item.example.scenario}</span>
            </div>
            <div style="margin-bottom:15px;">
                <strong>采取的行动 | Actions Taken:</strong>
                <ul style="margin-top:8px;padding-left:20px;line-height:2;">
                    ${item.example.actions.map(a => `<li>${a}</li>`).join('')}
                </ul>
            </div>
            <div style="background:#f0fdf4;padding:15px;border-radius:8px;border-left:4px solid #10b981;">
                <strong style="color:#059669;">结果 | Outcome:</strong><br>
                <span style="color:#555;line-height:1.8;">${item.example.outcome}</span>
            </div>
        `;
    }
    modal.style.display = 'flex';
}

// ============ 自测弹窗 ============
export function showQuizModal(item, quizzes) {
    const modal = document.getElementById('quizModal');
    const content = document.getElementById('quizModalContent');
    const title = document.getElementById('quizModalTitle');
    if (!modal || !content) return;

    if (!quizzes || quizzes.length === 0) {
        if (title) title.textContent = '自测 | Self-test';
        content.innerHTML = '<p style="padding:20px;text-align:center;">暂无题目 | No quiz available</p>';
        modal.style.display = 'flex';
        return;
    }

    setCurrentQuizzes(quizzes);
    if (title) {
        const label = item.name || item.title || '';
        title.textContent = `自测：${label} | ${quizzes.length}道题`;
    }

    content.innerHTML = `
        <div class="quiz-session">
            <div class="quiz-progress">${quizzes.map((_, i) => `
                <div class="quiz-progress-item${i === 0 ? ' current' : ''}" data-qi="${i}">${i + 1}</div>
            `).join('')}</div>
            <div id="quizQContainer"></div>
        </div>
    `;

    renderQuizQuestion(0, quizzes);
    modal.style.display = 'flex';
}

function renderQuizQuestion(index, quizzes) {
    const container = document.getElementById('quizQContainer');
    const quiz = quizzes[index];
    if (!container || !quiz) return;

    container.innerHTML = `
        <div class="quiz-question-header">
            <span class="quiz-question-number">第 ${index + 1}/${quizzes.length} 题</span>
            ${quiz.difficulty ? `<span class="quiz-difficulty-tag" style="background:${getDiffBg(quiz.difficulty)};color:${getDiffColor(quiz.difficulty)}">${getDiffText(quiz.difficulty)}</span>` : ''}
        </div>
        <div class="quiz-question">${quiz.question}</div>
        <div class="quiz-options">
            ${quiz.options.map((opt, i) => `
                <button class="quiz-option" onclick="window.handleQuizAnswer(${index}, ${i}, ${quiz.correct})" data-oi="${i}">${opt}</button>
            `).join('')}
        </div>
        <div class="quiz-feedback" id="quizFeedback"></div>
        <div class="quiz-navigation">
            <button class="quiz-nav-btn" onclick="window.navigateQuiz(${index - 1})" ${index === 0 ? 'disabled' : ''}>← 上一题</button>
            <button class="quiz-nav-btn" onclick="window.navigateQuiz(${index + 1})" ${index === quizzes.length - 1 ? 'disabled' : ''}>下一题 →</button>
        </div>
    `;

    updateProgressDots(index, quizzes.length);
}

function updateProgressDots(current, total) {
    document.querySelectorAll('.quiz-progress-item').forEach((dot, i) => {
        dot.classList.remove('current', 'correct', 'incorrect');
        if (i < current && !dot.classList.contains('correct') && !dot.classList.contains('incorrect')) {
            // 未答题保持默认
        }
        if (i === current) dot.classList.add('current');
    });
}

window.handleQuizAnswer = (index, selected, correct) => {
    const container = document.getElementById('quizQContainer');
    if (!container) return;
    const options = container.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quizFeedback');
    const quiz = getCurrentQuizzes()[index];

    options.forEach(o => o.classList.add('disabled'));
    options[correct].classList.add('correct');
    if (selected !== correct) options[selected].classList.add('incorrect');

    const isCorrect = selected === correct;
    // Record in learning progress and wrong book
    const cat = quiz.category || 'principle';
    const catId = quiz.categoryId || 0;
    recordQuizAnswer(cat, catId, quiz.id || ('quiz_'+Date.now()), quiz.difficulty||'medium', isCorrect);
    if (!isCorrect) {
        addWrongAnswer(quiz.id||('quiz_'+Date.now()), quiz.question, quiz.options, correct, selected, quiz.explanation, cat, catId, quiz.difficulty||'medium');
    }
    feedback.className = 'quiz-feedback show ' + (isCorrect ? 'correct-fb' : 'incorrect-fb');
    feedback.innerHTML = `
        <div style="font-weight:600;margin-bottom:6px;">${isCorrect ? '✅ 正确！' : '❌ 错误。正确答案是 ' + ['A','B','C','D'][correct]}</div>
        <div>${quiz.explanation}</div>
    `;

    const dot = document.querySelector(`.quiz-progress-item[data-qi="${index}"]`);
    if (dot) { dot.classList.remove('current'); dot.classList.add(isCorrect ? 'correct' : 'incorrect'); dot.textContent = isCorrect ? '✓' : '✗'; }
};

window.navigateQuiz = (index) => {
    const quizzes = getCurrentQuizzes();
    if (index >= 0 && index < quizzes.length) renderQuizQuestion(index, quizzes);
};

function getDiffBg(d) { return { easy: '#d1fae5', medium: '#fef3c7', hard: '#fee2e2' }[d] || '#e5e7eb'; }
function getDiffColor(d) { return { easy: '#059669', medium: '#b45309', hard: '#dc2626' }[d] || '#6b7280'; }
function getDiffText(d) { return { easy: '简单', medium: '中等', hard: '困难' }[d] || '未知'; }

// ============ 关闭弹窗 ============
export function closeCaseModal() {
    const m = document.getElementById('caseModal'); if (m) m.style.display = 'none';
}
export function closeQuizModal() {
    const m = document.getElementById('quizModal'); if (m) m.style.display = 'none';
}
export function closeCaseOverlay() {
    const m = document.getElementById('caseOverlay'); if (m) m.style.display = 'none';
}
export function closeIttoModal() {
    const m = document.getElementById('ittoModal'); if (m) m.style.display = 'none';
}

// ============ ITTO 详情弹窗 ============
export function showIttoModal(itemName, itemType) {
    // Create modal if not exists
    let modal = document.getElementById('ittoModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'ittoModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `<div class="modal-content wide">
            <div class="modal-header"><h3 id="ittoModalTitle">ITTO 详情</h3><button class="modal-close" onclick="closeIttoModal()">×</button></div>
            <div class="modal-body" id="ittoModalBody"></div></div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', e => { if (e.target === modal) closeIttoModal(); });
    }

    const body = document.getElementById('ittoModalBody');
    const title = document.getElementById('ittoModalTitle');

    // Fuzzy lookup: try exact match first, then strip parenthetical details for === match
    let reg = ittoRegistry[itemName];
    if (!reg) {
        const clean = (s) => s.replace(/[（(][^）)]*[）)]/g, '').replace(/\s+/g, '').trim();
        const baseName = clean(itemName);
        for (const key of Object.keys(ittoRegistry)) {
            if (clean(key) === baseName) {
                reg = ittoRegistry[key];
                itemName = key;
                break;
            }
        }
    }
    if (!reg) { body.innerHTML = `<p style="padding:40px;text-align:center;color:#888">未找到该条目信息<br><small>No definition found for "${itemName}"</small></p>`; modal.style.display = 'flex'; return; }

    // Try exact definition match, then fuzzy (strip parentheticals), then getDefinition fallback
    let item = ittoDefinitions[itemName];
    if (!item) {
        const clean = (s) => s.replace(/[（(][^）)]*[）)]/g, '').replace(/\s+/g, '').trim();
        const base = clean(itemName);
        for (const key of Object.keys(ittoDefinitions)) {
            if (clean(key) === base || clean(key).startsWith(base) || base.startsWith(clean(key))) {
                item = ittoDefinitions[key];
                break;
            }
        }
    }
    const def = item || (typeof getDefinition === 'function' ? getDefinition(itemName, itemType) : { zh: itemName, en: itemName, category: itemType });
    const typeLabel = itemType === 'input' ? '📥 输入 | Input' : itemType === 'output' ? '📤 输出 | Output' : '🔧 工具与技术 | Tool & Technique';
    const typeColor = itemType === 'input' ? '#3b82f6' : itemType === 'output' ? '#10b981' : '#8b5cf6';

    const itemEn = englishName(itemName);
    title.innerHTML = `${typeLabel} — ${itemName}${itemEn ? ' <small style="opacity:0.7;font-weight:400">' + itemEn + '</small>' : ''}`;

    // I/O sections now merged into the 3-column chainHTML (removed duplicate produced-by/consumed-by)

    // Build tools section (for TT)
    let toolsHTML = '';
    if (reg.t.length > 0) {
        const grouped = groupByFA(reg.t);
        toolsHTML = `<div class="itto-chain-section">
            <h4>🔧 在以下流程中使用 | Used In</h4>
            ${Object.entries(grouped).map(([fa, procs]) => `
                <div class="itto-fa-group">
                    <div class="itto-fa-header" style="background:${getFAColor(fa)}">${fa} · ${ittoFocusAreas[fa]?.en||''} <small>(${procs.length}个流程)</small></div>
                    <div class="itto-chain-list">${procs.map(p => `<span class="itto-process-tag" style="border-color:${getFAColor(fa)}" onclick="window.selectProcess(${p.n});window.closeIttoModal()" title="${p.n} | ${p.ne}">#${p.n} ${p.name} <small>${p.ne}</small></span>`).join('')}</div>
                </div>`).join('')}
        </div>`;
    }

    // Build 3-column data flow chain for I/O items
    let chainHTML = '';
    if ((itemType === 'input' || itemType === 'output') && (reg.o.length > 0 || reg.i.length > 0)) {
        const renderFlowSteps = (nums, label, icon, isLeft) => {
            if (nums.length === 0) return `<div class="flow-col"><div class="flow-col-header">${icon} ${label}</div><div class="flow-col-empty">— 无 —</div></div>`;
            const grouped = groupByFA(nums);
            return `<div class="flow-col">
                <div class="flow-col-header" style="background:linear-gradient(135deg,#f8fafc,#f1f5f9)">${icon} ${label} <small>(${nums.length}个)</small></div>
                ${Object.entries(grouped).map(([fa, procs]) => `
                    <div class="flow-fa-mini">
                        <div class="flow-fa-mini-name" style="background:${getFAColor(fa)};color:#fff;padding:2px 8px;border-radius:3px;display:inline-block;margin-bottom:4px;font-size:10px;font-weight:600">${fa}</div>
                        ${procs.map(p => `<div class="flow-process-link" onclick="window.selectProcess(${p.n});window.closeIttoModal()" title="${p.n} | ${p.ne}">
                            <span class="flow-proc-num" style="background:${getFAColor(fa)};color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;margin-right:6px">#${p.n}</span>${p.name} <small>${p.ne}</small>
                        </div>`).join('')}
                    </div>`).join('')}
            </div>`;
        };
        chainHTML = `<div class="itto-chain-section chain-viz">
            <h4>🔗 数据流链条 | Data Flow Chain</h4>
            <div class="itto-flow-grid-3col">
                ${renderFlowSteps(reg.o, '产生自 | Produced By', '📤')}
                <div class="flow-col flow-col-center">
                    <div class="flow-product-card ${itemType==='output'?'output-card':'input-card'}">
                        ${itemType==='output'
                            ? '<div class="flow-anim-icon">📦<span class="pack-drop"></span></div>'
                            : '<div class="flow-anim-icon">📥<span class="unpack-lid"></span></div>'}
                        <div class="flow-product-name-full">${itemName}</div>
                        ${itemEn ? `<div class="flow-product-en">${itemEn}</div>` : ''}
                        <span class="flow-product-badge">${itemType==='output'?'输出 Output':'输入 Input'}</span>
                    </div>
                    ${reg.o.length > 0 ? `<div class="flow-arrow-left">→<span class="flow-dot-anim"></span></div>` : ''}
                    ${reg.i.length > 0 ? `<div class="flow-arrow-right">→<span class="flow-dot-anim"></span></div>` : ''}
                </div>
                ${renderFlowSteps(reg.i, '被以下使用 | Consumed By', '📥')}
            </div>
        </div>`;
    }

    body.innerHTML = `
        <div class="itto-def-card" style="border-left:4px solid ${typeColor}">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
                <span style="font-size:32px">${itemType==='input'?'📥':itemType==='output'?'📤':'🔧'}</span>
                <div>
                    <div style="font-weight:700;font-size:16px;color:#1f2937">${itemName}</div>
                    ${itemEn ? `<div style="font-size:13px;color:#3b82f6;margin-top:2px">${itemEn}</div>` : ''}
                    <div style="font-size:12px;color:#6b7280">${typeLabel}</div>
                </div>
            </div>
            <p style="font-size:14px;color:#555;line-height:1.8;margin-bottom:8px">${def.zh}</p>
            <p style="font-size:13px;color:#888;font-style:italic;line-height:1.7">${def.en}</p>
        </div>
        ${chainHTML}
        ${toolsHTML}
    `;
    modal.style.display = 'flex';
}

// Helper: group process numbers by focus area
function groupByFA(nums) {
    const groups = {};
    nums.forEach(n => {
        const p = ittoProcLookup[n];
        if (!p) return;
        const key = p.fa || p.pd || '其他';
        if (!groups[key]) groups[key] = [];
        groups[key].push({ n, ne: p.ne, name: p.n });
    });
    return groups;
}

function getFAColor(fa) {
    const colors = { '治理绩效域': '#005A9D', '范围绩效域': '#2E8B57', '进度绩效域': '#0077C8', '财务绩效域': '#D4AF37', '相关方绩效域': '#C71585', '资源绩效域': '#4B0082', '风险绩效域': '#FF6347', '启动': '#005A9D', '规划': '#2E8B57', '执行': '#0077C8', '监控': '#4B0082', '收尾': '#D4AF37' };
    return colors[fa] || '#666';
}

// ============ 初始化 ============
export function initModals() {
    window.addEventListener('click', (e) => {
        if (e.target.id === 'caseModal') closeCaseModal();
        if (e.target.id === 'quizModal') closeQuizModal();
        if (e.target.id === 'caseOverlay') closeCaseOverlay();
        if (e.target.id === 'ittoModal') closeIttoModal();
    });
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => { closeCaseModal(); closeQuizModal(); closeCaseOverlay(); closeIttoModal(); });
    });
}
