import { AnomalyDetection, ChartDataPoint } from '@/lib/types/dashboard'

// System types for correlation analysis
export const SYSTEM_TYPES = [
  'PSA', 'RMM', 'Network Monitoring', 'Backup Systems', 'Email Security',
  'Firewall', 'Antivirus', 'Cloud Storage', 'VoIP Systems', 'Database',
  'Active Directory', 'DNS Servers'
] as const

// Client names for realistic data
const CLIENT_NAMES = [
  'Acme Corporation', 'TechStart Inc', 'Global Dynamics', 'Innovate Solutions',
  'Digital Works', 'Metro Systems', 'Elite Consulting', 'Prime Technologies',
  'Synergy Group', 'Nexus Enterprises', 'Quantum Labs', 'Fusion Partners'
]

// Generate realistic anomaly data
export function generateAnomalyDetections(): AnomalyDetection[] {
  const anomalies: AnomalyDetection[] = []
  
  // Critical anomalies - high impact, multi-system correlations
  anomalies.push({
    id: 'anom-001',
    severity: 'critical',
    confidence: 94.2,
    title: 'Cross-Client Backup Failure Cascade',
    description: 'AI detected coordinated backup failures across 8 clients coinciding with network latency spikes and PSA ticket surge',
    correlatedSystems: ['Backup Systems', 'Network Monitoring', 'PSA', 'RMM'],
    dataPoints: 1247,
    timeWindow: '72 hours',
    predictedImpact: 'Client data at risk, potential churn risk 78% for affected clients',
    recommendedAction: 'Immediate infrastructure investigation, client communication protocol',
    rootCause: 'ISP infrastructure degradation affecting backup replication',
    affectedClients: 8,
    estimatedCost: 85000,
    aiReasoning: [
      'Backup failure pattern correlates with network latency increase of 340%',
      'PSA ticket volume increased 67% for affected clients in same timeframe',
      'RMM monitoring shows consistent storage connectivity issues',
      'Geolocation analysis indicates ISP infrastructure as common dependency'
    ],
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    status: 'active'
  })

  anomalies.push({
    id: 'anom-002',
    severity: 'high',
    confidence: 89.7,
    title: 'Security Event Clustering Pattern',
    description: 'Unusual correlation between email security alerts and failed login attempts across multiple client domains',
    correlatedSystems: ['Email Security', 'Active Directory', 'Firewall', 'Antivirus'],
    dataPoints: 856,
    timeWindow: '24 hours',
    predictedImpact: 'Potential coordinated attack, 34% chance of successful breach',
    recommendedAction: 'Enhanced monitoring, client security briefing, MFA enforcement',
    rootCause: 'Sophisticated phishing campaign targeting client domains',
    affectedClients: 5,
    estimatedCost: 45000,
    aiReasoning: [
      'Email security alerts increased 234% for affected domains',
      'Failed login attempts show geographic clustering',
      'Firewall logs indicate reconnaissance activity patterns',
      'Antivirus detections correlate with email delivery timestamps'
    ],
    timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
    status: 'investigating'
  })

  anomalies.push({
    id: 'anom-003',
    severity: 'high',
    confidence: 91.3,
    title: 'Resource Exhaustion Prediction',
    description: 'AI predicts server capacity issues for 3 clients based on usage trend analysis and historical patterns',
    correlatedSystems: ['RMM', 'Network Monitoring', 'Database', 'Cloud Storage'],
    dataPoints: 2341,
    timeWindow: '14 days',
    predictedImpact: 'Performance degradation expected within 5-7 days',
    recommendedAction: 'Proactive capacity planning, hardware upgrade proposals',
    rootCause: 'Accelerating data growth exceeding projected capacity models',
    affectedClients: 3,
    estimatedCost: 25000,
    aiReasoning: [
      'Database growth rate increased 45% above projected models',
      'Network bandwidth utilization trending toward saturation',
      'RMM disk space alerts showing accelerating consumption',
      'Cloud storage costs indicate unexpected data volume increases'
    ],
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    status: 'active'
  })

  // Medium severity anomalies
  anomalies.push({
    id: 'anom-004',
    severity: 'medium',
    confidence: 76.8,
    title: 'VoIP Quality Degradation Correlation',
    description: 'Voice quality metrics declining in correlation with specific network switching events',
    correlatedSystems: ['VoIP Systems', 'Network Monitoring', 'PSA'],
    dataPoints: 432,
    timeWindow: '48 hours',
    predictedImpact: 'User satisfaction decline, potential service complaints',
    recommendedAction: 'Network path analysis, QoS configuration review',
    rootCause: 'Network switch firmware causing intermittent packet loss',
    affectedClients: 2,
    estimatedCost: 8000,
    aiReasoning: [
      'Voice quality scores dropped 23% during network events',
      'Packet loss correlation with specific switch MAC addresses',
      'PSA tickets mention call quality issues in affected timeframes'
    ],
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    status: 'investigating'
  })

  anomalies.push({
    id: 'anom-005',
    severity: 'medium',
    confidence: 82.1,
    title: 'DNS Resolution Anomaly Cluster',
    description: 'Unusual DNS query patterns suggesting potential DNS poisoning or configuration drift',
    correlatedSystems: ['DNS Servers', 'Network Monitoring', 'Firewall'],
    dataPoints: 1089,
    timeWindow: '12 hours',
    predictedImpact: 'Potential service disruption, security vulnerability',
    recommendedAction: 'DNS configuration audit, security verification',
    rootCause: 'Misconfigured DNS forwarder causing query loops',
    affectedClients: 4,
    estimatedCost: 12000,
    aiReasoning: [
      'DNS query volume increased 156% for specific domains',
      'Response time variance indicates configuration issues',
      'Firewall logs show unexpected DNS traffic patterns'
    ],
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    status: 'resolved'
  })

  return anomalies
}

