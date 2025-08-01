// Startup Screen Configuration for Sadat Group
// Easy customization of startup screen elements

const StartupConfig = {
    // Background Settings
    background: {
        // Default background (can be replaced with actual image URL)
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDc4ZDQ7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwYjNmMztzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8L3N2Zz4=',
        
        // Alternative backgrounds (uncomment to use)
        // image: '/images/sadat-group-hq.jpg',
        // image: '/images/cityscape.jpg',
        // image: '/images/office-interior.jpg',
        // image: '/images/business-meeting.jpg',
        
        // Background overlay opacity (0.0 to 1.0)
        overlayOpacity: 0.3,
        
        // Background blur effect (0px to 10px)
        blurAmount: '2px'
    },

    // Welcome Message Settings
    welcome: {
        // Personalized welcome message
        message: 'Hello, Sayed Mustafa Sadat',
        
        // Business quote or slogan
        quote: 'Excellence in every business endeavor',
        
        // Welcome icon (FontAwesome class)
        icon: 'fas fa-smile',
        
        // Alternative icons
        // icon: 'fas fa-user-tie',
        // icon: 'fas fa-building',
        // icon: 'fas fa-chart-line',
        // icon: 'fas fa-star'
    },

    // Calendar Events
    calendar: {
        // Enable/disable calendar events
        enabled: true,
        
        // Default events (will be randomly selected)
        events: [
            'Meeting with Luxe Team – 3:00 PM',
            'Board Meeting – 10:00 AM',
            'Client Presentation – 2:30 PM',
            'Investment Review – 4:00 PM',
            'Strategy Session – 1:00 PM',
            'Team Standup – 9:00 AM',
            'Quarterly Review – 2:00 PM',
            'Product Launch – 11:00 AM'
        ],
        
        // Probability of showing an event (0.0 to 1.0)
        showProbability: 0.7
    },

    // Status Indicators
    status: {
        // Email count settings
        email: {
            enabled: true,
            initialCount: 12,
            updateInterval: 30000, // 30 seconds
            maxCount: 50
        },
        
        // Notification count settings
        notifications: {
            enabled: true,
            initialCount: 3,
            updateInterval: 30000, // 30 seconds
            maxCount: 20
        },
        
        // System status
        system: {
            enabled: true,
            status: 'System Online',
            icon: 'fas fa-chart-line'
        }
    },

    // Audio Settings
    audio: {
        // Enable/disable welcome chime
        welcomeChime: true,
        
        // Chime volume (0.0 to 1.0)
        volume: 0.3,
        
        // Delay before playing chime (milliseconds)
        delay: 2000
    },

    // Animation Settings
    animations: {
        // Enable/disable animations
        enabled: true,
        
        // Animation duration (milliseconds)
        duration: 1000,
        
        // Loading sequence duration
        loadingDuration: 800
    },

    // Loading Sequence
    loading: {
        steps: [
            'Initializing Sadat Group system...',
            'Loading business modules...',
            'Establishing secure connections...',
            'Preparing dashboard...',
            'System ready!'
        ],
        
        // Custom loading steps (uncomment to override)
        // steps: [
        //     'Starting Sadat Group...',
        //     'Loading Luxe Business...',
        //     'Loading Investments...',
        //     'Loading Properties...',
        //     'Loading Technology...',
        //     'System ready!'
        // ]
    },

    // Theme Colors
    theme: {
        primary: '#0078d4',
        secondary: '#106ebe',
        accent: '#00bcf2',
        text: '#ffffff',
        textSecondary: 'rgba(255, 255, 255, 0.8)',
        textMuted: 'rgba(255, 255, 255, 0.6)'
    },

    // Responsive Settings
    responsive: {
        // Mobile breakpoint
        mobileBreakpoint: 768,
        
        // Tablet breakpoint
        tabletBreakpoint: 1024,
        
        // Font size adjustments
        mobile: {
            clockSize: '4rem',
            dateSize: '1.3rem',
            welcomeSize: '2rem'
        },
        
        tablet: {
            clockSize: '5rem',
            dateSize: '1.5rem',
            welcomeSize: '2.5rem'
        },
        
        desktop: {
            clockSize: '8rem',
            dateSize: '2rem',
            welcomeSize: '3.5rem'
        }
    },

    // Customization Methods
    methods: {
        // Set custom background image
        setBackground: function(imageUrl) {
            if (window.startupScreen) {
                window.startupScreen.setBackgroundImage(imageUrl);
            }
        },

        // Set custom welcome message
        setWelcomeMessage: function(message) {
            if (window.startupScreen) {
                window.startupScreen.setWelcomeMessage(message);
            }
        },

        // Set custom business quote
        setBusinessQuote: function(quote) {
            if (window.startupScreen) {
                window.startupScreen.setBusinessQuote(quote);
            }
        },

        // Set custom calendar event
        setCalendarEvent: function(event) {
            if (window.startupScreen) {
                window.startupScreen.setCalendarEvent(event);
            }
        },

        // Update status counts
        updateEmailCount: function(count) {
            const emailCount = document.getElementById('emailCount');
            if (emailCount) {
                emailCount.textContent = count;
            }
        },

        updateNotificationCount: function(count) {
            const notificationCount = document.getElementById('notificationCount');
            if (notificationCount) {
                notificationCount.textContent = count;
            }
        }
    }
};

// Export configuration for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StartupConfig;
} else {
    // Make it globally available
    window.StartupConfig = StartupConfig;
}

// Example usage:
// StartupConfig.methods.setWelcomeMessage('Hello, Sayed Mustafa Sadat');
// StartupConfig.methods.setBusinessQuote('Excellence in every business endeavor');
// StartupConfig.methods.setBackground('/images/sadat-group-hq.jpg');
// StartupConfig.methods.setCalendarEvent('Meeting with Luxe Team – 3:00 PM');