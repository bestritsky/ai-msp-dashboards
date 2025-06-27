'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  name: string
  email: string
  company: string
  role: string
  avatar: string
  subscription: 'Free' | 'Professional' | 'Enterprise'
  clientCount: number
  aiAgentsActive: number
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  signup: (email: string, password: string, company: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Demo user for fake authentication
const DEMO_USER: User = {
  id: 'demo-001',
  name: 'Sarah Mitchell',
  email: 'sarah@techstartmsp.com',
  company: 'TechStart MSP',
  role: 'Operations Director',
  avatar: '/avatars/sarah.jpg',
  subscription: 'Enterprise',
  clientCount: 284,
  aiAgentsActive: 12
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('agenticmsp_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Accept any email/password for demo
    const fakeUser = {
      ...DEMO_USER,
      email: email,
      name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      company: email.split('@')[1]?.split('.')[0].toUpperCase() + ' MSP' || 'Demo MSP'
    }
    
    localStorage.setItem('agenticmsp_user', JSON.stringify(fakeUser))
    setUser(fakeUser)
    setIsLoading(false)
    
    // Redirect to dashboard
    router.push('/app/dashboard')
  }

  const logout = () => {
    localStorage.removeItem('agenticmsp_user')
    setUser(null)
    router.push('/')
  }

  const signup = async (email: string, password: string, company: string) => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const newUser = {
      ...DEMO_USER,
      id: `user-${Date.now()}`,
      email,
      name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      company,
      subscription: 'Free' as const,
      clientCount: 0,
      aiAgentsActive: 1
    }
    
    localStorage.setItem('agenticmsp_user', JSON.stringify(newUser))
    setUser(newUser)
    setIsLoading(false)
    
    router.push('/app/dashboard')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        signup
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// HOC for protected routes
export function withAuth<P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P> {
  return function AuthenticatedComponent(props: P) {
    const { isAuthenticated, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        router.push('/landing')
      }
    }, [isAuthenticated, isLoading, router])

    if (isLoading) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading...</p>
          </div>
        </div>
      )
    }

    if (!isAuthenticated) {
      return null
    }

    return <Component {...props} />
  }
}