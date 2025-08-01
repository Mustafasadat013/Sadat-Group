'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, BusinessType } from '@/types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  hasAccess: (businessId: BusinessType) => boolean;
  isManager: (businessId: BusinessType) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demonstration
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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('sadat-user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch {
        localStorage.removeItem('sadat-user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication logic
    const foundUser = mockUsers.find(u => u.username === username);
    
    if (foundUser && password === 'password') { // Mock password
      setUser(foundUser);
      localStorage.setItem('sadat-user', JSON.stringify(foundUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sadat-user');
  };

  const hasAccess = (businessId: BusinessType): boolean => {
    if (!user) return false;
    return user.businessAccess.includes(businessId);
  };

  const isManager = (businessId: BusinessType): boolean => {
    if (!user) return false;
    return user.role === 'manager' && user.businessAccess.includes(businessId);
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
    hasAccess,
    isManager,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}