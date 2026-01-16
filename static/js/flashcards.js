// Advanced Flashcard System with Spaced Repetition (SM-2 Algorithm)
// Based on SuperMemo 2 algorithm used by Anki

class FlashcardSystem {
    constructor() {
        this.cards = this.loadCards();
        this.settings = this.loadSettings();
    }

    loadCards() {
        const saved = localStorage.getItem('snowprep-flashcards');
        return saved ? JSON.parse(saved) : [];
    }

    saveCards() {
        localStorage.setItem('snowprep-flashcards', JSON.stringify(this.cards));
    }

    loadSettings() {
        const saved = localStorage.getItem('snowprep-flashcard-settings');
        return saved ? JSON.parse(saved) : {
            newCardsPerDay: 20,
            maxReviews: 200,
            easyBonus: 1.3,
            hardInterval: 1.2
        };
    }

    saveSettings() {
        localStorage.setItem('snowprep-flashcard-settings', JSON.stringify(this.settings));
    }

    // Create a new flashcard
    createCard(front, back, tags = [], certification = 'general') {
        const card = {
            id: Date.now() + Math.random(),
            front,
            back,
            tags,
            certification,
            created: new Date().toISOString(),

            // Spaced repetition data
            easeFactor: 2.5,  // Default ease factor
            interval: 0,      // Days until next review
            repetitions: 0,   // Number of successful reviews
            nextReview: new Date().toISOString(),
            lastReviewed: null,

            // Statistics
            totalReviews: 0,
            correctReviews: 0,
            lapses: 0,        // Number of times forgotten
            averageTime: 0,   // Average response time in seconds

            // State
            status: 'new',    // new, learning, review, relearning
            step: 0          // Learning step
        };

        this.cards.push(card);
        this.saveCards();
        return card;
    }

    // SM-2 Algorithm for spaced repetition
    reviewCard(cardId, quality, responseTime) {
        const card = this.cards.find(c => c.id === cardId);
        if (!card) return null;

        // Quality: 0-5
        // 0: Complete blackout
        // 1: Incorrect, but remembered with difficulty
        // 2: Incorrect, but easy to remember
        // 3: Correct, but with difficulty
        // 4: Correct, with some hesitation
        // 5: Perfect recall

        card.totalReviews++;
        card.lastReviewed = new Date().toISOString();

        // Update average response time
        card.averageTime = (card.averageTime * (card.totalReviews - 1) + responseTime) / card.totalReviews;

        if (quality >= 3) {
            // Correct answer
            card.correctReviews++;

            if (card.repetitions === 0) {
                card.interval = 1;
            } else if (card.repetitions === 1) {
                card.interval = 6;
            } else {
                card.interval = Math.round(card.interval * card.easeFactor);
            }

            card.repetitions++;
            card.status = 'review';

            // Update ease factor
            card.easeFactor = card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

            if (card.easeFactor < 1.3) {
                card.easeFactor = 1.3;
            }

            // Apply easy bonus for quality 5
            if (quality === 5) {
                card.interval = Math.round(card.interval * this.settings.easyBonus);
            }

        } else {
            // Incorrect answer
            card.lapses++;
            card.repetitions = 0;
            card.interval = 1;
            card.status = 'relearning';

            // Reduce ease factor for forgotten cards
            card.easeFactor = Math.max(1.3, card.easeFactor - 0.2);

            if (quality < 2) {
                card.interval = 0.25; // Review again in 6 hours
            }
        }

        // Calculate next review date
        const nextReviewDate = new Date();
        nextReviewDate.setDate(nextReviewDate.getDate() + Math.max(0, card.interval));
        card.nextReview = nextReviewDate.toISOString();

        this.saveCards();
        return card;
    }

    // Get cards due for review
    getDueCards() {
        const now = new Date();
        return this.cards.filter(card => new Date(card.nextReview) <= now);
    }

    // Get new cards
    getNewCards(limit = null) {
        const maxNew = limit || this.settings.newCardsPerDay;
        return this.cards
            .filter(card => card.status === 'new')
            .slice(0, maxNew);
    }

