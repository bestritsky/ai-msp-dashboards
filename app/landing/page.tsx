'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  DollarSign, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Globe,
  Activity,
  Lock
} from 'lucide-react'
import AuthModal from '@/components/auth/auth-modal'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'

const valueMetrics = [
  { label: '10x', sublabel: 'Value Multiplication', icon: TrendingUp },
  { label: '100x', sublabel: 'Knowledge Leverage', icon: Brain },
  { label: '1000x', sublabel: 'Pattern Recognition', icon: Zap },
  { label: '∞', sublabel: 'Learning Acceleration', icon: Sparkles }
]

const dashboardPreviews = [
  {
    title: 'Cross-System Anomaly Detection',
    description: 'AI correlates patterns across 12+ systems to prevent catastrophic failures',
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500',
    stats: ['94.2% Accuracy', '47 Zero-Days Prevented', '$124M Saved']
  },
  {
    title: 'AI Revenue Goldmine',
    description: 'Discover $50k-125k opportunities hidden in usage patterns',
    icon: DollarSign,
    gradient: 'from-green-500 to-emerald-500',
    stats: ['340% ROI', '$2.3M Found', '89% Close Rate']
  },
  {
    title: 'Security Threat Landscape',
    description: 'Predictive threat detection with behavioral analysis',
    icon: Shield,
    gradient: 'from-red-500 to-orange-500',
    stats: ['91% Prevention', '234% Faster', 'Zero Breaches']
  }
]

const testimonials = [
  {
    quote: "AgenticMSP discovered $2.3M in hidden revenue opportunities we never knew existed. The AI agents work 24/7 finding patterns we'd never see.",
    author: "Sarah Mitchell",
    role: "CEO, TechStart MSP",
    metric: "340% Revenue Increase"
  },
  {
    quote: "We prevented 47 zero-day attacks and reduced incident response time by 67%. Our clients think we're wizards.",
    author: "Marcus Chen",
    role: "CTO, SecureNet MSP",
    metric: "91% Incident Prevention"
  },
  {
    quote: "The collective intelligence is game-changing. Every MSP's experience teaches our AI agents, multiplying our capabilities exponentially.",
    author: "Emily Rodriguez",
    role: "Operations Director, Global MSP",
    metric: "10x Efficiency Gain"
  }
]

export default function LandingPage() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  const handleAuthClick = (mode: 'login' | 'signup') => {
    if (isAuthenticated) {
      router.push('/app/dashboard')
    } else {
      setAuthMode(mode)
      setShowAuthModal(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="glass-strong border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Brain size={20} className="text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold gradient-text">AgenticMSP</h1>
                  <p className="text-xs text-gray-400">Multiply Your Value by 10x</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center space-x-6">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#dashboards" className="text-gray-300 hover:text-white transition-colors">Dashboards</a>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Success Stories</a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleAuthClick('login')}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => handleAuthClick('signup')}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Multiply Your MSP Value</span>
              <br />
              <span className="text-white">by 10x with Agentic AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your collective knowledge into autonomous AI agents that predict, prevent, 
              and profit from opportunities invisible to human perception.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleAuthClick('signup')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 glass border border-white/20 rounded-lg font-medium text-lg hover:bg-white/10 transition-all duration-200">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Value Metrics */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {valueMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="ai-card text-center group"
              >
                <metric.icon size={32} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold gradient-text mb-2">{metric.label}</div>
                <div className="text-gray-400">{metric.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Agent Demo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Agents Working <span className="gradient-text">24/7 For You</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch our autonomous agents discover opportunities, prevent problems, 
              and multiply your value in real-time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="ai-card space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Pattern Detection Agent</h3>
                <Activity size={20} className="text-green-400 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">Analyzing 14.7M data points...</div>
                <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30">
                  <p className="text-sm text-green-300">
                    🎯 Critical pattern detected: Backup failures correlating with network latency across 8 clients
                  </p>
                </div>
                <div className="text-xs text-gray-500">Confidence: 94.2% | Impact: $85,000</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="ai-card space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Revenue Discovery Agent</h3>
                <DollarSign size={20} className="text-yellow-400 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">Scanning for opportunities...</div>
                <div className="bg-yellow-500/20 p-3 rounded-lg border border-yellow-500/30">
                  <p className="text-sm text-yellow-300">
                    💰 Opportunity found: TechStart Inc ready for cloud migration. $45k potential
                  </p>
                </div>
                <div className="text-xs text-gray-500">Probability: 89% | Timeline: 30 days</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="ai-card space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Security Guardian Agent</h3>
                <Shield size={20} className="text-red-400 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">Monitoring threat landscape...</div>
                <div className="bg-red-500/20 p-3 rounded-lg border border-red-500/30">
                  <p className="text-sm text-red-300">
                    🛡️ Threat prevented: Coordinated phishing campaign targeting 5 clients blocked
                  </p>
                </div>
                <div className="text-xs text-gray-500">Attacks blocked: 156 | Saved: $124k</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Previews */}
      <section id="dashboards" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Nine Dashboards of <span className="gradient-text">Pure Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each dashboard multiplies your capabilities, turning data into decisions, 
              patterns into profits, and insights into impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dashboardPreviews.map((dashboard, index) => (
              <motion.div
                key={dashboard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="ai-card group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundImage: `linear-gradient(135deg, ${dashboard.gradient})` }}
                />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${dashboard.gradient} flex items-center justify-center`}>
                      <dashboard.icon size={24} className="text-white" />
                    </div>
                    <Lock size={16} className="text-gray-500" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{dashboard.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{dashboard.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {dashboard.stats.map((stat) => (
                      <span key={stat} className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300">
                        {stat}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="w-full py-2 glass border border-white/20 rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2 group"
                  >
                    <span>Unlock Dashboard</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">Plus 6 more specialized dashboards...</p>
            <button
              onClick={() => handleAuthClick('signup')}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              View All Dashboards →
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              MSPs <span className="gradient-text">Multiplying Their Value</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of MSPs who've transformed their business with AgenticMSP
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="ai-card space-y-4"
              >
                <div className="text-3xl font-bold gradient-text">{testimonial.metric}</div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to <span className="gradient-text">Multiply Your Value?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the MSPs who are already 10x more valuable, 100x more capable, 
              and infinitely more essential to their clients.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleAuthClick('signup')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Start Your 14-Day Free Trial</span>
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 glass border border-white/20 rounded-lg font-medium text-lg hover:bg-white/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>

            <p className="text-sm text-gray-400">
              No credit card required • Setup in 5 minutes • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Brain size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold gradient-text">AgenticMSP</h3>
                <p className="text-xs text-gray-400">Multiply or Be Divided</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => {
          setShowAuthModal(false)
          // Check if user is now authenticated and redirect
          if (isAuthenticated) {
            router.push('/app/dashboard')
          }
        }}
        mode={authMode}
      />
    </div>
  )
}