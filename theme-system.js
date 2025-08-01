// Theme System and UI Enhancements for Sadat Group
class ThemeSystem {
    constructor() {
        this.currentTheme = 'light';
        this.themes = {
            light: {
                '--primary-color': '#0078d4',
                '--secondary-color': '#106ebe',
                '--background-color': '#f5f7fa',
                '--surface-color': '#ffffff',
                '--text-primary': '#333333',
                '--text-secondary': '#666666',
                '--text-muted': '#999999',
                '--border-color': '#e0e0e0',
                '--shadow-color': 'rgba(0, 0, 0, 0.1)',
                '--success-color': '#4caf50',
                '--warning-color': '#ff9800',
                '--error-color': '#f44336',
                '--info-color': '#2196f3'
            },
            dark: {
                '--primary-color': '#4cc2ff',
                '--secondary-color': '#7dd3fc',
                '--background-color': '#0f172a',
                '--surface-color': '#1e293b',
                '--text-primary': '#ffffff',
                '--text-secondary': '#cbd5e1',
                '--text-muted': '#64748b',
                '--border-color': '#334155',
                '--shadow-color': 'rgba(0, 0, 0, 0.3)',
                '--success-color': '#22c55e',
                '--warning-color': '#f59e0b',
                '--error-color': '#ef4444',
                '--info-color': '#3b82f6'
            },
            highContrast: {
                '--primary-color': '#ffffff',
                '--secondary-color': '#000000',
                '--background-color': '#000000',
                '--surface-color': '#ffffff',
                '--text-primary': '#ffffff',
                '--text-secondary': '#ffffff',
                '--text-muted': '#cccccc',
                '--border-color': '#ffffff',
                '--shadow-color': 'rgba(255, 255, 255, 0.3)',
                '--success-color': '#00ff00',
                '--warning-color': '#ffff00',
                '--error-color': '#ff0000',
                '--info-color': '#00ffff'
            }
        };
        
        this.init();
    }

    init() {
        this.loadSavedTheme();
        this.setupThemeToggle();
        this.setupAccessibility();
        this.applyTheme(this.currentTheme);
    }

    // Load saved theme preference
    loadSavedTheme() {
        const savedTheme = localStorage.getItem('sadatGroupTheme');
        if (savedTheme && this.themes[savedTheme]) {
            this.currentTheme = savedTheme;
        } else {
            // Auto-detect system preference
            this.currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
    }

    // Apply theme to document
    applyTheme(themeName) {
        const theme = this.themes[themeName];
        if (!theme) return;

        const root = document.documentElement;
        
        // Apply CSS custom properties
        Object.entries(theme).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });

        // Update body class
        document.body.className = document.body.className.replace(/theme-\w+/, '');
        document.body.classList.add(`theme-${themeName}`);

        // Save preference
        localStorage.setItem('sadatGroupTheme', themeName);
        this.currentTheme = themeName;

        // Update theme toggle button
        this.updateThemeToggle();
        
