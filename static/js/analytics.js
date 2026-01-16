// Advanced Analytics and Progress Tracking

class StudyAnalytics {
    constructor() {
        this.loadData();
    }

    loadData() {
        this.sessions = JSON.parse(localStorage.getItem('snowprep-study-sessions') || '[]');
        this.completions = JSON.parse(localStorage.getItem('topic-completions') || '{}');
        this.quizScores = JSON.parse(localStorage.getItem('quiz-scores') || '[]');
        this.timeTracking = JSON.parse(localStorage.getItem('time-tracking') || '{}');
    }

    // Track study session
    trackSession(topicId, duration, completed = false) {
        const session = {
            id: Date.now(),
            topicId,
            duration, // in minutes
            completed,
            timestamp: new Date().toISOString(),
            date: new Date().toDateString()
        };

        this.sessions.push(session);
        localStorage.setItem('snowprep-study-sessions', JSON.stringify(this.sessions));

        // Update time tracking
        if (!this.timeTracking[topicId]) {
            this.timeTracking[topicId] = { total: 0, sessions: 0 };
        }
        this.timeTracking[topicId].total += duration;
        this.timeTracking[topicId].sessions++;
        localStorage.setItem('time-tracking', JSON.stringify(this.timeTracking));

        return session;
    }

    // Get study streak
    getStreak() {
        if (this.sessions.length === 0) return 0;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let streak = 0;
        let currentDate = new Date(today);

        while (true) {
            const dateStr = currentDate.toDateString();
            const hasSession = this.sessions.some(s => s.date === dateStr);

            if (hasSession) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }

        return streak;
    }

    // Get study time stats
    getStudyTimeStats(days = 7) {
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - days);

        const recentSessions = this.sessions.filter(s =>
            new Date(s.timestamp) >= cutoff
        );

        const byDay = {};
        recentSessions.forEach(session => {
            const date = session.date;
            if (!byDay[date]) {
                byDay[date] = 0;
            }
            byDay[date] += session.duration;
        });

        const totalTime = recentSessions.reduce((sum, s) => sum + s.duration, 0);
        const avgTime = recentSessions.length > 0 ? totalTime / days : 0;

