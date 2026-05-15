/**
 * 错题本模块
 * Wrong Answer Book — stores wrong answers for review
 */
const WRONG_BOOK_KEY = 'pmbok8_wrong_book';

let _wrongBook = null;

function loadWrongBook() {
    try {
        const raw = localStorage.getItem(WRONG_BOOK_KEY);
        _wrongBook = raw ? JSON.parse(raw) : [];
    } catch (e) {
        _wrongBook = [];
    }
    return _wrongBook;
}

function saveWrongBook() {
    try { localStorage.setItem(WRONG_BOOK_KEY, JSON.stringify(_wrongBook)); } catch (e) {}
}

function getWrongBook() {
    if (!_wrongBook) loadWrongBook();
    return _wrongBook;
}

// Add a wrong answer
export function addWrongAnswer(questionId, question, options, correctIndex, userIndex, explanation, category, categoryId, difficulty) {
    const wb = getWrongBook();
    // Check if already exists
    const existing = wb.find(w => w.questionId === questionId);
    if (existing) {
        existing.wrongCount = (existing.wrongCount || 1) + 1;
        existing.lastWrongAt = new Date().toISOString();
        existing.userAnswer = userIndex;
    } else {
        wb.push({
            questionId,
            question,
            options,
            correctIndex,
            userAnswer: userIndex,
            explanation,
            category,
            categoryId,
            difficulty,
            wrongCount: 1,
            mastered: false,
            reviewedCount: 0,
            firstWrongAt: new Date().toISOString(),
            lastWrongAt: new Date().toISOString()
        });
    }
    saveWrongBook();
}

// Mark as mastered
export function markMastered(questionId) {
    const wb = getWrongBook();
    const item = wb.find(w => w.questionId === questionId);
    if (item) { item.mastered = true; item.masteredAt = new Date().toISOString(); saveWrongBook(); }
}

// Record a review (when reviewing wrong answers and getting it right)
export function recordReview(questionId, correct) {
    const wb = getWrongBook();
    const item = wb.find(w => w.questionId === questionId);
    if (item) {
        item.reviewedCount = (item.reviewedCount || 0) + 1;
        if (correct) {
            item.consecutiveCorrect = (item.consecutiveCorrect || 0) + 1;
            if (item.consecutiveCorrect >= 3) item.mastered = true;
        } else {
            item.consecutiveCorrect = 0;
        }
        saveWrongBook();
    }
}

// Remove a wrong answer
export function removeWrongAnswer(questionId) {
    const wb = getWrongBook();
    const idx = wb.findIndex(w => w.questionId === questionId);
    if (idx >= 0) { wb.splice(idx, 1); saveWrongBook(); }
}

// Get stats
export function getWrongBookStats() {
    const wb = getWrongBook();
    const active = wb.filter(w => !w.mastered);
    const mastered = wb.filter(w => w.mastered);
    const byCategory = {};
    wb.forEach(w => {
        if (!byCategory[w.category]) byCategory[w.category] = { total: 0, active: 0 };
        byCategory[w.category].total++;
        if (!w.mastered) byCategory[w.category].active++;
    });
    return {
        total: wb.length,
        active: active.length,
        mastered: mastered.length,
        byCategory
    };
}

// Get all wrong answers (optionally filtered)
export function getWrongAnswers(filter = 'active') {
    const wb = getWrongBook();
    if (filter === 'active') return wb.filter(w => !w.mastered);
    if (filter === 'mastered') return wb.filter(w => w.mastered);
    return wb;
}

// Clear all
export function clearWrongBook() {
    _wrongBook = [];
    saveWrongBook();
}
