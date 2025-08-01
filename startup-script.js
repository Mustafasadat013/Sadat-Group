// Windows 11-Style Startup Script for Sadat Group

class StartupScreen {
    constructor() {
        this.clockElement = document.getElementById('clock');
        this.dateElement = document.getElementById('date');
        this.calendarEventElement = document.getElementById('calendarEvent');
        this.interactionPrompt = document.getElementById('interactionPrompt');
        this.loadingOverlay = document.getElementById('loadingOverlay');
        this.loadingStep = document.getElementById('loadingStep');
        this.progressFill = document.getElementById('progressFill');
        this.welcomeChime = document.getElementById('welcomeChime');
        this.startupContainer = document.getElementById('startupContainer');
        
        this.isTransitioning = false;
        this.loadingSteps = [
            'Initializing Sadat Group system...',
            'Loading business modules...',
            'Establishing secure connections...',
            'Preparing dashboard...',
            'System ready!'
        ];
        
        this.init();
    }

    init() {
        // Initialize clock and date
        this.initClock();
        this.initDate();
        this.initCalendarEvent();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Start loading sequence
        this.startLoadingSequence();
        
        // Play welcome chime
        this.playWelcomeChime();
        
        // Initialize status updates
        this.initStatusUpdates();
    }

    initClock() {
        const updateClock = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            
            // Format time (e.g., "6:30" instead of "06:30")
            const timeString = `${hours}:${minutes.toString().padStart(2, '0')}`;
            this.clockElement.textContent = timeString;
        };