        return {
            totalTime,
            avgTime,
            byDay,
            sessions: recentSessions.length
        };
    }

    // Get completion progress
    getProgress() {
        const completed = Object.keys(this.completions).length;
        const total = this.getTotalTopics();

        return {
            completed,
            total,
            percentage: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    }

    getTotalTopics() {
        // Get from syllabus data
        if (typeof csaSyllabus !== 'undefined' && typeof cadSyllabus !== 'undefined' &&
            typeof cisItsmSyllabus !== 'undefined') {
            let total = 0;
            [csaSyllabus, cadSyllabus, cisItsmSyllabus].forEach(cert => {
                cert.sections.forEach(section => {
                    total += section.topics.length;
                });
            });
            return total;
        }
        return 0;
    }

    // Get weak areas (topics with low quiz scores or many retries)
    getWeakAreas() {
        const topicScores = {};

        this.quizScores.forEach(score => {
            if (!topicScores[score.topicId]) {
                topicScores[score.topicId] = {
                    scores: [],
                    averageScore: 0,
                    attempts: 0
                };
            }
            topicScores[score.topicId].scores.push(score.percentage);
            topicScores[score.topicId].attempts++;
        });

        // Calculate averages
        Object.keys(topicScores).forEach(topicId => {
            const topic = topicScores[topicId];
            topic.averageScore = topic.scores.reduce((a, b) => a + b, 0) / topic.scores.length;
        });

        // Find weak areas (< 70% average or many attempts)
        const weakAreas = Object.entries(topicScores)
            .filter(([_, data]) => data.averageScore < 70 || data.attempts > 3)
            .map(([topicId, data]) => ({
                topicId,
                averageScore: data.averageScore.toFixed(1),
                attempts: data.attempts
            }))
            .sort((a, b) => a.averageScore - b.averageScore);

        return weakAreas;
    }

    // Get study velocity (topics completed per week)
    getVelocity() {
        const weeks = {};
        Object.values(this.completions).forEach(completion => {
            const date = new Date(completion.timestamp);
            const weekStart = new Date(date);
            weekStart.setDate(date.getDate() - date.getDay());
            const weekKey = weekStart.toDateString();

            if (!weeks[weekKey]) {
                weeks[weekKey] = 0;
            }
            weeks[weekKey]++;
        });

        const velocities = Object.values(weeks);
        const avgVelocity = velocities.length > 0
            ? velocities.reduce((a, b) => a + b, 0) / velocities.length
            : 0;

        return {
            currentWeek: weeks[this.getCurrentWeekKey()] || 0,
            average: avgVelocity.toFixed(1),
            byWeek: weeks
        };
    }

    getCurrentWeekKey() {
        const today = new Date();
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        return weekStart.toDateString();
    }

    // Predict exam readiness
    predictReadiness(certification) {
        const progress = this.getProgress();
        const quizAverage = this.getQuizAverage(certification);
        const studyTime = this.getStudyTimeStats(30).totalTime;
        const weakAreas = this.getWeakAreas().length;

        // Scoring system
        let readinessScore = 0;

        // Progress (40 points)
        readinessScore += (progress.percentage / 100) * 40;

        // Quiz performance (30 points)
        if (quizAverage >= 90) readinessScore += 30;
        else if (quizAverage >= 80) readinessScore += 25;
        else if (quizAverage >= 70) readinessScore += 20;
        else readinessScore += (quizAverage / 100) * 20;

        // Study time (20 points) - at least 40 hours recommended
        const timeScore = Math.min(20, (studyTime / (40 * 60)) * 20);
        readinessScore += timeScore;

        // Weak areas penalty (10 points)
        const weakAreasPenalty = Math.max(0, 10 - weakAreas * 2);
        readinessScore += weakAreasPenalty;

        return {
            score: Math.round(readinessScore),
            progress: progress.percentage,
            quizAverage,
            studyTime: Math.round(studyTime / 60), // hours
            weakAreas,
            recommendation: this.getRecommendation(readinessScore)
        };
    }

    getQuizAverage(certification = null) {
        let relevantScores = this.quizScores;

        if (certification) {
            relevantScores = this.quizScores.filter(s => s.certification === certification);
        }

        if (relevantScores.length === 0) return 0;

        const sum = relevantScores.reduce((acc, s) => acc + s.percentage, 0);
        return Math.round(sum / relevantScores.length);
    }

    getRecommendation(score) {
        if (score >= 85) {
            return 'You\'re ready! Schedule your exam with confidence.';
        } else if (score >= 70) {
            return 'Almost there! Focus on weak areas and practice more quizzes.';
        } else if (score >= 50) {
            return 'Good progress! Continue studying and complete more topics.';
        } else {
            return 'Keep going! You need more time with the material.';
        }
    }

    // Generate study insights
    getInsights() {
        const insights = [];
        const streak = this.getStreak();
        const stats = this.getStudyTimeStats(7);
        const weakAreas = this.getWeakAreas();
        const velocity = this.getVelocity();

        // Streak insights
        if (streak >= 7) {
            insights.push({
                type: 'achievement',
                icon: '🔥',
                message: `Amazing! ${streak}-day study streak!`,
                color: 'var(--accent-yellow)'
            });
        } else if (streak === 0) {
            insights.push({
                type: 'warning',
                icon: '⚠️',
                message: 'Start a study session today to build your streak!',
                color: 'var(--accent-red)'
            });
        }

        // Study time insights
        if (stats.avgTime < 15) {
            insights.push({
                type: 'suggestion',
                icon: '⏰',
                message: 'Try to study at least 30 minutes per day for better retention.',
                color: 'var(--accent-blue)'
            });
        }

        // Weak areas
        if (weakAreas.length > 0) {
            insights.push({
                type: 'focus',
                icon: '🎯',
                message: `Focus on ${weakAreas.length} weak area${weakAreas.length > 1 ? 's' : ''} to improve your scores.`,
                color: 'var(--accent-purple)'
            });
        }

        // Velocity insights
        if (velocity.currentWeek >= 5) {
            insights.push({
                type: 'achievement',
                icon: '🚀',
                message: `Great pace! ${velocity.currentWeek} topics completed this week.`,
                color: 'var(--accent-green)'
            });
        }

        return insights;
    }

    // Export analytics data
    exportData() {
        return {
            sessions: this.sessions,
            completions: this.completions,
            quizScores: this.quizScores,
            timeTracking: this.timeTracking,
            exportDate: new Date().toISOString()
        };
    }
}

// Initialize global analytics
window.studyAnalytics = new StudyAnalytics();
