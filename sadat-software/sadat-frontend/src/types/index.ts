export type UserRole = 'manager' | 'seller' | 'staff';

export type BusinessType = 
  | 'sadat-luxe'
  | 'sadat-connect'
  | 'sadat-capital'
  | 'sadat-estates'
  | 'sadat-energy'
  | 'sadat-transport'
  | 'sadat-investments'
  | 'government-contracts';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  businessAccess: BusinessType[];
  avatar?: string;
  createdAt: Date;
}

export interface Business {
  id: BusinessType;
  name: string;
  description: string;
  icon: string;
  color: string;
  services: string[];
  stats: {
    totalOrders: number;
    totalRevenue: number;
    activeUsers: number;
  };
}

export interface Order {
  id: string;
  businessId: BusinessType;
  customerName: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: Date;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  duration?: string;
  available: boolean;
}

export interface Testimonial {
  id: string;
  customerName: string;
  business: BusinessType;
  rating: number;
  comment: string;
  date: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  tags: string[];
  image: string;
}

export interface ReferralCode {
  id: string;
  code: string;
  userId: string;
  usageCount: number;
  maxUsage: number;
  reward: number;
  isActive: boolean;
}