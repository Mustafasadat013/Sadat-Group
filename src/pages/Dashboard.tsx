import Sidebar from '../components/Sidebar'
import StatCard, { 
  ClientsCard, 
  DealsCard, 
  InvoicesCard, 
  TicketsCard,
  RevenueCard,
  InvestmentsCard,
  PropertiesCard,
  ProjectsCard
} from '../components/StatCard'
import { RevenueChart, ClientsChart, BusinessUnitsChart } from '../components/Chart'
import { Bell, Search, Calendar, TrendingUp, Users, Building } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Welcome back, Sayed</h1>
              <p className="text-gray-400 text-sm">Here's what's happening with your businesses today</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              
              {/* Calendar */}
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <RevenueCard />
            <ClientsCard />
            <DealsCard />
            <InvoicesCard />
          </div>

          {/* Business Units Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <InvestmentsCard />
            <PropertiesCard />
            <ProjectsCard />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <RevenueChart />
            <ClientsChart />
          </div>

          {/* Business Units Chart */}
          <div className="mb-8">
            <BusinessUnitsChart />
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
              Recent Activity
            </h2>
            
            <div className="space-y-4">
              <ActivityItem
                icon={<Users className="w-4 h-4 text-green-400" />}
                title="New client registered"
                description="Ahmed Hassan joined Sadat Luxe"
                time="2 hours ago"
                type="success"
              />
              
              <ActivityItem
                icon={<Building className="w-4 h-4 text-blue-400" />}
                title="Property deal closed"
                description="Villa in Palm Jumeirah sold for $2.5M"
                time="4 hours ago"
                type="info"
              />
              
              <ActivityItem
                icon={<TrendingUp className="w-4 h-4 text-purple-400" />}
                title="Investment milestone"
                description="Tech startup reached 1000 users"
                time="6 hours ago"
                type="success"
              />
              
              <ActivityItem
                icon={<Calendar className="w-4 h-4 text-yellow-400" />}
                title="Meeting scheduled"
                description="Board meeting with investors tomorrow"
                time="1 day ago"
                type="warning"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

interface ActivityItemProps {
  icon: React.ReactNode
  title: string
  description: string
  time: string
  type: 'success' | 'info' | 'warning' | 'error'
}

function ActivityItem({ icon, title, description, time, type }: ActivityItemProps) {
  const typeColors = {
    success: 'border-l-green-500',
    info: 'border-l-blue-500',
    warning: 'border-l-yellow-500',
    error: 'border-l-red-500'
  }

  return (
    <div className={`flex items-start space-x-3 p-3 rounded-lg bg-gray-700 border-l-4 ${typeColors[type]}`}>
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      
      <div className="flex-shrink-0">
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  )
}