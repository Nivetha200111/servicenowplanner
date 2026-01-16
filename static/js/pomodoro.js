// Advanced Pomodoro Timer with Statistics and Notifications

class PomodoroTimer {
    constructor() {
        this.settings = this.loadSettings();
        this.currentSession = null;
        this.timerInterval = null;
        this.sessions = this.loadSessions();
        this.audioContext = null;
    }

    loadSettings() {
        const saved = localStorage.getItem('pomodoro-settings');
        return saved ? JSON.parse(saved) : {
            workDuration: 25,      // minutes
            shortBreak: 5,
            longBreak: 15,
            sessionsBeforeLongBreak: 4,
            autoStartBreaks: false,
            autoStartPomodoros: false,
            soundEnabled: true,
            notificationsEnabled: true,
            dailyGoal: 8           // pomodoros per day
        };
    }

    saveSettings() {
        localStorage.setItem('pomodoro-settings', JSON.stringify(this.settings));
    }

    loadSessions() {
        const saved = localStorage.getItem('pomodoro-sessions');
        return saved ? JSON.parse(saved) : [];
    }

    saveSessions() {
        localStorage.setItem('pomodoro-sessions', JSON.stringify(this.sessions));
    }

    // Start a work session
    startWork(topic = null) {
        this.currentSession = {
            type: 'work',
            topic,
            duration: this.settings.workDuration * 60, // seconds
            remaining: this.settings.workDuration * 60,
            startTime: Date.now(),
            pausedTime: 0,
            paused: false,
            completed: false
        };

        this.startTimer();
        this.requestNotificationPermission();
    }

    // Start break
    startBreak(isLongBreak = false) {
        const duration = isLongBreak ? this.settings.longBreak : this.settings.shortBreak;

        this.currentSession = {
            type: isLongBreak ? 'longBreak' : 'shortBreak',
            duration: duration * 60,
            remaining: duration * 60,
            startTime: Date.now(),
            pausedTime: 0,
            paused: false,
            completed: false
        };

        this.startTimer();
    }

