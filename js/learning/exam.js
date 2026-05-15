/**
 * 模拟考试引擎
 * Mock Exam Engine — PMP-style timed exam
 */
import { generateExamQuestions } from './question-bank.js';
import { recordQuizAnswer } from './progress.js';
import { addWrongAnswer, recordReview } from './wrong-book.js';

let examState = {
    running: false,
    questions: [],
    currentIndex: 0,
    answers: {},       // {index: selectedOption}
    flagged: [],       // indices of flagged questions
    startTime: null,
    totalTime: 60 * 60, // 60 minutes default
    timeRemaining: 0,
    timer: null,
    mode: 'exam'       // 'exam' | 'practice'
};

export function getExamState() { return examState; }

// Start exam
export function startExam(questionCount = 50, timeMinutes = 60, mode = 'exam') {
    examState.questions = generateExamQuestions(questionCount);
    examState.currentIndex = 0;
    examState.answers = {};
    examState.flagged = [];
    examState.startTime = Date.now();
    examState.totalTime = timeMinutes * 60;
    examState.timeRemaining = timeMinutes * 60;
    examState.running = true;
    examState.mode = mode;

    if (mode === 'exam') startTimer();
    return examState;
}

// Start practice mode (single category, untimed)
export function startPractice(category = 'all', count = 10) {
    examState.questions = generateExamQuestions(count); // will filter if needed
    examState.currentIndex = 0;
    examState.answers = {};
    examState.flagged = [];
    examState.startTime = Date.now();
    examState.totalTime = 0;
    examState.timeRemaining = 0;
    examState.running = true;
    examState.mode = 'practice';
    return examState;
}

function startTimer() {
    if (examState.timer) clearInterval(examState.timer);
    examState.timer = setInterval(() => {
        if (!examState.running) { clearInterval(examState.timer); return; }
        const elapsed = Math.floor((Date.now() - examState.startTime) / 1000);
        examState.timeRemaining = Math.max(0, examState.totalTime - elapsed);
        if (examState.timeRemaining <= 0) submitExam();
        updateExamTimerDisplay();
    }, 1000);
}

function updateExamTimerDisplay() {
    const el = document.getElementById('examTimer');
    if (!el) return;
    const mins = Math.floor(examState.timeRemaining / 60);
    const secs = examState.timeRemaining % 60;
    el.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (examState.timeRemaining < 300) el.style.color = '#ef4444';
}

// Navigate exam
export function goToQuestion(index) {
    if (index >= 0 && index < examState.questions.length) {
        examState.currentIndex = index;
        return true;
    }
    return false;
}

export function nextQuestion() { return goToQuestion(examState.currentIndex + 1); }
export function prevQuestion() { return goToQuestion(examState.currentIndex - 1); }

// Answer a question
export function answerQuestion(index, selectedOption) {
    const q = examState.questions[index];
    if (!q) return;
    const correct = selectedOption === q.correct;
    examState.answers[index] = { selected: selectedOption, correct };

    // Record in learning progress
    recordQuizAnswer(q.category, q.categoryId, q.id, q.difficulty, correct);

    // Record wrong answers
    if (!correct) {
        addWrongAnswer(q.id, q.question, q.options, q.correct, selectedOption, q.explanation, q.category, q.categoryId, q.difficulty);
    } else {
        recordReview(q.id, true);
    }
}

// Toggle flag
export function toggleFlag(index) {
    const idx = examState.flagged.indexOf(index);
    if (idx >= 0) examState.flagged.splice(idx, 1);
    else examState.flagged.push(index);
}

// Submit exam
export function submitExam() {
    examState.running = false;
    if (examState.timer) { clearInterval(examState.timer); examState.timer = null; }
    return getScore();
}

// Calculate score
export function getScore() {
    let correct = 0, total = 0, answered = 0;
    const breakdown = {};
    examState.questions.forEach((q, i) => {
        total++;
        const ans = examState.answers[i];
        if (!q.category) q.category = 'mixed';
        if (!breakdown[q.category]) breakdown[q.category] = { total: 0, correct: 0 };
        breakdown[q.category].total++;
        if (ans) {
            answered++;
            if (ans.correct) {
                correct++;
                breakdown[q.category].correct++;
            }
        }
    });

    const elapsed = Math.floor((Date.now() - examState.startTime) / 1000);
    return {
        total, answered, correct,
        incorrect: answered - correct,
        unanswered: total - answered,
        accuracy: answered > 0 ? ((correct / answered) * 100).toFixed(1) : 0,
        totalAccuracy: ((correct / total) * 100).toFixed(1),
        timeElapsed: elapsed,
        timePerQuestion: answered > 0 ? (elapsed / answered).toFixed(0) : 0,
        breakdown,
        flagged: examState.flagged.length,
        mode: examState.mode
    };
}

// Get current question
export function getCurrentQuestion() {
    return examState.questions[examState.currentIndex] || null;
}

// Get answer status for nav dots
export function getAnswerStatus(index) {
    if (!examState.answers[index]) return 'unanswered';
    return examState.answers[index].correct ? 'correct' : 'incorrect';
}

// Clear exam state
export function clearExam() {
    if (examState.timer) clearInterval(examState.timer);
    examState = { running: false, questions: [], currentIndex: 0, answers: {}, flagged: [], startTime: null, totalTime: 0, timeRemaining: 0, timer: null, mode: 'exam' };
}

// Render exam navigation grid (question number dots)
export function renderExamNavGrid() {
    return examState.questions.map((q, i) => {
        let cls = 'exam-nav-dot';
        if (i === examState.currentIndex) cls += ' current';
        else if (examState.answers[i]) cls += examState.answers[i].correct ? ' correct' : ' wrong';
        const flag = examState.flagged.includes(i) ? ' 🚩' : '';
        return `<span class="${cls}" onclick="window.examGoTo(${i})">${i + 1}${flag}</span>`;
    }).join('');
}
