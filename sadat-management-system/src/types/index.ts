export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'manager' | 'user';
  division?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface DashboardCard {
  id: string;
  title: string;
  value: string | number;
  change?: number;
  icon: string;
  color: string;
}

export interface BusinessDivision {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  color: string;
  description: string;
}

export type NavItem = {
  id: string;
  label: string;
  icon: string;
  path: string;
  division?: string;
};