    // Timer control
    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.timerInterval = setInterval(() => {
            if (!this.currentSession || this.currentSession.paused) {
                return;
            }

            this.currentSession.remaining--;

            this.updateDisplay();

            if (this.currentSession.remaining <= 0) {
                this.completeSession();
            }
        }, 1000);
    }

    pauseTimer() {
        if (this.currentSession && !this.currentSession.paused) {
            this.currentSession.paused = true;
            this.currentSession.pauseStartTime = Date.now();
        }
    }

    resumeTimer() {
        if (this.currentSession && this.currentSession.paused) {
            const pauseDuration = Date.now() - this.currentSession.pauseStartTime;
            this.currentSession.pausedTime += pauseDuration;
            this.currentSession.paused = false;
            delete this.currentSession.pauseStartTime;
        }
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }

        // Save incomplete session as abandoned
        if (this.currentSession && !this.currentSession.completed) {
            this.saveSession(false);
        }

        this.currentSession = null;
    }

    completeSession() {
        this.stopTimer();

        if (!this.currentSession) return;

        this.currentSession.completed = true;
        this.currentSession.endTime = Date.now();

        // Play completion sound
        if (this.settings.soundEnabled) {
            this.playCompletionSound();
        }

        // Show notification
        if (this.settings.notificationsEnabled) {
            this.showNotification();
        }

        // Save session
        this.saveSession(true);

        // Auto-start next session
        if (this.currentSession.type === 'work') {
            const sessionsToday = this.getSessionsToday();
            const isLongBreak = sessionsToday.length % this.settings.sessionsBeforeLongBreak === 0;

            if (this.settings.autoStartBreaks) {
                setTimeout(() => this.startBreak(isLongBreak), 1000);
            }
        } else if (this.settings.autoStartPomodoros) {
            setTimeout(() => this.startWork(), 1000);
        }

        this.currentSession = null;
    }

    saveSession(completed) {
        if (!this.currentSession) return;

        const session = {
            id: Date.now(),
            type: this.currentSession.type,
            topic: this.currentSession.topic,
            duration: this.currentSession.duration,
            actualDuration: this.currentSession.duration - this.currentSession.remaining,
            pausedTime: this.currentSession.pausedTime,
            completed,
            startTime: this.currentSession.startTime,
            endTime: this.currentSession.endTime || Date.now(),
            date: new Date().toDateString(),
            timestamp: new Date().toISOString()
        };

        this.sessions.push(session);
        this.saveSessions();

        // Track study time for analytics if it was a work session
        if (completed && this.currentSession.type === 'work' && this.currentSession.topic) {
            if (typeof studyAnalytics !== 'undefined') {
                studyAnalytics.trackSession(
                    this.currentSession.topic,
                    Math.round(session.actualDuration / 60),
                    true
                );
            }
        }
    }

    // Notifications
    requestNotificationPermission() {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    }

    showNotification() {
        if ('Notification' in window && Notification.permission === 'granted') {
            const messages = {
                'work': {
                    title: '🎉 Pomodoro Complete!',
                    body: 'Great work! Time for a break.'
                },
                'shortBreak': {
                    title: '☕ Break Over!',
                    body: 'Ready for another focused session?'
                },
                'longBreak': {
                    title: '🌟 Long Break Done!',
                    body: 'You\'ve earned it! Back to studying?'
                }
            };

            const message = messages[this.currentSession.type] || messages.work;

            new Notification(message.title, {
                body: message.body,
                icon: '/favicon.ico',
                badge: '/favicon.ico'
            });
        }
    }

    // Sound
    playCompletionSound() {
        try {
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }

            // Create a pleasant notification sound
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.frequency.value = 800;
            oscillator.type = 'sine';

            gainNode.gain.value = 0.3;

            oscillator.start();
            setTimeout(() => oscillator.stop(), 200);

            // Second tone
            setTimeout(() => {
                const osc2 = this.audioContext.createOscillator();
                const gain2 = this.audioContext.createGain();

                osc2.connect(gain2);
                gain2.connect(this.audioContext.destination);

                osc2.frequency.value = 1000;
                osc2.type = 'sine';
                gain2.gain.value = 0.3;

                osc2.start();
                setTimeout(() => osc2.stop(), 200);
            }, 250);
        } catch (error) {
            console.error('Audio error:', error);
        }
    }

    // Statistics
    getSessionsToday() {
        const today = new Date().toDateString();
        return this.sessions.filter(s =>
            s.date === today && s.completed && s.type === 'work'
        );
    }

    getStats(days = 7) {
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - days);

        const recentSessions = this.sessions.filter(s =>
            new Date(s.timestamp) >= cutoff && s.completed
        );

        const workSessions = recentSessions.filter(s => s.type === 'work');

        const totalPomodoros = workSessions.length;
        const totalMinutes = workSessions.reduce((sum, s) => sum + Math.round(s.actualDuration / 60), 0);

        const byDay = {};
        workSessions.forEach(session => {
            const date = session.date;
            if (!byDay[date]) {
                byDay[date] = { count: 0, minutes: 0 };
            }
            byDay[date].count++;
            byDay[date].minutes += Math.round(session.actualDuration / 60);
        });

        const avgPerDay = totalPomodoros / days;

        // Calculate focus score (sessions completed vs total time)
        const completionRate = this.sessions.length > 0
            ? (this.sessions.filter(s => s.completed).length / this.sessions.length) * 100
            : 0;

        return {
            totalPomodoros,
            totalMinutes,
            avgPerDay: avgPerDay.toFixed(1),
            byDay,
            completionRate: Math.round(completionRate),
            todayProgress: {
                completed: this.getSessionsToday().length,
                goal: this.settings.dailyGoal
            }
        };
    }

    getTopicStats() {
        const topicSessions = {};

        this.sessions.filter(s => s.type === 'work' && s.topic && s.completed).forEach(session => {
            if (!topicSessions[session.topic]) {
                topicSessions[session.topic] = {
                    sessions: 0,
                    totalMinutes: 0
                };
            }
            topicSessions[session.topic].sessions++;
            topicSessions[session.topic].totalMinutes += Math.round(session.actualDuration / 60);
        });

        return Object.entries(topicSessions)
            .map(([topic, data]) => ({ topic, ...data }))
            .sort((a, b) => b.totalMinutes - a.totalMinutes);
    }

    // Display
    updateDisplay() {
        if (!this.currentSession) return;

        const minutes = Math.floor(this.currentSession.remaining / 60);
        const seconds = this.currentSession.remaining % 60;

        // Update display element
        const display = document.getElementById('pomodoro-display');
        if (display) {
            display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        // Update progress circle
        const progress = ((this.currentSession.duration - this.currentSession.remaining) / this.currentSession.duration) * 100;
        const progressCircle = document.getElementById('pomodoro-progress');
        if (progressCircle) {
            progressCircle.style.setProperty('--progress', `${progress}%`);
        }

        // Update document title
        if (this.currentSession.type === 'work') {
            document.title = `${minutes}:${seconds.toString().padStart(2, '0')} - Focus Time`;
        } else {
            document.title = `${minutes}:${seconds.toString().padStart(2, '0')} - Break`;
        }
    }

    // Get current state
    getCurrentState() {
        if (!this.currentSession) return null;

        const minutes = Math.floor(this.currentSession.remaining / 60);
        const seconds = this.currentSession.remaining % 60;

        return {
            type: this.currentSession.type,
            topic: this.currentSession.topic,
            remaining: this.currentSession.remaining,
            displayTime: `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
            progress: ((this.currentSession.duration - this.currentSession.remaining) / this.currentSession.duration) * 100,
            paused: this.currentSession.paused
        };
    }
}

// Initialize global pomodoro timer
window.pomodoroTimer = new PomodoroTimer();
