import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LockScreen from './components/auth/LockScreen';
import LoginPage from './components/auth/LoginPage';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import './index.css';

// App State Types
type AppState = 'locked' | 'login' | 'authenticated';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-800">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" replace />;
};

// Main App Layout Component
const AppLayout: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/dashboard');
  const { isAuthenticated } = useAuth();

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
  };

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      <main className="flex-1 lg:ml-0">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/capital" element={<DivisionDashboard division="Capital" />} />
          <Route path="/connect" element={<DivisionDashboard division="Connect" />} />
          <Route path="/energy" element={<DivisionDashboard division="Energy" />} />
          <Route path="/estates" element={<DivisionDashboard division="Estates" />} />
          <Route path="/transport" element={<DivisionDashboard division="Transport" />} />
          <Route path="/investments" element={<DivisionDashboard division="Investments" />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
};

// Division Dashboard Placeholder
const DivisionDashboard: React.FC<{ division: string }> = ({ division }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="p-6 max-w-7xl mx-auto">
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl text-white font-bold">{division.charAt(0)}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sadat {division}</h1>
          <p className="text-xl text-gray-600 mb-8">
            Dedicated dashboard for {division} division coming soon
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-md mx-auto">
            <p className="text-gray-700 mb-4">This section will include:</p>
            <ul className="text-left text-gray-600 space-y-2">
              <li>• Division-specific metrics</li>
              <li>• Team management</li>
              <li>• Project tracking</li>
              <li>• Financial reports</li>
              <li>• Performance analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Settings Page Placeholder
const SettingsPage: React.FC = () => {
  const { user, logout } = useAuth();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Settings */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={user?.name || ''} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  value={user?.email || ''} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <input 
                  type="text" 
                  value={user?.role || ''} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Change Password
                </button>
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Export Data
                </button>
                <button 
                  onClick={logout}
                  className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Authentication Flow Component
const AuthFlow: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('locked');
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      setAppState('authenticated');
    }
  }, [isAuthenticated]);

  const handleUnlock = () => {
    setAppState('login');
  };

  const handleLoginSuccess = () => {
    setAppState('authenticated');
  };

  if (isAuthenticated || appState === 'authenticated') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="relative">
      {appState === 'locked' && (
        <div className="animate-fadeIn">
          <LockScreen onUnlock={handleUnlock} />
        </div>
      )}
      
      {appState === 'login' && (
        <div className="animate-fadeIn">
          <LoginPage onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/auth" element={<AuthFlow />} />
            <Route path="/*" element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            } />
            <Route path="/" element={<Navigate to="/auth" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