// Generate correlation matrix data
export function generateCorrelationMatrix(): { 
  systems: string[], 
  correlations: number[][] 
} {
  const systems = SYSTEM_TYPES.slice(0, 8) // Use first 8 for visualization
  const correlations: number[][] = []
  
  for (let i = 0; i < systems.length; i++) {
    correlations[i] = []
    for (let j = 0; j < systems.length; j++) {
      if (i === j) {
        correlations[i][j] = 1.0 // Perfect self-correlation
      } else {
        // Generate realistic correlation values
        correlations[i][j] = Math.random() * 0.8 + 0.1 // 0.1 to 0.9
        
        // Add some stronger correlations for related systems
        if ((systems[i] === 'PSA' && systems[j] === 'RMM') ||
            (systems[i] === 'Network Monitoring' && systems[j] === 'Firewall') ||
            (systems[i] === 'Email Security' && systems[j] === 'Antivirus')) {
          correlations[i][j] = Math.random() * 0.3 + 0.7 // 0.7 to 1.0
        }
      }
    }
  }
  
  return { systems, correlations }
}

// Generate timeline data for anomaly detection
export function generateAnomalyTimeline(): ChartDataPoint[] {
  const timeline: ChartDataPoint[] = []
  const now = new Date()
  
  for (let i = 23; i >= 0; i--) {
    const hour = new Date(now.getTime() - i * 60 * 60 * 1000)
    const anomalyCount = Math.floor(Math.random() * 15) + 1
    
    timeline.push({
      name: hour.getHours().toString().padStart(2, '0') + ':00',
      value: anomalyCount,
      date: hour.toISOString(),
      category: 'anomalies'
    })
  }
  
  return timeline
}

// Generate system health metrics
export function generateSystemHealthMetrics() {
  return SYSTEM_TYPES.slice(0, 6).map(system => ({
    system,
    health: Math.floor(Math.random() * 30) + 70, // 70-100%
    issues: Math.floor(Math.random() * 10),
    lastUpdate: new Date(Date.now() - Math.random() * 60 * 60 * 1000)
  }))
}

// Generate AI insights for the dashboard
export function generateAIInsights() {
  return [
    {
      id: 'insight-001',
      type: 'pattern',
      confidence: 94.2,
      title: 'Cross-System Correlation Detected',
      description: 'Backup failures strongly correlate with network latency spikes across multiple clients',
      impact: 'critical',
      recommendation: 'Investigate ISP infrastructure and implement backup redundancy'
    },
    {
      id: 'insight-002',
      type: 'prediction',
      confidence: 87.6,
      title: 'Capacity Breach Prediction',
      description: 'Database storage will reach capacity within 7 days for 3 enterprise clients',
      impact: 'high',
      recommendation: 'Schedule proactive capacity upgrades and client notifications'
    },
    {
      id: 'insight-003',
      type: 'optimization',
      confidence: 91.8,
      title: 'Security Alert Optimization',
      description: 'Current alert thresholds generating 34% false positives based on pattern analysis',
      impact: 'medium',
      recommendation: 'Adjust alert sensitivity and implement ML-based filtering'
    }
  ]
}