    // Get review session (new + due cards)
    getReviewSession() {
        const due = this.getDueCards();
        const newCards = this.getNewCards(Math.max(0, this.settings.newCardsPerDay - due.length));

        return {
            dueCards: due,
            newCards: newCards,
            totalCards: due.length + newCards.length
        };
    }

    // Get statistics
    getStats() {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        const stats = {
            total: this.cards.length,
            new: this.cards.filter(c => c.status === 'new').length,
            learning: this.cards.filter(c => c.status === 'learning').length,
            review: this.cards.filter(c => c.status === 'review').length,
            relearning: this.cards.filter(c => c.status === 'relearning').length,
            due: this.getDueCards().length,

            // Reviews today
            reviewsToday: this.cards.filter(c =>
                c.lastReviewed && new Date(c.lastReviewed) >= today
            ).length,

            // Retention rate
            totalReviewed: this.cards.reduce((sum, c) => sum + c.totalReviews, 0),
            totalCorrect: this.cards.reduce((sum, c) => sum + c.correctReviews, 0),

            // Average ease
            averageEase: this.cards.length > 0
                ? this.cards.reduce((sum, c) => sum + c.easeFactor, 0) / this.cards.length
                : 0,

            // Cards by certification
            byCertification: this.groupByCertification()
        };

        stats.retentionRate = stats.totalReviewed > 0
            ? (stats.totalCorrect / stats.totalReviewed * 100).toFixed(1)
            : 0;

        return stats;
    }

    groupByCertification() {
        const grouped = {};
        this.cards.forEach(card => {
            const cert = card.certification || 'general';
            if (!grouped[cert]) {
                grouped[cert] = 0;
            }
            grouped[cert]++;
        });
        return grouped;
    }

    // Search cards
    searchCards(query, certification = null) {
        query = query.toLowerCase();
        return this.cards.filter(card => {
            const matchesQuery = card.front.toLowerCase().includes(query) ||
                                card.back.toLowerCase().includes(query) ||
                                card.tags.some(tag => tag.toLowerCase().includes(query));

            const matchesCert = !certification || card.certification === certification;

            return matchesQuery && matchesCert;
        });
    }

    // Delete card
    deleteCard(cardId) {
        this.cards = this.cards.filter(c => c.id !== cardId);
        this.saveCards();
    }

    // Update card
    updateCard(cardId, updates) {
        const card = this.cards.find(c => c.id === cardId);
        if (card) {
            Object.assign(card, updates);
            this.saveCards();
        }
        return card;
    }

    // Export cards
    exportCards(certification = null) {
        const toExport = certification
            ? this.cards.filter(c => c.certification === certification)
            : this.cards;

        return JSON.stringify(toExport, null, 2);
    }

    // Import cards
    importCards(jsonData) {
        try {
            const imported = JSON.parse(jsonData);
            if (Array.isArray(imported)) {
                imported.forEach(card => {
                    // Ensure required fields
                    if (card.front && card.back) {
                        card.id = Date.now() + Math.random();
                        this.cards.push(card);
                    }
                });
                this.saveCards();
                return imported.length;
            }
        } catch (error) {
            console.error('Import error:', error);
            return 0;
        }
    }

    // Reset card progress
    resetCard(cardId) {
        const card = this.cards.find(c => c.id === cardId);
        if (card) {
            card.easeFactor = 2.5;
            card.interval = 0;
            card.repetitions = 0;
            card.nextReview = new Date().toISOString();
            card.lastReviewed = null;
            card.status = 'new';
            card.totalReviews = 0;
            card.correctReviews = 0;
            card.lapses = 0;
            card.averageTime = 0;
            this.saveCards();
        }
        return card;
    }

    // Suspend/unsuspend card
    suspendCard(cardId, suspend = true) {
        const card = this.cards.find(c => c.id === cardId);
        if (card) {
            card.suspended = suspend;
            if (suspend) {
                // Set next review to far future
                const farFuture = new Date();
                farFuture.setFullYear(farFuture.getFullYear() + 10);
                card.nextReview = farFuture.toISOString();
            }
            this.saveCards();
        }
        return card;
    }
}

// Initialize global flashcard system
window.flashcardSystem = new FlashcardSystem();
