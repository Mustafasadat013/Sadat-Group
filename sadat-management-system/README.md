# Sadat Group Management System

A comprehensive, full-stack internal management system for Sadat Group to control all business divisions including Capital, Connect, Estates, Energy, Transport, and Investments.

## 🚀 Features

### 🔒 Authentication & Security
- **Lock Screen**: Beautiful beach-themed lock screen with real-time clock
- **Secure Login**: Blue gradient login page with form validation
- **Protected Routes**: Role-based access control
- **Session Management**: Persistent authentication state

### 🧭 Navigation
- **Responsive Sidebar**: Collapsible navigation with business division links
- **Mobile-Friendly**: Touch-optimized mobile navigation
- **Dark Theme**: Professional dark sidebar design
- **Quick Access**: Direct links to all business divisions

### 📊 Dashboard
- **Main Dashboard**: Overview of all business metrics
- **Division Dashboards**: Dedicated dashboards for each business unit
- **Real-time Metrics**: Live performance indicators
- **Interactive Charts**: Data visualization (placeholder for future implementation)

### 🏢 Business Divisions
- **Sadat Capital**: Financial services and investments
- **Sadat Connect**: Communications and networking
- **Sadat Energy**: Energy sector operations
- **Sadat Estates**: Real estate management
- **Sadat Transport**: Logistics and transportation
- **Sadat Investments**: Investment portfolio management

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Context API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sadat-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔐 Demo Credentials

- **Email**: `admin@sadatgroup.com`
- **Password**: `admin123`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── auth/            # Authentication components
│   ├── layout/          # Layout components (Navbar, etc.)
│   └── ui/              # Generic UI components
├── contexts/            # React Context providers
├── pages/               # Page components
│   ├── auth/            # Authentication pages
│   └── dashboard/       # Dashboard pages
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
└── styles/              # Global styles and themes
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e40af` to `#3b82f6`
- **Purple Gradient**: `#8b5cf6`
- **Background**: Purple-blue gradient (`from-purple-50 via-blue-50 to-indigo-100`)
- **Dark Sidebar**: Gray-900 with blue accents

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Cards**: Rounded-2xl with subtle shadows
- **Buttons**: Consistent hover states and transitions
- **Forms**: Glass-morphism effect with backdrop blur

## 🔄 Application Flow

1. **Lock Screen** → User sees beach scene with time/date
2. **Login Page** → User enters credentials after unlocking
3. **Dashboard** → Main overview after successful authentication
4. **Navigation** → Access to different business divisions
5. **Division Pages** → Dedicated dashboards for each business unit

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive layouts for tablets
- **Desktop**: Full-featured desktop experience
- **Touch Friendly**: Large touch targets for mobile

## 🛡️ Security Features

- **Authentication Context**: Centralized auth state management
- **Protected Routes**: Automatic redirection for unauthorized access
- **Local Storage**: Secure token storage
- **Input Validation**: Form validation and sanitization

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] Advanced analytics and charts
- [ ] File upload and management
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Advanced user management
- [ ] Audit logs and reporting

## 📄 License

This project is proprietary and confidential to Sadat Group.

## 👥 Team

Developed for Sadat Group internal management system.

---

**Note**: This is a front-end prototype. Backend integration and database connectivity will be implemented in the next phase.
