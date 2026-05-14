/**
 * PMBOK Edition 8 - 弹窗管理模块
 * Modal Management: 案例弹窗、自测弹窗、案例库弹窗
 */
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

// ============ 初始化 ============
export function initModals() {
    window.addEventListener('click', (e) => {
        if (e.target.id === 'caseModal') closeCaseModal();
        if (e.target.id === 'quizModal') closeQuizModal();
        if (e.target.id === 'caseOverlay') closeCaseOverlay();
    });
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => { closeCaseModal(); closeQuizModal(); closeCaseOverlay(); });
    });
}
