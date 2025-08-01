// Login page functionality
class LoginPage {
    constructor() {
        this.form = document.getElementById('loginForm');
        this.usernameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');
        this.passwordToggle = document.getElementById('passwordToggle');
        this.loginBtn = document.getElementById('loginBtn');
        this.loadingSpinner = document.getElementById('loadingSpinner');
        this.forgotPasswordBtn = document.getElementById('forgotPassword');
        this.modal = document.getElementById('forgotPasswordModal');
        this.closeModalBtn = document.getElementById('closeModal');
        this.closeModalBtn2 = document.getElementById('closeModalBtn');
        this.messageContainer = document.getElementById('messageContainer');
        this.demoCredentialsModal = document.getElementById('demoCredentialsModal');
        
        this.init();
    }

    init() {
        // Add event listeners
        this.form.addEventListener('submit', (e) => this.handleLogin(e));
        this.passwordToggle.addEventListener('click', () => this.togglePassword());
        this.forgotPasswordBtn.addEventListener('click', (e) => this.showForgotPasswordModal(e));
        this.closeModalBtn.addEventListener('click', () => this.hideModal());
        this.closeModalBtn2.addEventListener('click', () => this.hideModal());
        
        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });

        // Demo credentials modal
        this.demoCredentialsModal.addEventListener('click', (e) => {
            if (e.target === this.demoCredentialsModal) {
                this.hideDemoCredentialsModal();
            }
        });

        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideModal();
                this.hideDemoCredentialsModal();
            }
        });

        // Focus on username input on page load
        this.usernameInput.focus();

        // Add input validation
        this.addInputValidation();
        
        // Setup accessibility
        this.setupAccessibility();
    }

    addInputValidation() {
        // Real-time validation
        this.usernameInput.addEventListener('input', () => {
            this.validateUsername();
        });

        this.passwordInput.addEventListener('input', () => {
            this.validatePassword();
        });

        // Add visual feedback for valid/invalid inputs
        [this.usernameInput, this.passwordInput].forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    }

    validateUsername() {
        const username = this.usernameInput.value.trim();
        const isValid = username.length >= 3;
        
        this.updateFieldValidation(this.usernameInput, isValid);
        return isValid;
    }

    validatePassword() {
        const password = this.passwordInput.value;
        const isValid = password.length >= 6;
        
        this.updateFieldValidation(this.passwordInput, isValid);
        return isValid;
    }

    validateField(input) {
        if (input === this.usernameInput) {
            return this.validateUsername();
        } else if (input === this.passwordInput) {
            return this.validatePassword();
        }
        return true;
    }

    updateFieldValidation(input, isValid) {
        if (input.value.trim() === '') {
            input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            return;
        }

        if (isValid) {
            input.style.borderColor = '#4caf50';
            input.style.boxShadow = '0 0 0 3px rgba(76, 175, 80, 0.1)';
        } else {
            input.style.borderColor = '#f44336';
            input.style.boxShadow = '0 0 0 3px rgba(244, 67, 54, 0.1)';
        }
    }

    togglePassword() {
        const type = this.passwordInput.type === 'password' ? 'text' : 'password';
        this.passwordInput.type = type;
        
        const icon = this.passwordToggle.querySelector('i');
        icon.className = type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
    }

    async handleLogin(e) {
        e.preventDefault();

        // Validate form
        const isUsernameValid = this.validateUsername();
        const isPasswordValid = this.validatePassword();

        if (!isUsernameValid || !isPasswordValid) {
            this.showMessage('Please fix the validation errors before submitting.', 'error');
            return;
        }

        // Show loading state
        this.setLoadingState(true);

        try {
            // Simulate API call
            await this.authenticateUser();
        } catch (error) {
            this.showMessage(error.message, 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    async authenticateUser() {
        const username = this.usernameInput.value.trim();
        const password = this.passwordInput.value;

        try {
            // Use the enhanced authentication system
            await auth.login(username, password);
            
            // Show success message
            this.showMessage('Login successful! Redirecting to dashboard...', 'success');
            
            // Redirect to dashboard
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        } catch (error) {
            throw new Error(error.message || 'Invalid username or password. Please try again.');
        }
    }

    storeUserSession(username) {
        const userSession = {
            username: username,
            role: this.getUserRole(username),
            loginTime: new Date().toISOString(),
            permissions: this.getUserPermissions(username)
        };

        localStorage.setItem('sadatGroupUser', JSON.stringify(userSession));
    }

    getUserRole(username) {
        const roles = {
            'admin': 'Super Admin',
            'sadat': 'Owner',
            'manager': 'Manager',
            'user': 'User'
        };
        return roles[username] || 'User';
    }

    getUserPermissions(username) {
        const permissions = {
            'admin': ['all'],
            'sadat': ['all'],
            'manager': ['read', 'write', 'reports'],
            'user': ['read']
        };
        return permissions[username] || ['read'];
    }

    setLoadingState(isLoading) {
        this.loginBtn.classList.toggle('loading', isLoading);
        this.loginBtn.disabled = isLoading;
        
        if (isLoading) {
            this.loginBtn.querySelector('span').textContent = 'Signing In...';
        } else {
            this.loginBtn.querySelector('span').textContent = 'Sign In';
        }
    }

    showForgotPasswordModal(e) {
        e.preventDefault();
        this.modal.classList.add('show');
    }

    hideModal() {
        this.modal.classList.remove('show');
    }

    showDemoCredentialsModal() {
        this.demoCredentialsModal.classList.add('show');
    }

    hideDemoCredentialsModal() {
        this.demoCredentialsModal.classList.remove('show');
    }

    setupAccessibility() {
        // Add ARIA labels
        this.usernameInput.setAttribute('aria-label', 'Username or email address');
        this.passwordInput.setAttribute('aria-label', 'Password');
        this.passwordToggle.setAttribute('aria-label', 'Toggle password visibility');
        
        // Add keyboard navigation
        this.form.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
                e.preventDefault();
                this.handleLogin(e);
            }
        });
    }

    showMessage(message, type = 'info') {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${type}`;
        messageElement.innerHTML = `
            <div class="message-content">
                <i class="fas ${this.getMessageIcon(type)}"></i>
                <span>${message}</span>
            </div>
        `;

        this.messageContainer.appendChild(messageElement);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.parentNode.removeChild(messageElement);
            }
        }, 5000);

        // Add click to dismiss
        messageElement.addEventListener('click', () => {
            if (messageElement.parentNode) {
                messageElement.parentNode.removeChild(messageElement);
            }
        });
    }

    getMessageIcon(type) {
        const icons = {
            'success': 'fa-check-circle',
            'error': 'fa-exclamation-circle',
            'warning': 'fa-exclamation-triangle',
            'info': 'fa-info-circle'
        };
        return icons[type] || 'fa-info-circle';
    }
}

// Global functions for modal handling
function showDemoCredentials() {
    const loginPage = window.loginPageInstance;
    if (loginPage) {
        loginPage.showDemoCredentialsModal();
    }
}

function hideDemoCredentials() {
    const loginPage = window.loginPageInstance;
    if (loginPage) {
        loginPage.hideDemoCredentialsModal();
    }
}

// Initialize login page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.loginPageInstance = new LoginPage();
});

// Add some additional security features
document.addEventListener('DOMContentLoaded', () => {
    // Prevent right-click context menu
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // Prevent F12, Ctrl+Shift+I, Ctrl+U
    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u')
        ) {
            e.preventDefault();
        }
    });

    // Auto-logout after inactivity (30 minutes)
    let inactivityTimer;
    const resetInactivityTimer = () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            localStorage.removeItem('sadatGroupUser');
            window.location.href = 'login.html';
        }, 30 * 60 * 1000); // 30 minutes
    };

    // Reset timer on user activity
    ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, resetInactivityTimer, true);
    });

    resetInactivityTimer();
});

// Add CSS for message content
const style = document.createElement('style');
style.textContent = `
    .message-content {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .message-content i {
        font-size: 1.1rem;
    }
    
    .message.success .message-content i {
        color: #4caf50;
    }
    
    .message.error .message-content i {
        color: #f44336;
    }
    
    .message.warning .message-content i {
        color: #ff9800;
    }
    
    .message.info .message-content i {
        color: #2196f3;
    }
`;
document.head.appendChild(style);