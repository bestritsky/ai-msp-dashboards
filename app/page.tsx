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
  Brain
} from 'lucide-react'
import MainLayout from '@/components/layout/main-layout'

const featuredDashboards = [
  {
    id: 'anomaly',
    name: 'Cross-System Anomaly Detection',
    description: 'AI correlates patterns across PSA, RMM, network monitoring, and backup systems to detect hidden issues',
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500',
    href: '/dashboards/anomaly',
    stats: { detected: 23, prevented: 45, accuracy: 94.2 }
  },
  {
    id: 'arbitrage',
    name: 'AI Revenue Goldmine',
    description: 'Discover hidden revenue opportunities through intelligent data analysis and client behavior patterns',
    icon: DollarSign,
    gradient: 'from-green-500 to-emerald-500',
    href: '/dashboards/arbitrage',
    stats: { opportunities: 12, potential: '$127k', roi: 340 }
  },
  {
    id: 'security',
    name: 'Security Threat Landscape',
    description: 'Proactive threat detection and security analytics with real-time risk assessment',
    icon: Shield,
    gradient: 'from-red-500 to-orange-500',
    href: '/dashboards/security',
    stats: { threats: 8, blocked: 156, risk: 'Low' }
  }
]

const systemMetrics = [
  { label: 'AI Models Active', value: '12', status: 'optimal' },
  { label: 'Data Streams', value: '47', status: 'optimal' },
  { label: 'Clients Monitored', value: '284', status: 'optimal' },
  { label: 'Anomalies Detected', value: '23', status: 'attention' },
]

export default function HomePage() {
  return (
    <MainLayout>
      <div className="p-8 space-y-8">
        {/* Hero Section */}
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
              <h1 className="text-4xl font-bold gradient-text">AI MSP Intelligence Platform</h1>
              <p className="text-gray-400 text-lg">Multi-Stream Analytics • Real-Time Insights • Proactive Intelligence</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The only platform that correlates data across <span className="text-blue-400 font-semibold">12+ systems</span> to detect patterns 
            invisible to traditional monitoring. AI that actually thinks, not just alerts.
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
          <h2 className="text-2xl font-bold text-white mb-6">Critical Intelligence Dashboards</h2>
          
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
          <h3 className="text-lg font-semibold text-white mb-4">Latest AI Insights</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 glass rounded-lg">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 animate-pulse"></div>
              <div>
                <div className="text-white font-medium">Critical Pattern Detected</div>
                <div className="text-sm text-gray-400">Client Acme Corp shows 34% increase in support tickets + backup failures. Predicted churn risk: 78%</div>
                <div className="text-xs text-gray-500 mt-1">2 minutes ago</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 glass rounded-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
              <div>
                <div className="text-white font-medium">Revenue Opportunity</div>
                <div className="text-sm text-gray-400">TechStart Inc is ready for cloud migration upsell. 94% confidence, $45k potential revenue</div>
                <div className="text-xs text-gray-500 mt-1">15 minutes ago</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 glass rounded-lg">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
              <div>
                <div className="text-white font-medium">Anomaly Correlation</div>
                <div className="text-sm text-gray-400">Network latency + backup delays + PSA ticket surge detected across 5 clients. Investigating ISP issue</div>
                <div className="text-xs text-gray-500 mt-1">32 minutes ago</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
}