// Enhanced Authentication System for Sadat Group
class AuthenticationSystem {
    constructor() {
        this.currentUser = null;
        this.sessionTimeout = 30 * 60 * 1000; // 30 minutes
        this.mfaEnabled = false;
        this.init();
    }

    init() {
        this.checkExistingSession();
        this.setupSessionMonitoring();
        this.setupSecurityHeaders();
    }

    // Secure login with server-side validation
    async login(username, password) {
        try {
            // Show loading state
            this.showLoadingState(true);

            // Validate input
            if (!this.validateInput(username) || !this.validateInput(password)) {
                throw new Error('Invalid input detected');
            }

            // Simulate server-side authentication
            const response = await this.authenticateWithServer(username, password);
            
            if (response.success) {
                this.currentUser = response.user;
                this.createSecureSession(response.user);
                this.logSecurityEvent('login_success', username);
                
                // Redirect directly to dashboard (MFA disabled)
                this.redirectToDashboard();
            } else {
                throw new Error(response.message || 'Authentication failed');
            }
        } catch (error) {
            this.logSecurityEvent('login_failed', username, error.message);
            throw error;
        } finally {
            this.showLoadingState(false);
        }
    }

    // Server-side authentication simulation
    async authenticateWithServer(username, password) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // In production, this would be a real API call
        const validUsers = {
            'admin': { password: 'admin123', role: 'super_admin', requiresMFA: false },
            'sadat': { password: 'sadat2024', role: 'owner', requiresMFA: false },
            'manager': { password: 'manager123', role: 'manager', requiresMFA: false },
            'user': { password: 'user123', role: 'user', requiresMFA: false }
        };

        const user = validUsers[username];
        
        if (user && user.password === password) {
            return {
                success: true,
                user: {
                    id: this.generateUserId(),
                    username,
                    role: user.role,
                    requiresMFA: user.requiresMFA,
                    permissions: this.getUserPermissions(user.role),
                    lastLogin: new Date().toISOString()
                }
            };
        }

        return {
            success: false,
            message: 'Invalid username or password'
        };
    }

    // Multi-Factor Authentication (Disabled for now)
    async verifyMFA(code) {
        // MFA is currently disabled
        console.log('MFA is disabled');
        this.redirectToDashboard();
    }

    // Secure session management
    createSecureSession(user) {
        const sessionData = {
            userId: user.id,
            username: user.username,
            role: user.role,
            permissions: user.permissions,
            loginTime: new Date().toISOString(),
            lastActivity: Date.now()
        };

        // Store session data securely
        sessionStorage.setItem('sadatGroupSession', JSON.stringify(sessionData));
        
        // Set secure cookie
        this.setSecureCookie('sessionToken', this.generateSessionToken(), {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: this.sessionTimeout
        });
    }

    // Session monitoring
    setupSessionMonitoring() {
        // Update last activity on user interaction
        ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
            document.addEventListener(event, () => this.updateLastActivity(), true);
        });

        // Check session timeout every minute
        setInterval(() => this.checkSessionTimeout(), 60000);
    }

    checkSessionTimeout() {
        const session = this.getCurrentSession();
        if (session) {
            const now = Date.now();
            const lastActivity = session.lastActivity;
            
            if (now - lastActivity > this.sessionTimeout) {
                this.logout('Session expired due to inactivity');
            }
        }
    }

    updateLastActivity() {
        const session = this.getCurrentSession();
        if (session) {
            session.lastActivity = Date.now();
            sessionStorage.setItem('sadatGroupSession', JSON.stringify(session));
        }
    }

    // Secure logout
    logout(reason = 'User logged out') {
        this.logSecurityEvent('logout', this.currentUser?.username, reason);
        
        // Clear session data
        sessionStorage.removeItem('sadatGroupSession');
        this.removeSecureCookie('sessionToken');
        
        // Clear current user
        this.currentUser = null;
        this.mfaEnabled = false;
        
        // Redirect to login
        window.location.href = 'login.html';
    }

    // Input validation and sanitization
    validateInput(input) {
        if (typeof input !== 'string') return false;
        if (input.length < 3 || input.length > 100) return false;
        if (/[<>\"'&]/.test(input)) return false; // Prevent XSS
        return true;
    }

    // Security event logging
    logSecurityEvent(event, username, details = '') {
        const securityLog = {
            timestamp: new Date().toISOString(),
            event,
            username,
            details,
            ipAddress: this.getClientIP(),
            userAgent: navigator.userAgent
        };

        console.log('Security Event:', securityLog);
        // In production, send to security monitoring system
    }

    // Utility functions
    generateUserId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    generateSessionToken() {
        return crypto.getRandomValues(new Uint8Array(32))
            .reduce((acc, val) => acc + val.toString(16).padStart(2, '0'), '');
    }

    getUserPermissions(role) {
        const permissions = {
            'super_admin': ['all'],
            'owner': ['all'],
            'manager': ['business_management', 'reports', 'staff', 'tasks'],
            'user': ['reports_view', 'tasks_view']
        };
        return permissions[role] || ['reports_view'];
    }

    getCurrentSession() {
        const sessionData = sessionStorage.getItem('sadatGroupSession');
        return sessionData ? JSON.parse(sessionData) : null;
    }

    setSecureCookie(name, value, options = {}) {
        let cookie = `${name}=${value}`;
        if (options.secure) cookie += '; Secure';
        if (options.sameSite) cookie += `; SameSite=${options.sameSite}`;
        if (options.maxAge) cookie += `; Max-Age=${options.maxAge}`;
        document.cookie = cookie;
    }

    removeSecureCookie(name) {
        document.cookie = `${name}=; Max-Age=0; Path=/`;
    }

    getClientIP() {
        // In production, get from server headers
        return '127.0.0.1';
    }

    showLoadingState(show) {
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.classList.toggle('loading', show);
            loginBtn.disabled = show;
        }
    }

    showMFAPrompt() {
        // MFA is disabled - redirect directly to dashboard
        console.log('MFA prompt disabled');
        this.redirectToDashboard();
    }

    redirectToDashboard() {
        window.location.href = 'dashboard.html';
    }

    setupSecurityHeaders() {
        // Add security headers to all pages
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Security-Policy';
        meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;";
        document.head.appendChild(meta);
    }
}

// Initialize authentication system
let auth;

// Ensure DOM is loaded before initializing
document.addEventListener('DOMContentLoaded', function() {
    auth = new AuthenticationSystem();
    console.log('Authentication system initialized');
});

// Fallback initialization for immediate access
if (document.readyState === 'loading') {
    // DOM is still loading, wait for it
    document.addEventListener('DOMContentLoaded', function() {
        if (!auth) {
            auth = new AuthenticationSystem();
            console.log('Authentication system initialized (fallback)');
        }
    });
} else {
    // DOM is already loaded
    auth = new AuthenticationSystem();
    console.log('Authentication system initialized (immediate)');
}