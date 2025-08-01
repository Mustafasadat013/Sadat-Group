import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, BusinessType } from '@/types';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  hasAccess: (businessId: BusinessType) => boolean;
  isManager: (businessId: BusinessType) => boolean;
}

interface ThemeState {
  theme: 'light' | 'dark' | 'system';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

interface NotificationState {
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
    duration?: number;
  }>;
  addNotification: (notification: Omit<NotificationState['notifications'][0], 'id'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

interface UIState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  commandPaletteOpen: boolean;
  toggleCommandPalette: () => void;
  setCommandPaletteOpen: (open: boolean) => void;
}

// Mock user data
const mockUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@sadatgroup.com',
    role: 'manager',
    businessAccess: [
      'sadat-luxe',
      'sadat-connect',
      'sadat-capital',
      'sadat-estates',
      'sadat-energy',
      'sadat-transport',
      'sadat-investments',
      'government-contracts'
    ],
    createdAt: new Date(),
  },
  {
    id: '2',
    username: 'luxe-manager',
    email: 'manager@sadatluxe.com',
    role: 'manager',
    businessAccess: ['sadat-luxe'],
    createdAt: new Date(),
  },
  {
    id: '3',
    username: 'connect-staff',
    email: 'staff@sadatconnect.com',
    role: 'staff',
    businessAccess: ['sadat-connect'],
    createdAt: new Date(),
  },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      login: async (username: string, password: string) => {
        set({ isLoading: true });
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const foundUser = mockUsers.find(u => u.username === username);
        
        if (foundUser && password === 'password') {
          set({ 
            user: foundUser, 
            isLoading: false, 
            isAuthenticated: true 
          });
          return true;
        }
        
        set({ isLoading: false });
        return false;
      },
      logout: () => {
        set({ 
          user: null, 
          isAuthenticated: false 
        });
      },
      hasAccess: (businessId: BusinessType) => {
        const { user } = get();
        if (!user) return false;
        return user.businessAccess.includes(businessId);
      },
      isManager: (businessId: BusinessType) => {
        const { user } = get();
        if (!user) return false;
        return user.role === 'manager' && user.businessAccess.includes(businessId);
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      toggleTheme: () => {
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        }));
      },
      setTheme: (theme) => {
        set({ theme });
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  addNotification: (notification) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { ...notification, id };
    
    set((state) => ({
      notifications: [...state.notifications, newNotification],
    }));

    // Auto-remove notification after duration
    if (notification.duration !== 0) {
      setTimeout(() => {
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        }));
      }, notification.duration || 5000);
    }
  },
  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }));
  },
  clearNotifications: () => {
    set({ notifications: [] });
  },
}));

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => {
    set((state) => ({ sidebarOpen: !state.sidebarOpen }));
  },
  setSidebarOpen: (open) => {
    set({ sidebarOpen: open });
  },
  commandPaletteOpen: false,
  toggleCommandPalette: () => {
    set((state) => ({ commandPaletteOpen: !state.commandPaletteOpen }));
  },
  setCommandPaletteOpen: (open) => {
    set({ commandPaletteOpen: open });
  },
}));