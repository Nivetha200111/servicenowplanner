// Exam Simulator - Realistic certification exam experience

class ExamSimulator {
    constructor() {
        this.currentExam = null;
        this.startTime = null;
        this.answers = {};
        this.flagged = new Set();
        this.timeLimit = 90 * 60 * 1000; // 90 minutes in milliseconds
        this.timerInterval = null;
    }

    // Start exam
    startExam(certification, questionCount = 60) {
        const examConfigs = {
            'csa': {
                name: 'Certified System Administrator',
                duration: 90,
                questions: 60,
                passingScore: 70,
                questionPool: this.getQuizQuestions('csa')
            },
            'cad': {
                name: 'Certified Application Developer',
                duration: 90,
                questions: 60,
                passingScore: 70,
                questionPool: this.getQuizQuestions('cad')
            },
            'cis-itsm': {
                name: 'CIS - IT Service Management',
                duration: 90,
                questions: 60,
                passingScore: 70,
                questionPool: this.getQuizQuestions('cis-itsm')
            }
        };

        const config = examConfigs[certification];
        if (!config) {
            throw new Error('Invalid certification');
        }

        // Shuffle and select questions
        const shuffled = this.shuffleArray([...config.questionPool]);
        const selectedQuestions = shuffled.slice(0, questionCount);

        this.currentExam = {
            id: Date.now(),
            certification,
            name: config.name,
            duration: config.duration,
            questions: selectedQuestions.map((q, index) => ({
                id: index + 1,
                ...q,
                userAnswer: null,
                timeTaken: 0,
                startTime: null
            })),
            passingScore: config.passingScore,
            currentQuestion: 0,
            totalQuestions: selectedQuestions.length
        };

        this.startTime = Date.now();
        this.timeLimit = config.duration * 60 * 1000;
        this.answers = {};
        this.flagged = new Set();

        // Start timer
        this.startTimer();

        // Save exam state
        this.saveExamState();

        return this.currentExam;
    }