        // Update immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);
    }

    initDate() {
        const updateDate = () => {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
            };
            const dateString = now.toLocaleDateString('en-US', options);
            this.dateElement.textContent = dateString;
        };

        // Update immediately and then every minute
        updateDate();
        setInterval(updateDate, 60000);
    }

    initCalendarEvent() {
        // Simulate calendar events
        const events = [
            'Meeting with Luxe Team – 3:00 PM',
            'Board Meeting – 10:00 AM',
            'Client Presentation – 2:30 PM',
            'Investment Review – 4:00 PM',
            'Strategy Session – 1:00 PM'
        ];

        // Show a random event or hide if no events
        const randomEvent = events[Math.floor(Math.random() * events.length)];
        if (Math.random() > 0.3) { // 70% chance to show an event
            this.calendarEventElement.querySelector('span').textContent = randomEvent;
        } else {
            this.calendarEventElement.style.display = 'none';
        }
    }

    setupEventListeners() {
        // Click/tap to continue
        this.startupContainer.addEventListener('click', () => {
            this.transitionToLogin();
        });

        // Keyboard interaction
        document.addEventListener('keydown', (e) => {
            if (!this.isTransitioning) {
                this.transitionToLogin();
            }
        });

        // Touch interaction for mobile
        document.addEventListener('touchstart', (e) => {
            if (!this.isTransitioning) {
                this.transitionToLogin();
            }
        });

        // Mouse movement to show interaction prompt
        let mouseTimeout;
        document.addEventListener('mousemove', () => {
            clearTimeout(mouseTimeout);
            this.interactionPrompt.style.opacity = '1';
            
            mouseTimeout = setTimeout(() => {
                this.interactionPrompt.style.opacity = '0.7';
            }, 3000);
        });
    }

    startLoadingSequence() {
        let currentStep = 0;
        const totalSteps = this.loadingSteps.length;

        const updateLoading = () => {
            if (currentStep < totalSteps) {
                // Update loading step
                this.loadingStep.textContent = this.loadingSteps[currentStep];
                
                // Update progress
                const progress = ((currentStep + 1) / totalSteps) * 100;
                this.progressFill.style.width = `${progress}%`;
                
                currentStep++;
                
                // Continue to next step after delay
                setTimeout(updateLoading, 800);
            } else {
                // Loading complete
                setTimeout(() => {
                    this.hideLoadingOverlay();
                }, 500);
            }
        };

        // Start loading sequence after initial delay
        setTimeout(updateLoading, 1000);
    }

    hideLoadingOverlay() {
        this.loadingOverlay.classList.add('hidden');
        
        // Remove loading overlay after transition
        setTimeout(() => {
            this.loadingOverlay.style.display = 'none';
        }, 500);
    }

    playWelcomeChime() {
        // Play welcome chime after a short delay
        setTimeout(() => {
            try {
                this.welcomeChime.volume = 0.3;
                this.welcomeChime.play().catch(e => {
                    console.log('Welcome chime not played (user interaction required)');
                });
            } catch (e) {
                console.log('Welcome chime not available');
            }
        }, 2000);
    }

    initStatusUpdates() {
        // Simulate real-time status updates
        this.updateEmailCount();
        this.updateNotificationCount();
        
        // Update status every 30 seconds
        setInterval(() => {
            this.updateEmailCount();
            this.updateNotificationCount();
        }, 30000);
    }

    updateEmailCount() {
        const emailCount = document.getElementById('emailCount');
        if (emailCount) {
            // Simulate email count changes
            const currentCount = parseInt(emailCount.textContent);
            const newCount = Math.max(0, currentCount + Math.floor(Math.random() * 3) - 1);
            emailCount.textContent = newCount;
            
            // Add subtle animation
            emailCount.style.transform = 'scale(1.1)';
            setTimeout(() => {
                emailCount.style.transform = 'scale(1)';
            }, 200);
        }
    }

    updateNotificationCount() {
        const notificationCount = document.getElementById('notificationCount');
        if (notificationCount) {
            // Simulate notification count changes
            const currentCount = parseInt(notificationCount.textContent);
            const newCount = Math.max(0, currentCount + Math.floor(Math.random() * 2) - 1);
            notificationCount.textContent = newCount;
            
            // Add subtle animation
            notificationCount.style.transform = 'scale(1.1)';
            setTimeout(() => {
                notificationCount.style.transform = 'scale(1)';
            }, 200);
        }
    }

    transitionToLogin() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        
        // Add transition class to container
        this.startupContainer.classList.add('transitioning');
        
        // Fade out content
        const content = document.querySelector('.startup-content');
        const prompt = this.interactionPrompt;
        
        content.style.opacity = '0';
        content.style.transform = 'translateY(-20px)';
        prompt.style.opacity = '0';
        prompt.style.transform = 'translateY(20px)';
        
        // Show loading overlay for smooth transition
        this.loadingOverlay.style.display = 'flex';
        this.loadingOverlay.classList.remove('hidden');
        
        // Transition to login page
        setTimeout(() => {
            // Add slide-out animation
            this.startupContainer.style.transform = 'translateX(-100%)';
            this.startupContainer.style.transition = 'transform 0.8s ease-in-out';
            
            setTimeout(() => {
                // Navigate to login page
                window.location.href = 'login.html';
            }, 400);
        }, 300);
    }

    // Utility methods for customization
    setBackgroundImage(imageUrl) {
        const backgroundImage = document.getElementById('backgroundImage');
        if (backgroundImage) {
            backgroundImage.style.backgroundImage = `url(${imageUrl})`;
        }
    }

    setWelcomeMessage(message) {
        const welcomeText = document.querySelector('.welcome-text h1');
        if (welcomeText) {
            welcomeText.textContent = message;
        }
    }

    setBusinessQuote(quote) {
        const businessQuote = document.querySelector('.business-quote');
        if (businessQuote) {
            businessQuote.textContent = `"${quote}"`;
        }
    }

    setCalendarEvent(event) {
        const calendarEvent = document.getElementById('calendarEvent');
        if (calendarEvent && event) {
            calendarEvent.querySelector('span').textContent = event;
            calendarEvent.style.display = 'flex';
        } else if (calendarEvent) {
            calendarEvent.style.display = 'none';
        }
    }
}

// Initialize startup screen when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create startup screen instance
    const startupScreen = new StartupScreen();
    
    // Make it globally accessible for customization
    window.startupScreen = startupScreen;
    
    // Add some customization examples (can be removed in production)
    // startupScreen.setWelcomeMessage('Hello, Sayed Mustafa Sadat');
    // startupScreen.setBusinessQuote('Excellence in every business endeavor');
    // startupScreen.setCalendarEvent('Meeting with Luxe Team – 3:00 PM');
    
    console.log('Sadat Group Startup Screen initialized');
});

// Add CSS for transition animation
const transitionStyles = document.createElement('style');
transitionStyles.textContent = `
    .startup-container.transitioning {
        transition: all 0.5s ease-in-out;
    }
    
    .startup-content {
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }
    
    .interaction-prompt {
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }
    
    .status-count {
        transition: transform 0.2s ease-in-out;
    }
`;
document.head.appendChild(transitionStyles);