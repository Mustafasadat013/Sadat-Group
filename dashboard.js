// Dashboard functionality
class Dashboard {
    constructor() {
        this.currentTime = document.getElementById('currentTime');
        this.currentDate = document.getElementById('currentDate');
        this.userName = document.getElementById('userName');
        this.userRole = document.getElementById('userRole');
        this.userProfile = document.getElementById('userProfile');
        this.userDropdown = document.getElementById('userDropdown');
        this.notificationsPanel = document.getElementById('notificationsPanel');
        this.notificationsBtn = document.querySelector('.notifications');
        
        this.init();
    }

    init() {
        // Check authentication
        this.checkAuth();
        
        // Initialize components
        this.initClock();
        this.initUserInfo();
        this.initEventListeners();
        
        // Initialize analytics
        this.initAnalytics();
        
        // Load dashboard data
        this.loadDashboardData();
    }

    checkAuth() {
        // Use enhanced authentication system
        const session = auth.getCurrentSession();
        if (!session) {
            window.location.href = 'login.html';
            return;
        }

        this.currentUser = {
            username: session.username,
            role: session.role,
            permissions: session.permissions
        };
    }

    initClock() {
        const updateClock = () => {
            const now = new Date();
            
            // Update time
            const timeString = now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            this.currentTime.textContent = timeString;
            
            // Update date
            const dateString = now.toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            this.currentDate.textContent = dateString;
        };
        
        updateClock();
        setInterval(updateClock, 1000);
    }

    initUserInfo() {
        if (this.currentUser) {
            this.userName.textContent = this.currentUser.username;
            this.userRole.textContent = this.currentUser.role;
        }
    }

    initAnalytics() {
        // Initialize analytics system if available
        if (typeof analytics !== 'undefined') {
            this.analytics = analytics;
        }
    }

    initEventListeners() {
        // User profile dropdown
        this.userProfile.addEventListener('click', () => {
            this.toggleUserDropdown();
        });

        // Notifications
        this.notificationsBtn.addEventListener('click', () => {
            this.toggleNotifications();
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.userProfile.contains(e.target) && !this.userDropdown.contains(e.target)) {
                this.userDropdown.classList.remove('show');
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllPanels();
            }
        });
    }

    toggleUserDropdown() {
        this.userDropdown.classList.toggle('show');
    }

    toggleNotifications() {
        this.notificationsPanel.classList.toggle('show');
    }

    closeAllPanels() {
        this.userDropdown.classList.remove('show');
        this.notificationsPanel.classList.remove('show');
    }

    async loadDashboardData() {
        try {
            // Simulate loading dashboard data
            await this.loadWidgetData();
            await this.loadBusinessData();
            await this.loadActivityData();
        } catch (error) {
            console.error('Error loading dashboard data:', error);
        }
    }

    async loadWidgetData() {
        // Simulate API call for widget data
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Update widget values with real data (in production, this would come from API)
        const widgetData = {
            revenue: '$2,847,392',
            sales: '$45,678',
            clients: '1,247',
            tasks: '23'
        };

        // Animate widget values
        this.animateWidgetValues(widgetData);
    }

    async loadBusinessData() {
        // Simulate API call for business data
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Update business tile data
        const businessData = {
            luxe: {
                revenue: '$1,234,567',
                orders: '156'
            },
            investments: {
                portfolio: '$5,678,901',
                investors: '89'
            },
            properties: {
                properties: '24',
                value: '$12,345,678'
            },
            technology: {
                projects: '12',
                clients: '45'
            }
        };

        this.updateBusinessTiles(businessData);
    }

    async loadActivityData() {
        // Simulate API call for activity data
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Activity data would be loaded here
        console.log('Activity data loaded');
    }

    animateWidgetValues(data) {
        const widgets = document.querySelectorAll('.widget-value');
        widgets.forEach((widget, index) => {
            const targetValue = Object.values(data)[index];
            this.animateNumber(widget, targetValue);
        });
    }

    animateNumber(element, targetValue) {
        const startValue = 0;
        const duration = 1000;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.floor(startValue + (this.parseValue(targetValue) - startValue) * progress);
            element.textContent = this.formatValue(currentValue, targetValue);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    parseValue(value) {
        return parseInt(value.replace(/[^0-9]/g, ''));
    }

    formatValue(number, originalValue) {
        if (originalValue.includes('$')) {
            return '$' + number.toLocaleString();
        }
        return number.toLocaleString();
    }

    updateBusinessTiles(data) {
        Object.keys(data).forEach(business => {
            const tile = document.querySelector(`[data-business="${business}"]`);
            if (tile) {
                const stats = tile.querySelectorAll('.stat-value');
                const businessData = data[business];
                
                Object.values(businessData).forEach((value, index) => {
                    if (stats[index]) {
                        stats[index].textContent = value;
                    }
                });
            }
        });
    }
}

