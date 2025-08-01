// Startup page functionality
class StartupPage {
    constructor() {
        this.currentStep = 0;
        this.statusItems = document.querySelectorAll('.status-item');
        this.progressText = document.querySelector('.progress-text');
        this.loadingText = document.querySelector('.loading-text');
        this.progressFill = document.querySelector('.progress-fill');
        
        this.init();
    }

    init() {
        // Start the startup sequence
        this.startupSequence();
        
        // Add click event to skip startup (for demo purposes)
        document.addEventListener('click', () => {
            this.skipToEnd();
        });
    }

    startupSequence() {
        const steps = [
            { text: 'Initializing system...', duration: 1000 },
            { text: 'Loading core modules...', duration: 1200 },
            { text: 'Establishing connections...', duration: 800 },
            { text: 'Preparing interface...', duration: 600 },
            { text: 'Loading user preferences...', duration: 900 },
            { text: 'Finalizing startup...', duration: 500 }
        ];

        let currentStep = 0;
        const totalSteps = steps.length;

        const updateProgress = () => {
            if (currentStep < totalSteps) {
                const step = steps[currentStep];
                this.updateLoadingText(step.text);
                
                // Update progress bar
                const progress = ((currentStep + 1) / totalSteps) * 100;
                this.progressFill.style.width = `${progress}%`;
                
                // Update status items
                this.updateStatusItem(currentStep);
                
                currentStep++;
                
                setTimeout(updateProgress, step.duration);
            } else {
                this.completeStartup();
            }
        };

        updateProgress();
    }

    updateLoadingText(text) {
        this.loadingText.style.opacity = '0';
        setTimeout(() => {
            this.loadingText.textContent = text;
            this.loadingText.style.opacity = '1';
        }, 200);
    }

    updateStatusItem(index) {
        if (index < this.statusItems.length) {
            const item = this.statusItems[index];
            
            // Mark previous items as completed
            if (index > 0) {
                this.statusItems[index - 1].classList.add('completed');
            }
            
            // Add active animation to current item
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
            
            // Add spinning animation to icon
            const icon = item.querySelector('i');
            if (icon && !icon.classList.contains('fa-check-circle')) {
                icon.classList.add('fa-spin');
            }
        }
    }

    completeStartup() {
        // Mark all status items as completed
        this.statusItems.forEach(item => {
            item.classList.add('completed');
            const icon = item.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-spin');
                icon.className = 'fas fa-check-circle';
            }
        });

        // Update final text
        this.updateLoadingText('Ready to launch!');
        this.progressText.textContent = 'Startup complete';

        // Add completion animation
        document.querySelector('.content-wrapper').style.animation = 'completionPulse 2s ease-in-out';

        // Add CSS for completion animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes completionPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
            }
        `;
        document.head.appendChild(style);

        // Show completion message
        setTimeout(() => {
            this.showCompletionMessage();
        }, 2000);
    }

    showCompletionMessage() {
        // Create completion overlay
        const overlay = document.createElement('div');
        overlay.className = 'completion-overlay';
        overlay.innerHTML = `
            <div class="completion-content">
                <div class="completion-icon">
                    <i class="fas fa-rocket"></i>
                </div>
                <h2>Welcome to Your Software!</h2>
                <p>Your application is ready to use.</p>
                <button class="launch-btn" onclick="window.location.reload()">
                    <i class="fas fa-play"></i>
                    Launch Application
                </button>
            </div>
        `;

        // Add styles for completion overlay
        const style = document.createElement('style');
        style.textContent = `
            .completion-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(10px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                animation: fadeIn 0.5s ease-out;
            }

            .completion-content {
                text-align: center;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(20px);
                border-radius: 24px;
                padding: 3rem;
                border: 1px solid rgba(255, 255, 255, 0.2);
                animation: slideInUp 0.5s ease-out;
            }

            .completion-icon {
                width: 100px;
                height: 100px;
                background: linear-gradient(135deg, #4caf50, #45a049);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 3rem;
                color: white;
                margin: 0 auto 2rem;
                animation: bounce 1s ease-in-out;
            }

            .completion-content h2 {
                font-size: 2rem;
                margin-bottom: 1rem;
                background: linear-gradient(135deg, #fff, #e0e0e0);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .completion-content p {
                font-size: 1.1rem;
                color: #b0b0b0;
                margin-bottom: 2rem;
            }

            .launch-btn {
                background: linear-gradient(135deg, #0078d4, #106ebe);
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 12px;
                font-size: 1.1rem;
                font-weight: 500;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 16px rgba(0, 120, 212, 0.3);
            }

            .launch-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(0, 120, 212, 0.4);
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                }
                40% {
                    transform: translateY(-10px);
                }
                60% {
                    transform: translateY(-5px);
                }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(overlay);
    }

    skipToEnd() {
        // Skip to completion (for demo purposes)
        this.completeStartup();
    }
}

// Initialize the startup page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new StartupPage();
});

// Add some additional interactive effects
document.addEventListener('mousemove', (e) => {
    const accentElements = document.querySelectorAll('.accent-circle');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    accentElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const xOffset = (x - 0.5) * speed * 20;
        const yOffset = (y - 0.5) * speed * 20;
        
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Skip startup on Escape key
        const startupPage = new StartupPage();
        startupPage.skipToEnd();
    }
});