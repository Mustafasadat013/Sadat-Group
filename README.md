# Sadat Group - Business Management System

A comprehensive multi-business management platform for Sadat Group, featuring a Windows 11-style startup screen, secure authentication, centralized dashboard, and modular business management capabilities.

## Features

### 🚀 **Startup & Authentication**
- **Windows 11-Style Startup**: Beautiful animated startup screen with live clock
- **Secure Login System**: Role-based authentication with JWT tokens
- **User Management**: Super Admin control with role assignments
- **Session Management**: Auto-logout and security features

### 📊 **Main Dashboard**
- **Business Overview**: Real-time revenue, sales, clients, and tasks widgets
- **Business Tiles**: Sadat Luxe, Investments, Properties, Technology
- **Recent Activity**: Live activity feed with timestamps
- **Responsive Design**: Works on all devices

### 🏢 **Business Sub-Dashboards**
- **Modular Architecture**: Individual dashboards for each business unit
- **View/Edit Modes**: Toggle between viewing and editing data
- **Date Filtering**: Filter data by today, week, month, or year
- **Real-time Updates**: Live data synchronization

### 📋 **Business Modules**
- **Products & Assets**: Inventory management with CRUD operations
- **Clients & Investors**: Customer relationship management
- **Transactions**: Sales and financial transaction tracking
- **Finances**: Expense and income management
- **Staff Management**: Employee and role management
- **Tasks & Projects**: Project tracking and task assignment
- **Reports & Analytics**: Data export and reporting
- **Settings & Configuration**: System configuration

### 🎨 **Design & UX**
- **Windows 11 Design Language**: Glassmorphism effects and modern styling
- **Smooth Animations**: Fluid transitions and loading states
- **Interactive Elements**: Hover effects and responsive interactions
- **Dark/Light Mode Ready**: Easy theme switching capability

## Quick Start

1. **Open `index.html`** in your web browser
2. **Watch the startup sequence** with smooth animations
3. **Click anywhere or press any key** to continue to login
4. **Login with demo credentials**:
   - Username: `admin` / Password: `admin123`
   - Username: `sadat` / Password: `sadat2024`
   - Username: `manager` / Password: `manager123`
   - Username: `user` / Password: `user123`
5. **Explore the main dashboard** and business modules
6. **Click on business tiles** to access sub-dashboards

## File Structure

```
├── index.html                      # Startup page
├── styles.css                      # Startup page styles
├── script.js                       # Startup page functionality
├── login.html                      # Login page
├── login-styles.css                # Login page styles
├── login.js                        # Login functionality
├── dashboard.html                  # Main dashboard
├── dashboard-styles.css            # Dashboard styles
├── dashboard.js                    # Dashboard functionality
├── business-dashboard.html         # Business sub-dashboard
├── business-dashboard-styles.css   # Business dashboard styles
├── business-dashboard.js           # Business dashboard functionality
└── README.md                       # Documentation
```

## Customization

### Branding
Edit the following elements in `index.html`:
- **App Name**: Change "Sadat Group" to your company name
- **Tagline**: Update "Centralized Business Management System" to your tagline
- **Logo**: Replace the building icon with your own logo or icon
- **Version**: Update version number and copyright information

### Colors
Modify the color scheme in `styles.css`:
- **Primary Blue**: `#0078d4` (Windows 11 blue)
- **Secondary Blue**: `#106ebe`
- **Background**: Dark gradient from `#0f0f23` to `#16213e`
- **Accent Colors**: Purple and pink gradients for background effects

### Business Units
Add new business units in `dashboard.html`:
```html
<div class="business-tile" data-business="your-business">
    <div class="tile-header">
        <div class="tile-icon">
            <i class="fas fa-your-icon"></i>
        </div>
    </div>
    <div class="tile-content">
        <h3>Your Business Name</h3>
        <p>Business description</p>
    </div>
</div>
```

### User Roles
Configure user roles in `login.js`:
```javascript
const roles = {
    'admin': 'Super Admin',
    'manager': 'Manager',
    'user': 'User'
};
```

## Browser Compatibility

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## Performance

The startup page is optimized for smooth performance:
- Hardware-accelerated animations using CSS transforms
- Efficient DOM manipulation
- Minimal JavaScript footprint
- Optimized asset loading

## Integration

To integrate this system with your backend:

1. **Replace demo authentication**: Connect to your authentication API
2. **Add real data sources**: Connect to your database for live data
3. **Implement CRUD operations**: Add real create, read, update, delete functionality
4. **Add file upload**: Implement document and image upload features
5. **Add reporting**: Connect to reporting and analytics services

## Keyboard Shortcuts

- **Escape**: Close modals and panels
- **Enter**: Submit forms
- **Tab**: Navigate between elements

## Dependencies

- **Font Awesome 6**: For icons (loaded via CDN)
- **Google Fonts**: Segoe UI font family (loaded via CDN)

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve this business management system.

---

**Note**: This is a demo implementation. For production use, consider:
- Implementing proper backend API integration
- Adding real database connectivity
- Implementing proper security measures
- Adding comprehensive error handling
- Adding accessibility features
- Implementing real-time notifications
- Adding comprehensive logging and monitoring