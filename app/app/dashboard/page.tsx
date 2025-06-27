'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Users, 
  Settings,
  ArrowRight,
  Activity,
  Brain,
  LogOut,
  User as UserIcon
} from 'lucide-react'
import MainLayout from '@/components/layout/main-layout'
import { useAuth, withAuth } from '@/contexts/auth-context'
import { useState } from 'react'

const featuredDashboards = [
  {
    id: 'anomaly',
    name: 'Cross-System Anomaly Detection',
    description: 'AI correlates patterns across PSA, RMM, network monitoring, and backup systems to detect hidden issues',
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500',
    href: '/app/dashboard/anomaly',
    stats: { detected: 23, prevented: 45, accuracy: 94.2 }
  },
  {
    id: 'arbitrage',
    name: 'AI Revenue Goldmine',
    description: 'Discover hidden revenue opportunities through intelligent data analysis and client behavior patterns',
    icon: DollarSign,
    gradient: 'from-green-500 to-emerald-500',
    href: '/app/dashboard/arbitrage',
    stats: { opportunities: 12, potential: '$127k', roi: 340 }
  },
  {
    id: 'security',
    name: 'Security Threat Landscape',
    description: 'Proactive threat detection and security analytics with real-time risk assessment',
    icon: Shield,
    gradient: 'from-red-500 to-orange-500',
    href: '/app/dashboard/security',
    stats: { threats: 8, blocked: 156, risk: 'Low' }
  }
]

const systemMetrics = [
  { label: 'AI Models Active', value: '12', status: 'optimal' },
  { label: 'Data Streams', value: '47', status: 'optimal' },
  { label: 'Clients Monitored', value: '284', status: 'optimal' },
  { label: 'Anomalies Detected', value: '23', status: 'attention' },
]

function DashboardPage() {
  const { user, logout } = useAuth()
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Custom Header for Dashboard */}
      <header className="glass-strong border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Brain size={20} className="text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold gradient-text">AgenticMSP</h1>
                  <p className="text-xs text-gray-400">Intelligence Dashboard</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right mr-4">
                <p className="text-sm font-medium text-white">{user?.name}</p>
                <p className="text-xs text-gray-400">{user?.company}</p>
              </div>
              
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <UserIcon size={20} className="text-white" />
                </button>
                
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-0 mt-2 w-64 glass-strong rounded-lg p-4 space-y-3"
                  >
                    <div className="pb-3 border-b border-white/10">
                      <p className="text-sm font-medium text-white">{user?.name}</p>
                      <p className="text-xs text-gray-400">{user?.email}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-300">
                          {user?.subscription}
                        </span>
                        <span className="text-xs text-gray-400">
                          {user?.clientCount} clients
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        setShowUserMenu(false)
                        logout()
                      }}
                      className="w-full px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-pulse-glow">
              <Brain size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-text">Welcome back, {user?.name?.split(' ')[0]}!</h1>
              <p className="text-gray-400 text-lg">Your AI agents have been working 24/7</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AgenticMSP multiplies your value by <span className="text-blue-400 font-semibold">10x</span> through autonomous agents 
            that predict, prevent, and profit from opportunities invisible to human perception.
          </p>
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {systemMetrics.map((metric, index) => (
            <div key={metric.label} className="ai-card text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Activity size={16} className={metric.status === 'optimal' ? 'text-green-400' : 'text-yellow-400'} />
                <span className="text-sm text-gray-400">{metric.label}</span>
              </div>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className={`text-xs mt-1 ${metric.status === 'optimal' ? 'text-green-400' : 'text-yellow-400'}`}>
                {metric.status === 'optimal' ? 'Optimal' : 'Needs Attention'}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Featured Dashboards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Your Intelligence Dashboards</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredDashboards.map((dashboard, index) => (
              <motion.a
                key={dashboard.id}
                href={dashboard.href}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="ai-card ai-card-hover group block"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${dashboard.gradient} flex items-center justify-center`}>
                      <dashboard.icon size={24} className="text-white" />
                    </div>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
                      {dashboard.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {dashboard.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
                    {Object.entries(dashboard.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="ai-card"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="glass p-4 rounded-lg hover:bg-white/10 transition-all text-left group">
              <div className="flex items-center space-x-3">
                <TrendingUp size={20} className="text-green-400" />
                <div>
                  <div className="text-white font-medium">Revenue Analysis</div>
                  <div className="text-xs text-gray-400">Check new opportunities</div>
                </div>
              </div>
            </button>
            
            <button className="glass p-4 rounded-lg hover:bg-white/10 transition-all text-left group">
              <div className="flex items-center space-x-3">
                <Shield size={20} className="text-red-400" />
                <div>
                  <div className="text-white font-medium">Security Scan</div>
                  <div className="text-xs text-gray-400">Run threat assessment</div>
                </div>
              </div>
            </button>
            
            <button className="glass p-4 rounded-lg hover:bg-white/10 transition-all text-left group">
              <div className="flex items-center space-x-3">
                <BarChart3 size={20} className="text-blue-400" />
                <div>
                  <div className="text-white font-medium">AI Insights</div>
                  <div className="text-xs text-gray-400">Generate report</div>
                </div>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Recent AI Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="ai-card"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Latest AI Agent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 glass rounded-lg">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 animate-pulse"></div>
              <div>
                <div className="text-white font-medium">Critical Pattern Detected</div>
                <div className="text-sm text-gray-400">Client Acme Corp shows 34% increase in support tickets + backup failures. Predicted churn risk: 78%</div>
                <div className="text-xs text-gray-500 mt-1">2 minutes ago • Anomaly Detection Agent</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 glass rounded-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
              <div>
                <div className="text-white font-medium">Revenue Opportunity</div>
                <div className="text-sm text-gray-400">TechStart Inc is ready for cloud migration upsell. 94% confidence, $45k potential revenue</div>
                <div className="text-xs text-gray-500 mt-1">15 minutes ago • Revenue Discovery Agent</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 glass rounded-lg">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
              <div>
                <div className="text-white font-medium">Security Alert Prevented</div>
                <div className="text-sm text-gray-400">Blocked coordinated phishing campaign targeting 5 clients. Zero impact, all attacks neutralized</div>
                <div className="text-xs text-gray-500 mt-1">32 minutes ago • Security Guardian Agent</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Agents Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="ai-card">
            <h3 className="text-lg font-semibold text-white mb-4">Active AI Agents</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center space-x-3">
                  <Activity size={16} className="text-green-400 animate-pulse" />
                  <span className="text-sm text-white">Pattern Detection Agent</span>
                </div>
                <span className="text-xs text-green-400">Active • 14.7M points analyzed</span>
              </div>
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center space-x-3">
                  <Activity size={16} className="text-green-400 animate-pulse" />
                  <span className="text-sm text-white">Revenue Discovery Agent</span>
                </div>
                <span className="text-xs text-green-400">Active • $2.3M found</span>
              </div>
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center space-x-3">
                  <Activity size={16} className="text-green-400 animate-pulse" />
                  <span className="text-sm text-white">Security Guardian Agent</span>
                </div>
                <span className="text-xs text-green-400">Active • 156 threats blocked</span>
              </div>
            </div>
          </div>

          <div className="ai-card">
            <h3 className="text-lg font-semibold text-white mb-4">Multiplication Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-400">Value Multiplication</span>
                  <span className="text-sm font-bold gradient-text">10.3x</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-400">Knowledge Leverage</span>
                  <span className="text-sm font-bold gradient-text">127x</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-400">Pattern Recognition</span>
                  <span className="text-sm font-bold gradient-text">892x</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default withAuth(DashboardPage)