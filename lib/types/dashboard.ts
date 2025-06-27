// Dashboard Types
export interface Dashboard {
  id: string
  name: string
  description: string
  icon: string
  route: string
  category: 'intelligence' | 'revenue' | 'security' | 'operations' | 'marketing'
  priority: 'critical' | 'high' | 'medium' | 'low'
}

// Anomaly Detection Types
export interface AnomalyDetection {
  id: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  confidence: number
  title: string
  description: string
  correlatedSystems: string[]
  dataPoints: number
  timeWindow: string
  predictedImpact: string
  recommendedAction: string
  rootCause: string
  affectedClients: number
  estimatedCost: number
  aiReasoning: string[]
  timestamp: Date
  status: 'active' | 'investigating' | 'resolved'
}

// Revenue Opportunity Types
export interface RevenueOpportunity {
  id: string
  type: 'upsell' | 'cross-sell' | 'new-service' | 'optimization' | 'retention'
  clientId: string
  clientName: string
  opportunity: string
  potentialRevenue: number
  probability: number
  timeframe: string
  requirements: string[]
  riskFactors: string[]
  implementationCost: number
  roi: number
  aiInsights: string[]
  status: 'identified' | 'qualified' | 'proposed' | 'won' | 'lost'
  urgency: 'immediate' | 'this-quarter' | 'next-quarter' | 'future'
}

// Threat Intelligence Types
export interface ThreatIntelligence {
  id: string
  threatType: 'malware' | 'phishing' | 'ransomware' | 'vulnerability' | 'breach' | 'insider'
  severity: 'critical' | 'high' | 'medium' | 'low'
  title: string
  description: string
  affectedSystems: string[]
  affectedClients: string[]
  detectionMethod: string
  confidence: number
  mitigationSteps: string[]
  estimatedImpact: string
  timeToResolve: string
  status: 'detected' | 'contained' | 'investigating' | 'resolved'
  timestamp: Date
}

// Client Intelligence Types
export interface ClientIntelligence {
  id: string
  name: string
  healthScore: number
  tier: 'enterprise' | 'mid-market' | 'small-business'
  monthlyRevenue: number
  contractExpiry: Date
  riskLevel: 'low' | 'medium' | 'high' | 'critical'
  satisfaction: number
  ticketTrend: 'improving' | 'stable' | 'declining'
  usagePatterns: {
    service: string
    utilization: number
    trend: 'increasing' | 'stable' | 'decreasing'
  }[]
  upcomingRenewals: {
    service: string
    value: number
    probability: number
    date: Date
  }[]
  expansionOpportunities: RevenueOpportunity[]
  recentInteractions: {
    type: 'support' | 'sales' | 'success'
    date: Date
    outcome: string
    sentiment: 'positive' | 'neutral' | 'negative'
  }[]
}

// Metrics Types
export interface MetricCard {
  id: string
  title: string
  value: string | number
  change: number
  changeType: 'increase' | 'decrease'
  trend: 'positive' | 'negative' | 'neutral'
  icon: string
  description: string
  chartData?: ChartDataPoint[]
}

export interface ChartDataPoint {
  name: string
  value: number
  date?: string
  category?: string
}

// Alert Types
export interface Alert {
  id: string
  type: 'anomaly' | 'revenue' | 'security' | 'operational' | 'client'
  severity: 'critical' | 'high' | 'medium' | 'low'
  title: string
  message: string
  timestamp: Date
  acknowledged: boolean
  assignedTo?: string
  relatedEntity: string
  actionUrl?: string
  proactiveMessage?: string // For Simli avatar
}

// Social Media Types
export interface SocialMediaPost {
  id: string
  platform: 'twitter' | 'linkedin' | 'facebook' | 'instagram' | 'news'
  author: string
  content: string
  timestamp: Date
  engagement: {
    likes: number
    shares: number
    comments: number
    reach: number
  }
  sentiment: 'positive' | 'neutral' | 'negative'
  topics: string[]
  isCompetitor: boolean
  relevanceScore: number
  actionRequired: boolean
}

// Operational Metrics Types
export interface OperationalMetric {
  id: string
  category: 'efficiency' | 'quality' | 'cost' | 'productivity'
  name: string
  currentValue: number
  targetValue: number
  unit: string
  trend: ChartDataPoint[]
  threshold: {
    warning: number
    critical: number
  }
  lastUpdated: Date
  description: string
}

// Competitive Intelligence Types
export interface CompetitorIntelligence {
  id: string
  competitorName: string
  marketShare: number
  pricing: {
    service: string
    price: number
    comparison: 'higher' | 'lower' | 'similar'
  }[]
  strengths: string[]
  weaknesses: string[]
  recentNews: {
    title: string
    date: Date
    impact: 'positive' | 'negative' | 'neutral'
    summary: string
  }[]
  clientDefections: {
    clientName: string
    reason: string
    revenue: number
    date: Date
  }[]
  winRates: {
    service: string
    rate: number
    trend: 'improving' | 'stable' | 'declining'
  }[]
}

// Simli Avatar Types
export interface AvatarAlert {
  id: string
  triggeredBy: Alert
  message: string
  urgency: 'immediate' | 'high' | 'medium' | 'low'
  suggestedActions: string[]
  contextData: Record<string, any>
  shouldPopup: boolean
}

// Dashboard State Types
export interface DashboardState {
  currentDashboard: string
  alerts: Alert[]
  metrics: MetricCard[]
  lastUpdated: Date
  refreshInterval: number
  filters: {
    timeRange: '1h' | '24h' | '7d' | '30d' | '90d'
    severity: ('critical' | 'high' | 'medium' | 'low')[]
    clients?: string[]
    services?: string[]
  }
}

// Export collections
export const DASHBOARD_CATEGORIES = [
  'intelligence',
  'revenue', 
  'security',
  'operations',
  'marketing'
] as const

export const SEVERITY_LEVELS = [
  'critical',
  'high', 
  'medium',
  'low'
] as const

export const ALERT_TYPES = [
  'anomaly',
  'revenue',
  'security', 
  'operational',
  'client'
] as const