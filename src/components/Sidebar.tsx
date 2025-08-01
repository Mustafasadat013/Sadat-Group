import { Home, Users, Folder, MessageSquare, Building, TrendingUp, FileText, Settings, LogOut } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-6 flex flex-col border-r border-gray-700">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Building className="w-5 h-5 text-white" />
        </div>
        <div className="text-xl font-bold text-white">Sadat Group</div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2">
        <SidebarLink icon={<Home />} label="Dashboard" active={true} />
        <SidebarLink icon={<Users />} label="Clients" />
        <SidebarLink icon={<Folder />} label="Projects" />
        <SidebarLink icon={<TrendingUp />} label="Investments" />
        <SidebarLink icon={<Building />} label="Properties" />
        <SidebarLink icon={<FileText />} label="Reports" />
        <SidebarLink icon={<MessageSquare />} label="Messages" />
      </nav>

      {/* Settings Section */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <SidebarLink icon={<Settings />} label="Settings" />
      </div>

      {/* Footer */}
      <div className="mt-auto pt-8 border-t border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-white">SS</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Sayed Mustafa Sadat</p>
            <p className="text-xs text-gray-400">Owner</p>
          </div>
        </div>
        <SidebarLink icon={<LogOut />} label="Logout" />
        <p className="text-xs text-gray-500 mt-4">© 2025 Sadat Group</p>
      </div>
    </aside>
  )
}

interface SidebarLinkProps {
  icon: React.ReactNode
  label: string
  active?: boolean
}

function SidebarLink({ icon, label, active = false }: SidebarLinkProps) {
  return (
    <button 
      className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg transition-colors ${
        active 
          ? 'bg-blue-600 text-white' 
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      <span className="w-5 h-5">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  )
}