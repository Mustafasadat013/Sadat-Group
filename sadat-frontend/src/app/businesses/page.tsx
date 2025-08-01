import React from 'react';
import Link from 'next/link';
import { businesses } from '@/data/businesses';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

export default function BusinessesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Business Ecosystem
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Discover our diverse portfolio of businesses, each designed to meet specific needs 
            and deliver exceptional value across multiple industries.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-blue-100">Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$50M+</div>
              <div className="text-blue-100">Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Businesses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each business is carefully crafted to serve specific market needs while maintaining 
              the high standards of quality and service that Sadat Group is known for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {businesses.map((business) => (
              <div
                key={business.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className={`${business.color} p-6 text-center relative overflow-hidden`}>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {business.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{business.name}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{business.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services</h4>
                    <div className="space-y-2">
                      {business.services.slice(0, 3).map((service, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                      {business.services.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{business.services.length - 3} more services
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600">
                        {business.stats.totalOrders.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">Orders</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">
                        ${(business.stats.totalRevenue / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-gray-500">Revenue</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">
                        {business.stats.activeUsers.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">Users</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/businesses/${business.id}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center group-hover:bg-blue-700"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sadat Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-business approach provides comprehensive solutions while maintaining 
              specialized expertise in each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Diverse Portfolio</h3>
              <p className="text-gray-600">
                From luxury cosmetics to financial services, we cover multiple industries 
                with specialized expertise in each.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Every business maintains the highest standards of quality and customer service 
                that Sadat Group is known for.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Solutions</h3>
              <p className="text-gray-600">
                Seamless integration between businesses allows for comprehensive solutions 
                and enhanced customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Choose the business that best fits your needs, or explore multiple services 
            across our ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Access Dashboard
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}