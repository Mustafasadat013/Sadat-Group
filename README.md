# Sadat Group Management

A modern management software with a beautiful lock screen feature built with React, TypeScript, and Tailwind CSS.

## Features

### 🔒 Lock Screen
- **Beautiful Design**: Modern glass-morphism UI with gradient backgrounds
- **Real-time Clock**: Displays current time and date
- **Password Protection**: Secure authentication system
- **Auto-lock**: Automatically locks after 5 minutes of inactivity
- **Manual Lock**: Press `Ctrl+L` to lock manually
- **Show/Hide Password**: Toggle password visibility
- **Loading States**: Smooth animations and feedback

### 📊 Dashboard
- **Modern Interface**: Clean, professional design
- **Quick Stats**: Employee count, active projects, departments
- **Quick Actions**: Easy access to main features
- **Responsive Design**: Works on all screen sizes

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sadat-group-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Default Credentials
- **Password**: `admin123`

## Usage

### Lock Screen
- The application starts in locked mode
- Enter the password to unlock
- The screen will auto-lock after 5 minutes of inactivity
- Press `Ctrl+L` to manually lock the screen

### Dashboard
- View quick statistics and metrics
- Access different management modules
- Use the lock button in the header to return to lock screen

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: Hot module replacement, TypeScript compilation

## Project Structure

```
src/
├── components/
│   ├── LockScreen.tsx    # Lock screen component
│   └── Dashboard.tsx     # Main dashboard component
├── App.tsx               # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## Customization

### Changing the Password
Edit the `DEFAULT_PASSWORD` constant in `src/components/LockScreen.tsx`:

```typescript
const DEFAULT_PASSWORD = 'your-new-password'
```

### Auto-lock Duration
Modify the `AUTO_LOCK_DELAY` in `src/App.tsx`:

```typescript
const AUTO_LOCK_DELAY = 10 * 60 * 1000 // 10 minutes
```

### Styling
- Customize colors in `tailwind.config.js`
- Modify animations in `src/index.css`
- Update the gradient background in the lock screen component

## Security Notes

⚠️ **Important**: This is a demo application. In a production environment:

- Implement proper authentication with a backend server
- Use secure password hashing (bcrypt, Argon2)
- Store credentials securely (environment variables, secure databases)
- Implement session management
- Add rate limiting for login attempts
- Use HTTPS in production

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.