// Global functions
function openBusiness(business) {
    // Store current business context
    localStorage.setItem('currentBusiness', business);
    
    // Navigate to business dashboard
    window.location.href = `business-dashboard.html?business=${business}`;
}

function logout() {
    // Use enhanced authentication system
    auth.logout();
}

function toggleNotifications() {
    const panel = document.getElementById('notificationsPanel');
    panel.classList.toggle('show');
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Dashboard();
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to business tiles
    const businessTiles = document.querySelectorAll('.business-tile');
    businessTiles.forEach(tile => {
        tile.addEventListener('mouseenter', () => {
            tile.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        tile.addEventListener('mouseleave', () => {
            tile.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to widgets
    const widgets = document.querySelectorAll('.widget');
    widgets.forEach(widget => {
        widget.addEventListener('click', () => {
            widget.style.transform = 'scale(0.98)';
            setTimeout(() => {
                widget.style.transform = 'translateY(-4px)';
            }, 150);
        });
    });

    // Add smooth scrolling for activity items
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.addEventListener('click', () => {
            // Add click effect
            item.style.background = 'rgba(0, 120, 212, 0.1)';
            setTimeout(() => {
                item.style.background = 'transparent';
            }, 300);
        });
    });
});

// Add real-time updates simulation
setInterval(() => {
    // Simulate real-time data updates
    const widgets = document.querySelectorAll('.widget-value');
    widgets.forEach(widget => {
        const currentValue = widget.textContent;
        const isCurrency = currentValue.includes('$');
        
        if (isCurrency) {
            const number = parseInt(currentValue.replace(/[^0-9]/g, ''));
            const change = Math.floor(Math.random() * 1000) - 500;
            const newValue = Math.max(0, number + change);
            widget.textContent = '$' + newValue.toLocaleString();
        } else {
            const number = parseInt(currentValue.replace(/[^0-9]/g, ''));
            const change = Math.floor(Math.random() * 10) - 5;
            const newValue = Math.max(0, number + change);
            widget.textContent = newValue.toLocaleString();
        }
    });
}, 30000); // Update every 30 seconds

// Add CSS for additional animations
const style = document.createElement('style');
style.textContent = `
    .widget-value {
        transition: all 0.3s ease;
    }
    
    .business-tile {
        transition: all 0.3s ease;
    }
    
    .activity-item {
        transition: all 0.3s ease;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .widget, .business-tile, .activity-item {
        animation: fadeInUp 0.6s ease-out;
    }
    
    .widget:nth-child(1) { animation-delay: 0.1s; }
    .widget:nth-child(2) { animation-delay: 0.2s; }
    .widget:nth-child(3) { animation-delay: 0.3s; }
    .widget:nth-child(4) { animation-delay: 0.4s; }
    
    .business-tile:nth-child(1) { animation-delay: 0.5s; }
    .business-tile:nth-child(2) { animation-delay: 0.6s; }
    .business-tile:nth-child(3) { animation-delay: 0.7s; }
    .business-tile:nth-child(4) { animation-delay: 0.8s; }
`;
document.head.appendChild(style);