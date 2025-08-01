import { QueryClient } from '@tanstack/react-query';

// API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// API client configuration
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error: unknown) => {
        if (error && typeof error === 'object' && 'status' in error && error.status === 404) return false;
        return failureCount < 3;
      },
    },
    mutations: {
      retry: 1,
    },
  },
});

// HTTP client
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth-token');
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication
  async login(credentials: { username: string; password: string }) {
    return this.request<{ user: unknown; token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  async getCurrentUser() {
    return this.request<{ user: unknown }>('/auth/me');
  }

  // Businesses
  async getBusinesses() {
    return this.request<{ businesses: unknown[] }>('/businesses');
  }

  async getBusiness(id: string) {
    return this.request<{ business: unknown }>(`/businesses/${id}`);
  }

  async getBusinessStats(id: string) {
    return this.request<{ stats: unknown }>(`/businesses/${id}/stats`);
  }

  // Orders
  async getOrders(businessId?: string) {
    const endpoint = businessId ? `/businesses/${businessId}/orders` : '/orders';
    return this.request<{ orders: unknown[] }>(endpoint);
  }

  async getOrder(id: string) {
    return this.request<{ order: unknown }>(`/orders/${id}`);
  }

  async createOrder(orderData: unknown) {
    return this.request<{ order: unknown }>('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async updateOrder(id: string, orderData: unknown) {
    return this.request<{ order: unknown }>(`/orders/${id}`, {
      method: 'PUT',
      body: JSON.stringify(orderData),
    });
  }

  async deleteOrder(id: string) {
    return this.request(`/orders/${id}`, {
      method: 'DELETE',
    });
  }

  // Products
  async getProducts(businessId?: string) {
    const endpoint = businessId ? `/businesses/${businessId}/products` : '/products';
    return this.request<{ products: unknown[] }>(endpoint);
  }

  async getProduct(id: string) {
    return this.request<{ product: unknown }>(`/products/${id}`);
  }

  async createProduct(productData: unknown) {
    return this.request<{ product: unknown }>('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
  }

  async updateProduct(id: string, productData: unknown) {
    return this.request<{ product: unknown }>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    });
  }

  async deleteProduct(id: string) {
    return this.request(`/products/${id}`, {
      method: 'DELETE',
    });
  }

  // Services
  async getServices(businessId?: string) {
    const endpoint = businessId ? `/businesses/${businessId}/services` : '/services';
    return this.request<{ services: unknown[] }>(endpoint);
  }

  async getService(id: string) {
    return this.request<{ service: unknown }>(`/services/${id}`);
  }

  async createService(serviceData: unknown) {
    return this.request<{ service: unknown }>('/services', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    });
  }

  async updateService(id: string, serviceData: unknown) {
    return this.request<{ service: unknown }>(`/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(serviceData),
    });
  }

  async deleteService(id: string) {
    return this.request(`/services/${id}`, {
      method: 'DELETE',
    });
  }

  // Analytics
  async getAnalytics(businessId?: string, period?: string) {
    const params = new URLSearchParams();
    if (period) params.append('period', period);
    
    const endpoint = businessId 
      ? `/businesses/${businessId}/analytics?${params}`
      : `/analytics?${params}`;
    
    return this.request<{ analytics: unknown }>(endpoint);
  }

  // File upload
  async uploadFile(file: File, businessId?: string) {
    const formData = new FormData();
    formData.append('file', file);
    
    const endpoint = businessId 
      ? `/businesses/${businessId}/upload`
      : '/upload';
    
    return this.request<{ url: string }>(endpoint, {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set Content-Type for FormData
    });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);

// Mock API for development
export const mockApiClient = {
  ...apiClient,
  // Override methods to return mock data
  getBusinesses: async () => ({
    businesses: [
      {
        id: 'sadat-luxe',
        name: 'Sadat Luxe',
        description: 'Premium cosmetics, fashion, and grooming services.',
        icon: '💄',
        color: 'bg-pink-500',
        stats: {
          totalOrders: 1247,
          totalRevenue: 456789,
          activeUsers: 892,
        },
      },
      // Add more mock businesses...
    ],
  }),
  
  getOrders: async () => ({
    orders: [
      {
        id: '1',
        businessId: 'sadat-luxe',
        customerName: 'John Doe',
        amount: 150.00,
        status: 'completed',
        createdAt: new Date().toISOString(),
        items: [
          { id: '1', name: 'Premium Lipstick', quantity: 2, price: 75.00 }
        ],
      },
      // Add more mock orders...
    ],
  }),
  
  getProducts: async () => ({
    products: [
      {
        id: '1',
        name: 'Premium Lipstick',
        description: 'Long-lasting matte lipstick',
        price: 75.00,
        category: 'Cosmetics',
        image: '/api/placeholder/150/150',
        inStock: true,
      },
      // Add more mock products...
    ],
  }),
};