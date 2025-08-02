import React, { useState } from 'react';
import { 
  Home, 
  MessageCircle, 
  Settings, 
  LogOut,
  ChevronRight,
  Building2,
  DollarSign,
  Zap,
  Truck,
  TrendingUp,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import type { NavItem } from '../../types';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: 'Home', path: '/dashboard' },
    { id: 'capital', label: 'Sadat Capital', icon: 'DollarSign', path: '/capital' },
    { id: 'connect', label: 'Sadat Connect', icon: 'MessageCircle', path: '/connect' },
    { id: 'energy', label: 'Sadat Energy', icon: 'Zap', path: '/energy' },
    { id: 'estates', label: 'Sadat Estates', icon: 'Building2', path: '/estates' },
    { id: 'transport', label: 'Sadat Transport', icon: 'Truck', path: '/transport' },
    { id: 'investments', label: 'Sadat Investments', icon: 'TrendingUp', path: '/investments' },
  ];

  const bottomNavItems: NavItem[] = [
    { id: 'settings', label: 'Settings', icon: 'Settings', path: '/settings' },
    { id: 'logout', label: 'Log Out', icon: 'LogOut', path: '/logout' },
  ];

  const getIcon = (iconName: string, className: string = "w-6 h-6") => {
    const icons: { [key: string]: React.ReactNode } = {
      Home: <Home className={className} />,
      DollarSign: <DollarSign className={className} />,
      MessageCircle: <MessageCircle className={className} />,
      Zap: <Zap className={className} />,
      Building2: <Building2 className={className} />,
      Truck: <Truck className={className} />,
      TrendingUp: <TrendingUp className={className} />,
      Settings: <Settings className={className} />,
      LogOut: <LogOut className={className} />,
    };
    return icons[iconName] || <Home className={className} />;
  };

  const handleNavClick = (item: NavItem) => {
    if (item.id === 'logout') {
      logout();
      onNavigate('/');
    } else {
      onNavigate(item.path);
    }
    setIsMobileOpen(false);
  };

  const isActive = (path: string) => currentPath === path;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-gray-800 text-white p-2 rounded-lg shadow-lg"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full bg-gray-900 text-white z-50 transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-20' : 'w-80'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:relative lg:translate-x-0
      `}>
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div>
                <h1 className="text-xl font-bold text-white">Sadat Group</h1>
                <p className="text-sm text-gray-400">Management System</p>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:block p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className={`w-5 h-5 transition-transform ${isCollapsed ? '' : 'rotate-180'}`} />
            </button>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                {user?.name?.charAt(0) || 'A'}
              </span>
            </div>
            {!isCollapsed && (
              <div className="ml-3">
                <p className="font-medium text-white">{user?.name || 'Admin User'}</p>
                <p className="text-sm text-gray-400">{user?.email || 'admin@sadatgroup.com'}</p>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Menu Label */}
        {!isCollapsed && (
          <div className="px-6 py-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              MENU
            </h3>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-2">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`
                    w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 group
                    ${isActive(item.path) 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center justify-center">
                    {getIcon(item.icon, "w-6 h-6")}
                  </div>
                  {!isCollapsed && (
                    <span className="ml-3 font-medium">{item.label}</span>
                  )}
                  {isActive(item.path) && !isCollapsed && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Navigation */}
        <div className="border-t border-gray-700 p-4">
          <ul className="space-y-2">
            {bottomNavItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`
                    w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200
                    ${item.id === 'logout'
                      ? 'text-red-400 hover:bg-red-500/20 hover:text-red-300'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center justify-center">
                    {getIcon(item.icon, "w-6 h-6")}
                  </div>
                  {!isCollapsed && (
                    <span className="ml-3 font-medium">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Collapsed mode tooltips */}
        {isCollapsed && (
          <div className="absolute left-full top-0 h-full pointer-events-none">
            {/* Tooltip would be implemented here for collapsed mode */}
          </div>
        )}
      </div>

      {/* Compact sidebar for mobile collapsed state */}
      <div className={`
        fixed right-4 top-20 bg-gray-900 rounded-xl p-2 z-40 lg:hidden
        ${!isMobileOpen && isCollapsed ? 'block' : 'hidden'}
      `}>
        {navItems.slice(0, 5).map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item)}
            className={`
              block w-12 h-12 rounded-lg mb-2 flex items-center justify-center transition-colors
              ${isActive(item.path) ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700'}
            `}
          >
            {getIcon(item.icon, "w-6 h-6")}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;