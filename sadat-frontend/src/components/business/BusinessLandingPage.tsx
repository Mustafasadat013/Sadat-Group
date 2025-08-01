'use client';

import React, { useState } from 'react';
import { Business, Product, Service } from '@/types';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  ShoppingCart
} from 'lucide-react';

interface BusinessLandingPageProps {
  business: Business;
}

// Mock data for products and services
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Lipstick',
    description: 'Long-lasting matte lipstick with rich pigmentation',
    price: 75.00,
    category: 'Cosmetics',
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '2',
    name: 'Facial Cream',
    description: 'Hydrating facial moisturizer for all skin types',
    price: 89.99,
    category: 'Skincare',
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '3',
    name: 'Perfume Set',
    description: 'Luxury fragrance collection with 3 signature scents',
    price: 200.00,
    category: 'Fragrance',
    image: '/api/placeholder/300/300',
    inStock: false
  }
];

const mockServices: Service[] = [
  {
    id: '1',
    name: 'Facial Treatment',
    description: 'Professional facial cleansing and treatment',
    price: 120.00,
    category: 'Beauty',
    duration: '60 minutes',
    available: true
  },
  {
    id: '2',
    name: 'Makeup Consultation',
    description: 'Personalized makeup advice and application',
    price: 80.00,
    category: 'Consultation',
    duration: '45 minutes',
    available: true
  },
  {
    id: '3',
    name: 'Spa Package',
    description: 'Complete spa experience with massage and treatments',
    price: 250.00,
    category: 'Spa',
    duration: '120 minutes',
    available: true
  }
];

export default function BusinessLandingPage({ business }: BusinessLandingPageProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'products', name: 'Products' },
    { id: 'services', name: 'Services' },
    { id: 'contact', name: 'Contact' }
  ];

  const renderOverview = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className={`${business.color} text-white rounded-lg p-8 md:p-12`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">{business.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{business.name}</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">{business.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab('products')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              View Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Book Services
            </button>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {business.services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
            <p className="text-sm text-gray-600">Professional service with quality guarantee</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{business.stats.totalOrders.toLocaleString()}</div>
            <div className="text-gray-600">Orders Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">${business.stats.totalRevenue.toLocaleString()}</div>
            <div className="text-gray-600">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{business.stats.activeUsers.toLocaleString()}</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              &quot;Exceptional quality and service. I&apos;ve been a customer for years and they never disappoint!&quot;
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 font-semibold">S</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Loyal Customer</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              &quot;The best in the industry. Professional staff and outstanding results every time.&quot;
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600 font-semibold">M</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-500">Regular Client</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              &quot;Amazing experience! The attention to detail and customer care is outstanding.&quot;
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-semibold">A</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Ahmed Hassan</p>
                <p className="text-sm text-gray-500">New Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our premium selection of high-quality products designed to meet your needs and exceed your expectations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                <ShoppingCart className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <button
                disabled={!product.inStock}
                className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                  product.inStock
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Book our professional services and experience the difference that quality and expertise make.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockServices.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {service.duration}
                </span>
                <span className="text-lg font-bold text-gray-900">${service.price}</span>
              </div>
            </div>
            <button
              onClick={() => setSelectedService(service)}
              disabled={!service.available}
              className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                service.available
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {service.available ? 'Book Now' : 'Unavailable'}
            </button>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Book {selectedService.name}</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Book Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  const renderContact = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with us for any inquiries, bookings, or support. We&apos;re here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p className="text-gray-600">123 Business District, City, Country</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">contact@sadatgroup.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="What&apos;s this about?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`${business.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">{business.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{business.name}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">{business.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'products' && renderProducts()}
        {activeTab === 'services' && renderServices()}
        {activeTab === 'contact' && renderContact()}
      </div>
    </div>
  );
}