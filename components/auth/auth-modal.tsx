'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Lock, User, Building, Eye, EyeOff, Github, Chrome } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  mode?: 'login' | 'signup'
}

export default function AuthModal({ isOpen, onClose, mode = 'login' }: AuthModalProps) {
  const [authMode, setAuthMode] = useState(mode)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [company, setCompany] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login, signup } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (authMode === 'login') {
        await login(email, password)
      } else {
        await signup(email, password, company)
      }
      onClose()
    } catch (error) {
      console.error('Auth error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider: string) => {
    // For demo, just use the provider as part of the email
    setEmail(`demo@${provider.toLowerCase()}.com`)
    setPassword('demo123')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="glass-strong rounded-2xl p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold gradient-text">
                  {authMode === 'login' ? 'Welcome Back' : 'Get Started'}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Demo Hint */}
              <div className="mb-6 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-xs text-blue-300">
                  🎯 Demo Mode: Use any email/password to explore the platform
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {authMode === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                        placeholder="TechStart MSP"
                        required={authMode === 'signup'}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      placeholder="sarah@techstartmsp.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {authMode === 'login' && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 bg-white/10 border border-white/20 rounded focus:ring-2 focus:ring-blue-500/50"
                      />
                      <span className="text-sm text-gray-300">Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Authenticating...</span>
                    </div>
                  ) : (
                    authMode === 'login' ? 'Sign In' : 'Create Account'
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-white/20"></div>
                <span className="px-4 text-sm text-gray-400">or continue with</span>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleSocialLogin('Google')}
                  className="p-3 glass rounded-lg hover:bg-white/10 transition-all group"
                >
                  <Chrome size={20} className="mx-auto text-gray-400 group-hover:text-white transition-colors" />
                </button>
                <button
                  onClick={() => handleSocialLogin('GitHub')}
                  className="p-3 glass rounded-lg hover:bg-white/10 transition-all group"
                >
                  <Github size={20} className="mx-auto text-gray-400 group-hover:text-white transition-colors" />
                </button>
                <button
                  onClick={() => handleSocialLogin('Microsoft')}
                  className="p-3 glass rounded-lg hover:bg-white/10 transition-all group"
                >
                  <svg className="w-5 h-5 mx-auto text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/>
                  </svg>
                </button>
              </div>

              {/* Mode Switch */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  {authMode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                  {' '}
                  <button
                    type="button"
                    onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    {authMode === 'login' ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}