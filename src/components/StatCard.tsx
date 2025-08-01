import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: string
  icon?: React.ReactNode
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple'
}

export default function StatCard({ 
  title, 
  value, 
  change, 
  icon,
  color = 'blue' 
}: StatCardProps) {
  const isPositive = !change.startsWith('-')
  
  const colorClasses = {
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    green: 'bg-green-500/10 border-green-500/20 text-green-400',
    yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    red: 'bg-red-500/10 border-red-500/20 text-red-400',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400'
  }

  const changeColorClasses = isPositive 
    ? 'text-green-400 bg-green-500/10' 
    : 'text-red-400 bg-red-500/10'

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:border-gray-600 transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-400 font-medium">{title}</p>
        {icon && (
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
            {icon}
          </div>
        )}
      </div>

      {/* Value */}
      <h2 className="text-3xl font-bold text-white mb-2">{value}</h2>

      {/* Change Indicator */}
      <div className={`flex items-center space-x-1 px-2 py-1 rounded-lg w-fit ${changeColorClasses}`}>
        {isPositive ? (
          <TrendingUp className="w-3 h-3" />
        ) : (
          <TrendingDown className="w-3 h-3" />
        )}
        <span className="text-xs font-medium">
          {change} from last month
        </span>
      </div>
    </div>
  )
}

// Predefined stat cards for common business metrics
export function ClientsCard() {
  return (
    <StatCard
      title="Total Clients"
      value="2,420"
      change="+47%"
      color="blue"
    />
  )
}

export function DealsCard() {
  return (
    <StatCard
      title="New Deals"
      value="226"
      change="-10%"
      color="green"
    />
  )
}

export function InvoicesCard() {
  return (
    <StatCard
      title="Pending Invoices"
      value="193"
      change="+25%"
      color="yellow"
    />
  )
}

export function TicketsCard() {
  return (
    <StatCard
      title="Support Tickets"
      value="58"
      change="-5%"
      color="red"
    />
  )
}

export function RevenueCard() {
  return (
    <StatCard
      title="Monthly Revenue"
      value="$284,500"
      change="+12%"
      color="purple"
    />
  )
}

export function InvestmentsCard() {
  return (
    <StatCard
      title="Active Investments"
      value="156"
      change="+8%"
      color="green"
    />
  )
}

export function PropertiesCard() {
  return (
    <StatCard
      title="Properties"
      value="89"
      change="+3%"
      color="blue"
    />
  )
}

export function ProjectsCard() {
  return (
    <StatCard
      title="Active Projects"
      value="34"
      change="+15%"
      color="purple"
    />
  )
}