import React from 'react';
import { 
  Users, 
  Calendar, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  MoreHorizontal,
  Activity,
  DollarSign,
  Building2,
  Search,
  Filter,
  Download
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const statsCards = [
    {
      id: 'total-employees',
      title: 'Total Employees',
      value: '2,420',
      change: 8.3,
      isPositive: true,
      subtitle: 'From last month',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      id: 'new-projects',
      title: 'New Projects',
      value: '226',
      change: 10.1,
      isPositive: true,
      subtitle: 'From last month',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      id: 'pending-reports',
      title: 'Pending Reports',
      value: '193',
      change: -5.2,
      isPositive: false,
      subtitle: 'From last month',
      icon: AlertTriangle,
      color: 'bg-orange-500'
    }
  ];

  const businessUnits = [
    { name: 'Sadat Capital', value: '42,345', trend: 'up', percentage: '+7%', color: 'text-green-500' },
    { name: 'Sadat Energy', value: '2,345', trend: 'down', percentage: '-10%', color: 'text-red-500' },
    { name: 'Sadat Estates', value: '15,842', trend: 'up', percentage: '+4%', color: 'text-green-500' },
    { name: 'Sadat Transport', value: '8,256', trend: 'up', percentage: '+12%', color: 'text-green-500' }
  ];

  const currentTime = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user?.name || 'Richard'}
              </h1>
              <p className="text-gray-600">
                Have a nice day and don't forget to take care of your business and stay healthy!
              </p>
              <p className="text-sm text-gray-500 mt-1">{currentTime}</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <Search className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-gray-700">Search</span>
              </button>
              <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <Filter className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-gray-700">Filters</span>
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statsCards.map((card) => (
            <div key={card.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${card.color}`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">{card.value}</p>
                <div className="flex items-center">
                  {card.isPositive ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${card.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {card.change}%
                  </span>
                  <span className="text-sm text-gray-500 ml-1">{card.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Visitor Statistics */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Business Unit Performance</h3>
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            
            <div className="space-y-4">
              {businessUnits.map((unit, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{unit.name}</p>
                      <p className="text-2xl font-bold text-gray-900">{unit.value}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`flex items-center ${unit.color}`}>
                      {unit.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 mr-1" />
                      )}
                      <span className="font-semibold">{unit.percentage}</span>
                    </div>
                    <p className="text-sm text-gray-500">From last month</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart placeholder */}
            <div className="mt-6 h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Activity className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Performance Chart</p>
                <p className="text-sm text-gray-400">Interactive charts will be implemented here</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Critical Metrics */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Critical Metrics</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">System Health</span>
                  </div>
                  <span className="font-semibold text-red-500">1060</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Activity className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-gray-700">Active Projects</span>
                  </div>
                  <span className="font-semibold text-blue-500">3672</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <DollarSign className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">Revenue</span>
                  </div>
                  <span className="font-semibold text-green-500">$2.4M</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Recent Activity</h3>
                <button className="text-blue-600 text-sm hover:text-blue-700">View all</button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-xs font-medium text-blue-600">JP</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Jack approved new capital investment</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-xs font-medium text-green-600">SE</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Energy division completed Q3 review</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-xs font-medium text-purple-600">ST</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Transport fleet maintenance scheduled</p>
                    <p className="text-xs text-gray-500">6 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;