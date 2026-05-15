/**
 * 学习进度追踪模块
 * Learning Progress Tracking — localStorage持久化
 */
const PROGRESS_KEY = 'pmbok8_learning_progress';

const DEFAULT_PROGRESS = {
    principlesViewed: [],
    domainsViewed: [],
    processesViewed: [],
    quizzesCompleted: 0,
    quizzesCorrect: 0,
    totalTimeSpent: 0,
    streakDays: 0,
    lastStudyAt: null,
    principles: {},    // {1: {viewed:true, quizCorrect:3, quizTotal:5}}
    domains: {},       // {1: {viewed:true, quizCorrect:1, quizTotal:1}}
    quizHistory: []    // [{questionId, category, categoryId, difficulty, correct, answeredAt}]
};

let _progress = null;

function loadProgress() {
    try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        _progress = raw ? { ...DEFAULT_PROGRESS, ...JSON.parse(raw) } : { ...DEFAULT_PROGRESS };
    } catch (e) {
        _progress = { ...DEFAULT_PROGRESS };
    }
    return _progress;
}

function saveProgress() {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(_progress)); } catch (e) {}
}

function getProgress() {
    if (!_progress) loadProgress();
    return _progress;
}

// Record viewing a principle
export function recordPrincipleView(number) {
    const p = getProgress();
    if (!p.principlesViewed.includes(number)) p.principlesViewed.push(number);
    if (!p.principles[number]) p.principles[number] = { viewed: true, quizCorrect: 0, quizTotal: 0 };
    p.principles[number].viewed = true;
    p.lastStudyAt = new Date().toISOString();
    saveProgress();
}

// Record viewing a domain
export function recordDomainView(number) {
    const p = getProgress();
    if (!p.domainsViewed.includes(number)) p.domainsViewed.push(number);
    if (!p.domains[number]) p.domains[number] = { viewed: true, quizCorrect: 0, quizTotal: 0 };
    p.domains[number].viewed = true;
    p.lastStudyAt = new Date().toISOString();
    saveProgress();
}

// Record a quiz answer
export function recordQuizAnswer(category, categoryId, questionId, difficulty, correct) {
    const p = getProgress();
    p.quizzesCompleted = (p.quizzesCompleted || 0) + 1;
    if (correct) p.quizzesCorrect = (p.quizzesCorrect || 0) + 1;

    // Per-item stats
    const key = category === 'principle' ? 'principles' : category === 'domain' ? 'domains' : 'processes';
    const store = p[key];
    if (!store[categoryId]) store[categoryId] = { viewed: true, quizCorrect: 0, quizTotal: 0 };
    store[categoryId].quizTotal += 1;
    if (correct) store[categoryId].quizCorrect += 1;

    // History
    if (!p.quizHistory) p.quizHistory = [];
    p.quizHistory.push({ questionId, category, categoryId, difficulty, correct, answeredAt: new Date().toISOString() });
    if (p.quizHistory.length > 500) p.quizHistory = p.quizHistory.slice(-500);

    // Streak
    const today = new Date().toISOString().split('T')[0];
    const last = p.lastStudyAt ? p.lastStudyAt.split('T')[0] : null;
    if (last !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        p.streakDays = (p.streakDays || 0) + (last === yesterday ? 1 : 0);
    }
    p.lastStudyAt = new Date().toISOString();
    p.totalTimeSpent = (p.totalTimeSpent || 0) + 30; // estimate 30s per question
    saveProgress();
}

// Get progress summary
export function getProgressSummary() {
    const p = getProgress();
    const totalPrincipleQuizzes = Object.values(p.principles).reduce((s, v) => s + (v.quizTotal || 0), 0);
    const totalPrincipleCorrect = Object.values(p.principles).reduce((s, v) => s + (v.quizCorrect || 0), 0);
    const totalDomainQuizzes = Object.values(p.domains).reduce((s, v) => s + (v.quizTotal || 0), 0);
    const totalDomainCorrect = Object.values(p.domains).reduce((s, v) => s + (v.quizCorrect || 0), 0);
    return {
        principlesViewed: p.principlesViewed.length,
        domainsViewed: p.domainsViewed.length,
        totalQuizzes: p.quizzesCompleted || 0,
        totalCorrect: p.quizzesCorrect || 0,
        accuracy: p.quizzesCompleted ? ((p.quizzesCorrect / p.quizzesCompleted) * 100).toFixed(1) : 0,
        totalTime: ((p.totalTimeSpent || 0) / 60).toFixed(0),
        streakDays: p.streakDays || 0,
        principleAccuracy: totalPrincipleQuizzes ? ((totalPrincipleCorrect / totalPrincipleQuizzes) * 100).toFixed(1) : 0,
        domainAccuracy: totalDomainQuizzes ? ((totalDomainCorrect / totalDomainQuizzes) * 100).toFixed(1) : 0,
        historyCount: (p.quizHistory || []).length,
        lastStudy: p.lastStudyAt
    };
}

// Get per-principle detail
export function getPrincipleProgress(number) {
    return getProgress().principles[number] || { viewed: false, quizCorrect: 0, quizTotal: 0 };
}

// Get per-domain detail
export function getDomainProgress(number) {
    return getProgress().domains[number] || { viewed: false, quizCorrect: 0, quizTotal: 0 };
}

// Get weak areas (accuracy < 60%)
export function getWeakAreas() {
    const p = getProgress();
    const weak = [];
    for (const [id, data] of Object.entries(p.principles)) {
        if (data.quizTotal >= 2) {
            const acc = data.quizCorrect / data.quizTotal;
            if (acc < 0.6) weak.push({ type: 'principle', id: parseInt(id), accuracy: acc, total: data.quizTotal, correct: data.quizCorrect });
        }
    }
    for (const [id, data] of Object.entries(p.domains)) {
        if (data.quizTotal >= 1) {
            const acc = data.quizCorrect / data.quizTotal;
            if (acc < 0.5) weak.push({ type: 'domain', id: parseInt(id), accuracy: acc, total: data.quizTotal, correct: data.quizCorrect });
        }
    }
    weak.sort((a, b) => a.accuracy - b.accuracy);
    return weak;
}

// Reset all progress
export function resetProgress() {
    _progress = { ...DEFAULT_PROGRESS };
    saveProgress();
}
