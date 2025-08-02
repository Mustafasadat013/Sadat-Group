import React, { useEffect } from 'react'
import { Lock, Users, BarChart3, Settings, LogOut } from 'lucide-react'

interface DashboardProps {
  onLock: () => void
}

const Dashboard: React.FC<DashboardProps> = ({ onLock }) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'l') {
        e.preventDefault()
        onLock()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [onLock])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Sadat Group Management
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={onLock}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                <Lock className="w-4 h-4 mr-2" />
                Lock
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Sadat Group Management
            </h2>
            <p className="text-gray-600 mb-6">
              Your comprehensive management solution for business operations, employee management, and analytics.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                <div className="flex items-center">
                  <Users className="w-8 h-8 mr-3" />
                  <div>
                    <p className="text-sm opacity-90">Total Employees</p>
                    <p className="text-2xl font-bold">1,247</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                <div className="flex items-center">
                  <BarChart3 className="w-8 h-8 mr-3" />
                  <div>
                    <p className="text-sm opacity-90">Active Projects</p>
                    <p className="text-2xl font-bold">23</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                <div className="flex items-center">
                  <Settings className="w-8 h-8 mr-3" />
                  <div>
                    <p className="text-sm opacity-90">Departments</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <Users className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-medium text-gray-900">Employee Management</h3>
                <p className="text-sm text-gray-500">Manage staff and permissions</p>
              </button>
              
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <BarChart3 className="w-6 h-6 text-green-600 mb-2" />
                <h3 className="font-medium text-gray-900">Analytics</h3>
                <p className="text-sm text-gray-500">View reports and insights</p>
              </button>
              
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <Settings className="w-6 h-6 text-purple-600 mb-2" />
                <h3 className="font-medium text-gray-900">Settings</h3>
                <p className="text-sm text-gray-500">Configure system preferences</p>
              </button>
              
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <LogOut className="w-6 h-6 text-red-600 mb-2" />
                <h3 className="font-medium text-gray-900">Logout</h3>
                <p className="text-sm text-gray-500">Sign out of the system</p>
              </button>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-900 mb-2">
              💡 Quick Tips
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Press <kbd className="px-2 py-1 bg-blue-100 rounded text-xs">Ctrl+L</kbd> to lock the screen</li>
              <li>• The screen will auto-lock after 5 minutes of inactivity</li>
              <li>• Default password is <code className="px-1 py-0.5 bg-blue-100 rounded text-xs">admin123</code></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard