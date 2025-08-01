'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Home, 
  Building2, 
  BarChart3, 
  Settings, 
  User,
  LogOut,
  Plus,
  Package,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useUIStore, useAuthStore } from '@/store';
import { businesses } from '@/data/businesses';

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  category: string;
}

export function CommandPalette() {
  const router = useRouter();
  const { commandPaletteOpen, setCommandPaletteOpen } = useUIStore();
  const { logout } = useAuthStore();
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'home',
      title: 'Go to Home',
      subtitle: 'Navigate to the main page',
      icon: Home,
      action: () => router.push('/'),
      category: 'Navigation',
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      subtitle: 'View your main dashboard',
      icon: BarChart3,
      action: () => router.push('/dashboard'),
      category: 'Navigation',
    },
    {
      id: 'businesses',
      title: 'All Businesses',
      subtitle: 'View all Sadat Group businesses',
      icon: Building2,
      action: () => router.push('/businesses'),
      category: 'Navigation',
    },
    
    // Business-specific commands
    ...businesses.map((business) => ({
      id: `business-${business.id}`,
      title: business.name,
      subtitle: business.description,
      icon: Building2,
      action: () => router.push(`/businesses/${business.id}`),
      category: 'Businesses',
    })),
    
    // Dashboard commands
    ...businesses.map((business) => ({
      id: `dashboard-${business.id}`,
      title: `${business.name} Dashboard`,
      subtitle: `Manage ${business.name}`,
      icon: BarChart3,
      action: () => router.push(`/dashboard/${business.id}`),
      category: 'Dashboards',
    })),
    
    // Actions
    {
      id: 'new-order',
      title: 'Create New Order',
      subtitle: 'Start a new order',
      icon: Plus,
      action: () => {
        // TODO: Open order creation modal
        console.log('Create new order');
      },
      category: 'Actions',
    },
    {
      id: 'new-product',
      title: 'Add New Product',
      subtitle: 'Create a new product',
      icon: Package,
      action: () => {
        // TODO: Open product creation modal
        console.log('Add new product');
      },
      category: 'Actions',
    },
    {
      id: 'new-service',
      title: 'Add New Service',
      subtitle: 'Create a new service',
      icon: Clock,
      action: () => {
        // TODO: Open service creation modal
        console.log('Add new service');
      },
      category: 'Actions',
    },
    
    // Settings
    {
      id: 'profile',
      title: 'Profile Settings',
      subtitle: 'Manage your account',
      icon: User,
      action: () => router.push('/profile'),
      category: 'Settings',
    },
    {
      id: 'settings',
      title: 'Application Settings',
      subtitle: 'Configure application preferences',
      icon: Settings,
      action: () => router.push('/settings'),
      category: 'Settings',
    },
    {
      id: 'logout',
      title: 'Logout',
      subtitle: 'Sign out of your account',
      icon: LogOut,
      action: () => {
        logout();
        setCommandPaletteOpen(false);
        router.push('/login');
      },
      category: 'Account',
    },
  ];

  const filteredCommands = commands.filter((command) =>
    command.title.toLowerCase().includes(search.toLowerCase()) ||
    command.subtitle?.toLowerCase().includes(search.toLowerCase()) ||
    command.category.toLowerCase().includes(search.toLowerCase())
  );

  const categories = Array.from(new Set(filteredCommands.map((cmd) => cmd.category)));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      }
      
      if (commandPaletteOpen) {
        if (e.key === 'Escape') {
          setCommandPaletteOpen(false);
        }
        
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
        }
        
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
        }
        
        if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
          e.preventDefault();
          filteredCommands[selectedIndex].action();
          setCommandPaletteOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, filteredCommands, selectedIndex, setCommandPaletteOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  if (!commandPaletteOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-start justify-center p-4 pt-16">
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
        
        <div className="relative w-full max-w-2xl transform rounded-lg bg-white shadow-xl transition-all">
          <div className="flex items-center border-b border-gray-200 px-4 py-3">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search commands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-3 flex-1 border-none outline-none text-gray-900 placeholder-gray-500"
              autoFocus
            />
            <div className="ml-4 flex items-center space-x-2 text-xs text-gray-500">
              <kbd className="rounded bg-gray-100 px-2 py-1">⌘K</kbd>
              <span>to close</span>
            </div>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {filteredCommands.length === 0 ? (
                             <div className="px-4 py-8 text-center text-gray-500">
                 No commands found for &quot;{search}&quot;
               </div>
            ) : (
              <div className="py-2">
                {categories.map((category) => (
                  <div key={category}>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {category}
                    </div>
                                         {filteredCommands
                       .filter((cmd) => cmd.category === category)
                       .map((command) => {
                        const globalIndex = filteredCommands.findIndex((cmd) => cmd.id === command.id);
                        const isSelected = globalIndex === selectedIndex;
                        
                        return (
                          <button
                            key={command.id}
                            onClick={() => {
                              command.action();
                              setCommandPaletteOpen(false);
                            }}
                            className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 ${
                              isSelected ? 'bg-blue-50 text-blue-900' : 'text-gray-900'
                            }`}
                          >
                            <command.icon className="h-5 w-5 text-gray-400" />
                            <div className="ml-3 flex-1">
                              <div className="text-sm font-medium">{command.title}</div>
                              {command.subtitle && (
                                <div className="text-xs text-gray-500">{command.subtitle}</div>
                              )}
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                          </button>
                        );
                      })}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}