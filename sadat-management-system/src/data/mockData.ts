import type { BusinessDivision } from '../types';

export const businessDivisions: BusinessDivision[] = [
  {
    id: 'capital',
    name: 'Capital',
    fullName: 'Sadat Capital',
    icon: 'DollarSign',
    color: '#10b981',
    description: 'Financial services, investments, and capital management solutions for enterprise clients.'
  },
  {
    id: 'connect',
    name: 'Connect',
    fullName: 'Sadat Connect',
    icon: 'MessageCircle',
    color: '#3b82f6',
    description: 'Communication and networking solutions, telecommunications infrastructure.'
  },
  {
    id: 'energy',
    name: 'Energy',
    fullName: 'Sadat Energy',
    icon: 'Zap',
    color: '#f59e0b',
    description: 'Renewable energy projects, power generation, and sustainable energy solutions.'
  },
  {
    id: 'estates',
    name: 'Estates',
    fullName: 'Sadat Estates',
    icon: 'Building2',
    color: '#8b5cf6',
    description: 'Real estate development, property management, and commercial investments.'
  },
  {
    id: 'transport',
    name: 'Transport',
    fullName: 'Sadat Transport',
    icon: 'Truck',
    color: '#ef4444',
    description: 'Logistics, freight services, and transportation fleet management.'
  },
  {
    id: 'investments',
    name: 'Investments',
    fullName: 'Sadat Investments',
    icon: 'TrendingUp',
    color: '#06b6d4',
    description: 'Portfolio management, venture capital, and strategic business investments.'
  }
];

export const dashboardMetrics = {
  totalEmployees: 2420,
  newProjects: 226,
  pendingReports: 193,
  totalRevenue: '24.5M',
  activeProjects: 3672,
  systemHealth: 1060
};

export const performanceData = [
  { division: 'Capital', value: 42345, change: 7, trend: 'up' },
  { division: 'Energy', value: 2345, change: -10, trend: 'down' },
  { division: 'Estates', value: 15842, change: 4, trend: 'up' },
  { division: 'Transport', value: 8256, change: 12, trend: 'up' },
  { division: 'Connect', value: 18934, change: 8, trend: 'up' },
  { division: 'Investments', value: 31245, change: 15, trend: 'up' }
];

export const recentActivities = [
  {
    id: 1,
    user: 'Jack Purton',
    action: 'approved new capital investment',
    time: '2 hours ago',
    avatar: 'JP',
    color: 'blue'
  },
  {
    id: 2,
    user: 'Energy Division',
    action: 'completed Q3 review',
    time: '4 hours ago',
    avatar: 'SE',
    color: 'green'
  },
  {
    id: 3,
    user: 'Transport Team',
    action: 'scheduled fleet maintenance',
    time: '6 hours ago',
    avatar: 'ST',
    color: 'purple'
  },
  {
    id: 4,
    user: 'Estates Department',
    action: 'closed property acquisition',
    time: '8 hours ago',
    avatar: 'SE',
    color: 'orange'
  }
];