# 🚀 Running Sadat Group Business Management System in GitHub Codespaces

This guide will help you set up and run the Sadat Group Business Management System in GitHub Codespaces.

## 📋 Prerequisites

- GitHub account
- Access to GitHub Codespaces
- Modern web browser

## 🎯 Quick Start

### Method 1: Using the Start Script (Recommended)

1. **Open your Codespace**
2. **Open the terminal** (Ctrl+` or View → Terminal)
3. **Make the script executable and run it:**
   ```bash
   chmod +x start-server.sh
   ./start-server.sh
   ```

### Method 2: Using npm Scripts

1. **Open your Codespace**
2. **Open the terminal** (Ctrl+` or View → Terminal)
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```

### Method 3: Manual Live Server

1. **Open your Codespace**
2. **Install live-server globally:**
   ```bash
   npm install -g live-server
   ```
3. **Start the server:**
   ```bash
   live-server --port=3000 --open=/index.html
   ```

## 🌐 Accessing the Application

Once the server is running, you can access the application in several ways:

### Automatic Browser Opening
The application should automatically open in your browser when the server starts.

### Manual Browser Access
If the browser doesn't open automatically:

1. **Click on the "Open in Browser" button** in the Codespaces notification
2. **Or manually navigate to:** `http://localhost:3000`
3. **Or use the forwarded port:** Look for the port forwarding notification in Codespaces

## 🔐 Demo Credentials

Use these credentials to test the system:

| Role | Username | Password |
|------|----------|----------|
| **Super Admin** | `admin` | `admin123` |
| **Owner** | `sadat` | `sadat2024` |
| **Manager** | `manager` | `manager123` |
| **User** | `user` | `user123` |

## 🎮 How to Use the System

### 1. Startup Screen
- Watch the Windows 11-style startup animation
- Click anywhere or press any key to continue
- The live clock shows current time and date

### 2. Login
- Enter your credentials
- Use the "Remember me" option if desired
- Click "Sign In" to access the dashboard

### 3. Main Dashboard
- View business overview widgets
- Click on business tiles to access sub-dashboards
- Check recent activity feed
- Use notifications and user menu

### 4. Business Sub-Dashboards
- Toggle between View and Edit modes
- Use date filters to view different time periods
- Click on module cards to open specific modules
- View business-specific statistics

### 5. Business Modules
- **Products & Assets**: Manage inventory
- **Clients & Investors**: Customer management
- **Transactions**: Sales tracking
- **Finances**: Financial management
- **Staff**: Employee management
- **Tasks**: Project tracking
- **Reports**: Analytics and reporting
- **Settings**: System configuration

## 🛠️ Development Features

### Auto-Reload
The development server automatically reloads when you make changes to:
- HTML files
- CSS files
- JavaScript files

### Port Forwarding
- **Port 3000**: Main application
- **Port 5500**: Alternative server (if needed)

### VS Code Extensions
The devcontainer includes useful extensions:
- Live Server
- Prettier (code formatting)
- Path Intellisense
- Auto Rename Tag
- Tailwind CSS IntelliSense

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
live-server --port=3001 --open=/index.html
```

### Live Server Not Found
If live-server is not installed:
```bash
npm install -g live-server
```

### Browser Not Opening
If the browser doesn't open automatically:
1. Check the terminal for the correct URL
2. Manually open the URL in your browser
3. Look for port forwarding notifications in Codespaces

### Permission Denied
If you get permission errors:
```bash
chmod +x start-server.sh
```

## 📁 Project Structure

```
├── index.html                      # Startup page
├── styles.css                      # Startup styles
├── script.js                       # Startup functionality
├── login.html                      # Login page
├── login-styles.css                # Login styles
├── login.js                        # Login functionality
├── dashboard.html                  # Main dashboard
├── dashboard-styles.css            # Dashboard styles
├── dashboard.js                    # Dashboard functionality
├── business-dashboard.html         # Business sub-dashboard
├── business-dashboard-styles.css   # Business dashboard styles
├── business-dashboard.js           # Business dashboard functionality
├── .devcontainer/                  # Codespaces configuration
│   └── devcontainer.json
├── package.json                    # Project configuration
├── start-server.sh                 # Start script
└── README.md                       # Documentation
```

## 🚀 Production Deployment

For production deployment, you can:

1. **Use a static hosting service** (Netlify, Vercel, GitHub Pages)
2. **Deploy to a web server** (Apache, Nginx)
3. **Use a CDN** for better performance
4. **Add a backend API** for real data integration

## 📞 Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify all files are present
3. Ensure the server is running on the correct port
4. Check the terminal for any error messages

## 🎉 Enjoy!

The Sadat Group Business Management System is now running in your Codespace! Explore all the features and modules to see the full capabilities of the system.