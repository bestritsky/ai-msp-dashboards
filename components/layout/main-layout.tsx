'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BarChart3, 
  Shield, 
  DollarSign, 
  Zap, 
  Users, 
  TrendingUp,
  Settings,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react'
import { Dashboard } from '@/lib/types/dashboard'

const dashboards: Dashboard[] = [
  {
    id: 'anomaly',
    name: 'Anomaly Detection',
    description: 'AI-powered cross-system anomaly correlation',
    icon: 'Zap',
    route: '/dashboards/anomaly',
    category: 'intelligence',
    priority: 'critical'
  },
  {
    id: 'arbitrage',
    name: 'Revenue Goldmine',
    description: 'Hidden revenue opportunities and arbitrage',
    icon: 'DollarSign',
    route: '/dashboards/arbitrage',
    category: 'revenue',
    priority: 'high'
  },
  {
    id: 'revenue',
    name: 'Revenue Detector',
    description: 'Untapped revenue streams and client expansion',
    icon: 'TrendingUp',
    route: '/dashboards/revenue',
    category: 'revenue',
    priority: 'high'
  },
  {
    id: 'intelligence',
    name: 'AI Intelligence Center',
    description: 'Unified strategic intelligence and insights',
    icon: 'BarChart3',
    route: '/dashboards/intelligence',
    category: 'intelligence',
    priority: 'high'
  },
  {
    id: 'security',
    name: 'Security Landscape',
    description: 'Threat detection and security analytics',
    icon: 'Shield',
    route: '/dashboards/security',
    category: 'security',
    priority: 'critical'
  },
  {
    id: 'sales',
    name: 'Sales & Marketing',
    description: 'Pipeline analytics and campaign performance',
    icon: 'TrendingUp',
    route: '/dashboards/sales',
    category: 'marketing',
    priority: 'medium'
  },
  {
    id: 'competitive',
    name: 'Competitive Intel',
    description: 'Market positioning and competitor analysis',
    icon: 'BarChart3',
    route: '/dashboards/competitive',
    category: 'intelligence',
    priority: 'medium'
  },
  {
    id: 'social',
    name: 'Social Intelligence',
    description: 'Client and competitor social media tracking',
    icon: 'Users',
    route: '/dashboards/social',
    category: 'marketing',
    priority: 'medium'
  },
  {
    id: 'operational',
    name: 'Operational Excellence',
    description: 'Efficiency metrics and optimization insights',
    icon: 'Settings',
    route: '/dashboards/operational',
    category: 'operations',
    priority: 'medium'
  }
]

const iconMap = {
  Zap,
  DollarSign,
  TrendingUp,
  BarChart3,
  Shield,
  Users,
  Settings
}

interface MainLayoutProps {
  children: React.ReactNode
  currentDashboard?: string
}

export default function MainLayout({ children, currentDashboard }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDashboards = dashboards.filter(dashboard =>
    dashboard.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dashboard.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-400'
      case 'high': return 'text-yellow-400'
      case 'medium': return 'text-blue-400'
      case 'low': return 'text-gray-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="glass-strong border-b border-white/10 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">AI MSP Intelligence</h1>
                <p className="text-xs text-gray-400">Multi-Stream Analytics Platform</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search dashboards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors relative">
              <Bell size={20} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse-glow"></div>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ x: -320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-80 glass border-r border-white/10 min-h-[calc(100vh-80px)] p-6 overflow-y-auto"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-4 text-gray-200">AI Dashboards</h2>
                  <div className="space-y-2">
                    {filteredDashboards.map((dashboard) => {
                      const IconComponent = iconMap[dashboard.icon as keyof typeof iconMap]
                      const isActive = currentDashboard === dashboard.id
                      
                      return (
                        <motion.a
                          key={dashboard.id}
                          href={dashboard.route}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className={`
                            block p-4 rounded-lg transition-all duration-200 group
                            ${isActive ? 'nav-item-active' : 'nav-item ai-card-hover'}
                          `}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 ${getPriorityColor(dashboard.priority)}`}>
                              <IconComponent size={18} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-white group-hover:text-blue-200 transition-colors">
                                {dashboard.name}
                              </h3>
                              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                                {dashboard.description}
                              </p>
                              <div className="flex items-center space-x-2 mt-2">
                                <span className={`text-xs px-2 py-1 rounded-full bg-white/10 ${getPriorityColor(dashboard.priority)}`}>
                                  {dashboard.priority}
                                </span>
                                <span className="text-xs text-gray-500 capitalize">
                                  {dashboard.category}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.a>
                      )
                    })}
                  </div>
                </div>

                {/* System Status */}
                <div className="ai-card">
                  <h3 className="text-sm font-medium text-gray-200 mb-3">System Status</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">AI Models</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">Active</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Data Streams</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">12/12</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Last Update</span>
                      <span className="text-xs text-gray-300">2s ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-0' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  )
}