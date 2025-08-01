import Link from 'next/link';
import { ArrowRight, Shield, Users, BarChart3, Settings } from 'lucide-react';

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Sadat Group
            </Link>
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back to Website
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sadat Group Business Management Software
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access your business dashboard, manage orders, track analytics, and control your operations 
            with our comprehensive management platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Dashboards</h3>
            <p className="text-gray-600">
              Real-time analytics and insights for each of your businesses with customizable reports.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Order Management</h3>
            <p className="text-gray-600">
              Track orders, manage inventory, and handle customer relationships efficiently.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Settings className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Settings</h3>
            <p className="text-gray-600">
              Configure your business preferences, manage users, and control access permissions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Access</h3>
            <p className="text-gray-600">
              Role-based access control with secure authentication and data protection.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Reports</h3>
            <p className="text-gray-600">
              Comprehensive reporting tools with exportable data and visual charts.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Management</h3>
            <p className="text-gray-600">
              Manage team members, assign roles, and track performance across all businesses.
            </p>
          </div>
        </div>

        {/* Login Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Access Your Dashboard</h2>
            <p className="text-gray-600">
              Sign in to manage your Sadat Group businesses and operations.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                Sign In
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Demo Credentials:
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p><strong>Admin:</strong> admin / password</p>
                <p><strong>Luxe Manager:</strong> luxe-manager / password</p>
                <p><strong>Connect Staff:</strong> connect-staff / password</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Access */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Or access the software directly:
          </p>
          <Link 
            href="http://localhost:3001" 
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
          >
            Open Software Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}