    getQuizQuestions(cert) {
        // This would integrate with the existing quiz questions
        if (typeof quizQuestions !== 'undefined' && quizQuestions[cert]) {
            return quizQuestions[cert];
        }
        return [];
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Timer functions
    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.timerInterval = setInterval(() => {
            const elapsed = Date.now() - this.startTime;
            const remaining = this.timeLimit - elapsed;

            if (remaining <= 0) {
                this.submitExam(true); // Auto-submit when time runs out
            } else {
                this.updateTimerDisplay(remaining);
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    updateTimerDisplay(remaining) {
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);

        const timerElement = document.getElementById('exam-timer');
        if (timerElement) {
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

            // Warn when time is running out
            if (remaining < 5 * 60 * 1000) { // Last 5 minutes
                timerElement.style.color = 'var(--accent-red)';
            }
        }
    }

    // Navigate questions
    goToQuestion(questionIndex) {
        if (!this.currentExam) return;

        const current = this.currentExam.questions[this.currentExam.currentQuestion];
        if (current && current.startTime) {
            current.timeTaken += Date.now() - current.startTime;
        }

        this.currentExam.currentQuestion = questionIndex;

        const newQuestion = this.currentExam.questions[questionIndex];
        newQuestion.startTime = Date.now();

        this.saveExamState();
        this.renderQuestion();
    }

    nextQuestion() {
        if (this.currentExam.currentQuestion < this.currentExam.totalQuestions - 1) {
            this.goToQuestion(this.currentExam.currentQuestion + 1);
        }
    }

    previousQuestion() {
        if (this.currentExam.currentQuestion > 0) {
            this.goToQuestion(this.currentExam.currentQuestion - 1);
        }
    }

    // Answer selection
    answerQuestion(questionId, answerIndex) {
        if (!this.currentExam) return;

        const question = this.currentExam.questions.find(q => q.id === questionId);
        if (question) {
            question.userAnswer = answerIndex;
            this.answers[questionId] = answerIndex;
            this.saveExamState();
        }
    }

    // Flag question for review
    toggleFlag(questionId) {
        if (this.flagged.has(questionId)) {
            this.flagged.delete(questionId);
        } else {
            this.flagged.add(questionId);
        }
        this.saveExamState();
    }

    // Get exam progress
    getProgress() {
        if (!this.currentExam) return null;

        const answered = this.currentExam.questions.filter(q => q.userAnswer !== null).length;
        const flaggedCount = this.flagged.size;

        return {
            answered,
            unanswered: this.currentExam.totalQuestions - answered,
            flagged: flaggedCount,
            total: this.currentExam.totalQuestions,
            percentage: Math.round((answered / this.currentExam.totalQuestions) * 100)
        };
    }

    // Submit exam
    submitExam(autoSubmit = false) {
        if (!this.currentExam) return null;

        this.stopTimer();

        // Calculate score
        let correct = 0;
        const results = this.currentExam.questions.map(question => {
            const isCorrect = question.userAnswer === question.correct;
            if (isCorrect) correct++;

            return {
                id: question.id,
                question: question.question,
                userAnswer: question.userAnswer,
                correctAnswer: question.correct,
                isCorrect,
                timeTaken: question.timeTaken,
                explanation: question.explanation
            };
        });

        const score = Math.round((correct / this.currentExam.totalQuestions) * 100);
        const passed = score >= this.currentExam.passingScore;

        const examResult = {
            id: this.currentExam.id,
            certification: this.currentExam.certification,
            name: this.currentExam.name,
            score,
            correct,
            total: this.currentExam.totalQuestions,
            passed,
            passingScore: this.currentExam.passingScore,
            duration: Math.round((Date.now() - this.startTime) / 1000), // seconds
            autoSubmit,
            timestamp: new Date().toISOString(),
            results
        };

        // Save result
        this.saveExamResult(examResult);

        // Clear current exam
        this.currentExam = null;
        localStorage.removeItem('current-exam-state');

        return examResult;
    }

    // Pause/Resume exam
    pauseExam() {
        if (!this.currentExam) return;

        this.stopTimer();
        this.currentExam.paused = true;
        this.currentExam.pausedAt = Date.now();
        this.saveExamState();
    }

    resumeExam() {
        if (!this.currentExam || !this.currentExam.paused) return;

        const pauseDuration = Date.now() - this.currentExam.pausedAt;
        this.startTime += pauseDuration; // Adjust start time

        this.currentExam.paused = false;
        delete this.currentExam.pausedAt;

        this.startTimer();
        this.saveExamState();
    }

    // Save/Load exam state
    saveExamState() {
        if (this.currentExam) {
            const state = {
                exam: this.currentExam,
                startTime: this.startTime,
                answers: this.answers,
                flagged: Array.from(this.flagged)
            };
            localStorage.setItem('current-exam-state', JSON.stringify(state));
        }
    }

    loadExamState() {
        const saved = localStorage.getItem('current-exam-state');
        if (saved) {
            const state = JSON.parse(saved);
            this.currentExam = state.exam;
            this.startTime = state.startTime;
            this.answers = state.answers;
            this.flagged = new Set(state.flagged);

            if (!this.currentExam.paused) {
                this.startTimer();
            }

            return this.currentExam;
        }
        return null;
    }

    // Save exam result
    saveExamResult(result) {
        const results = JSON.parse(localStorage.getItem('exam-results') || '[]');
        results.push(result);
        localStorage.setItem('exam-results', JSON.stringify(results));

        // Also save to quiz scores for analytics
        const quizScore = {
            topicId: `exam-${result.certification}`,
            certification: result.certification,
            percentage: result.score,
            timestamp: result.timestamp
        };
        const quizScores = JSON.parse(localStorage.getItem('quiz-scores') || '[]');
        quizScores.push(quizScore);
        localStorage.setItem('quiz-scores', JSON.stringify(quizScores));
    }

    // Get exam history
    getExamHistory(certification = null) {
        const results = JSON.parse(localStorage.getItem('exam-results') || '[]');

        if (certification) {
            return results.filter(r => r.certification === certification);
        }

        return results;
    }

    // Get exam statistics
    getExamStats(certification = null) {
        const history = this.getExamHistory(certification);

        if (history.length === 0) {
            return null;
        }

        const scores = history.map(h => h.score);
        const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
        const highestScore = Math.max(...scores);
        const lowestScore = Math.min(...scores);
        const passRate = (history.filter(h => h.passed).length / history.length) * 100;

        const averageTime = history.reduce((sum, h) => sum + h.duration, 0) / history.length;

        return {
            totalExams: history.length,
            averageScore: Math.round(averageScore),
            highestScore,
            lowestScore,
            passRate: Math.round(passRate),
            averageTime: Math.round(averageTime / 60), // minutes
            recentExams: history.slice(-5).reverse()
        };
    }

    // Render question (this would be called by the UI)
    renderQuestion() {
        if (!this.currentExam) return '';

        const question = this.currentExam.questions[this.currentExam.currentQuestion];
        const isFlagged = this.flagged.has(question.id);

        // This is a template - actual implementation would update the DOM
        return {
            questionNumber: this.currentExam.currentQuestion + 1,
            total: this.currentExam.totalQuestions,
            question: question.question,
            options: question.options,
            selectedAnswer: question.userAnswer,
            isFlagged,
            progress: this.getProgress()
        };
    }
}

// Initialize global exam simulator
window.examSimulator = new ExamSimulator();

// Auto-load exam state on page load
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        const exam = window.examSimulator.loadExamState();
        if (exam && exam.paused) {
            // Notify user they have a paused exam
            console.log('Paused exam found:', exam);
        }
    });
}