        // Trigger theme change event
        this.dispatchThemeChangeEvent(themeName);
    }

    // Setup theme toggle functionality
    setupThemeToggle() {
        // Create theme toggle button if it doesn't exist
        if (!document.getElementById('themeToggle')) {
            this.createThemeToggle();
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('sadatGroupTheme')) {
                this.applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // Create theme toggle button
    createThemeToggle() {
        const toggle = document.createElement('button');
        toggle.id = 'themeToggle';
        toggle.className = 'theme-toggle';
        toggle.setAttribute('aria-label', 'Toggle theme');
        toggle.innerHTML = '<i class="fas fa-moon"></i>';
        
        toggle.addEventListener('click', () => {
            const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
            this.applyTheme(newTheme);
        });

        // Add to header if it exists
        const header = document.querySelector('.dashboard-header, .business-header');
        if (header) {
            const headerRight = header.querySelector('.header-right');
            if (headerRight) {
                headerRight.insertBefore(toggle, headerRight.firstChild);
            }
        }
    }

    // Update theme toggle button appearance
    updateThemeToggle() {
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            const icon = toggle.querySelector('i');
            if (this.currentTheme === 'dark') {
                icon.className = 'fas fa-sun';
                toggle.setAttribute('aria-label', 'Switch to light theme');
            } else {
                icon.className = 'fas fa-moon';
                toggle.setAttribute('aria-label', 'Switch to dark theme');
            }
        }
    }

    // Setup accessibility features
    setupAccessibility() {
        // High contrast mode toggle
        this.createHighContrastToggle();
        
        // Font size controls
        this.createFontSizeControls();
        
        // Keyboard navigation
        this.setupKeyboardNavigation();
        
        // Screen reader announcements
        this.setupScreenReaderSupport();
    }

    // Create high contrast toggle
    createHighContrastToggle() {
        const toggle = document.createElement('button');
        toggle.id = 'highContrastToggle';
        toggle.className = 'accessibility-toggle';
        toggle.setAttribute('aria-label', 'Toggle high contrast');
        toggle.innerHTML = '<i class="fas fa-adjust"></i>';
        
        toggle.addEventListener('click', () => {
            const isHighContrast = this.currentTheme === 'highContrast';
            this.applyTheme(isHighContrast ? 'light' : 'highContrast');
        });

        // Add to accessibility panel
        this.createAccessibilityPanel();
    }

    // Create accessibility panel
    createAccessibilityPanel() {
        const panel = document.createElement('div');
        panel.id = 'accessibilityPanel';
        panel.className = 'accessibility-panel';
        panel.innerHTML = `
            <h3>Accessibility</h3>
            <div class="accessibility-controls">
                <button id="highContrastToggle" class="accessibility-toggle">
                    <i class="fas fa-adjust"></i> High Contrast
                </button>
                <button id="increaseFontSize" class="accessibility-toggle">
                    <i class="fas fa-plus"></i> Increase Font
                </button>
                <button id="decreaseFontSize" class="accessibility-toggle">
                    <i class="fas fa-minus"></i> Decrease Font
                </button>
                <button id="resetFontSize" class="accessibility-toggle">
                    <i class="fas fa-undo"></i> Reset Font
                </button>
            </div>
        `;

        document.body.appendChild(panel);
        this.setupFontSizeControls();
    }

    // Setup font size controls
    setupFontSizeControls() {
        const increaseBtn = document.getElementById('increaseFontSize');
        const decreaseBtn = document.getElementById('decreaseFontSize');
        const resetBtn = document.getElementById('resetFontSize');

        let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16;

        increaseBtn?.addEventListener('click', () => {
            currentFontSize = Math.min(currentFontSize + 2, 24);
            this.setFontSize(currentFontSize);
        });

        decreaseBtn?.addEventListener('click', () => {
            currentFontSize = Math.max(currentFontSize - 2, 12);
            this.setFontSize(currentFontSize);
        });

        resetBtn?.addEventListener('click', () => {
            currentFontSize = 16;
            this.setFontSize(currentFontSize);
        });

        // Apply saved font size
        this.setFontSize(currentFontSize);
    }

    // Set font size
    setFontSize(size) {
        document.documentElement.style.fontSize = `${size}px`;
        localStorage.setItem('fontSize', size.toString());
        this.announceToScreenReader(`Font size set to ${size} pixels`);
    }

    // Setup keyboard navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Alt + T for theme toggle
            if (e.altKey && e.key === 't') {
                e.preventDefault();
                const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                this.applyTheme(newTheme);
            }

            // Alt + H for high contrast
            if (e.altKey && e.key === 'h') {
                e.preventDefault();
                const isHighContrast = this.currentTheme === 'highContrast';
                this.applyTheme(isHighContrast ? 'light' : 'highContrast');
            }

            // Alt + + for increase font
            if (e.altKey && e.key === '=') {
                e.preventDefault();
                document.getElementById('increaseFontSize')?.click();
            }

            // Alt + - for decrease font
            if (e.altKey && e.key === '-') {
                e.preventDefault();
                document.getElementById('decreaseFontSize')?.click();
            }

            // Escape to close modals
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    // Setup screen reader support
    setupScreenReaderSupport() {
        // Add ARIA labels to interactive elements
        this.addAriaLabels();
        
        // Setup focus management
        this.setupFocusManagement();
    }

    // Add ARIA labels
    addAriaLabels() {
        // Add labels to buttons without text
        document.querySelectorAll('button:not([aria-label]):not(:has(*))').forEach(button => {
            const icon = button.querySelector('i');
            if (icon) {
                const iconClass = icon.className;
                if (iconClass.includes('fa-edit')) {
                    button.setAttribute('aria-label', 'Edit');
                } else if (iconClass.includes('fa-trash')) {
                    button.setAttribute('aria-label', 'Delete');
                } else if (iconClass.includes('fa-plus')) {
                    button.setAttribute('aria-label', 'Add');
                }
            }
        });
    }

    // Setup focus management
    setupFocusManagement() {
        // Trap focus in modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const modal = document.querySelector('.modal.show, .mfa-modal');
                if (modal) {
                    const focusableElements = modal.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    
                    if (focusableElements.length === 0) return;

                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            }
        });
    }

    // Announce to screen reader
    announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
    }

    // Close all modals
    closeAllModals() {
        document.querySelectorAll('.modal.show, .mfa-modal').forEach(modal => {
            modal.classList.remove('show');
        });
    }

    // Dispatch theme change event
    dispatchThemeChangeEvent(themeName) {
        const event = new CustomEvent('themechange', {
            detail: { theme: themeName }
        });
        document.dispatchEvent(event);
    }

    // Get current theme
    getCurrentTheme() {
        return this.currentTheme;
    }

    // Check if dark mode is active
    isDarkMode() {
        return this.currentTheme === 'dark';
    }

    // Check if high contrast is active
    isHighContrast() {
        return this.currentTheme === 'highContrast';
    }
}

// Initialize theme system
const themeSystem = new ThemeSystem();