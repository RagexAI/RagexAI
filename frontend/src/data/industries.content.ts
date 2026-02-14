/**
 * Industries Content Data
 * Industry-specific solutions and insights
 */

export const INDUSTRIES_DATA = [
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'E-commerce & Retail',
    title: 'E-commerce & Retail Solutions',
    description: 'Transform your retail business with technology that drives sales, improves customer experience, and streamlines operations.',
    icon: '🛒',
    image: '/images/industries/ecommerce.jpg',
    
    challenges: [
      'High customer acquisition costs',
      'Low conversion rates (2-3% average)',
      'Cart abandonment (70% average)',
      'Managing inventory across channels',
      'Providing personalized experiences',
      'Competition from marketplaces',
      'Complex logistics and fulfillment',
      'Customer retention challenges',
    ],
    
    ourApproach: [
      'Conversion rate optimization',
      'AI-powered personalization',
      'Omnichannel strategy',
      'Inventory automation',
      'Customer data platform',
      'Marketing automation',
    ],
    
    solutions: [
      {
        title: 'Custom E-commerce Platforms',
        description: 'Scalable online stores built for growth',
        features: ['Product catalog', 'Payment integration', 'Order management', 'Customer accounts'],
      },
      {
        title: 'Marketplace Integration',
        description: 'Sell across Amazon, eBay, and other platforms',
        features: ['Multi-channel sync', 'Inventory management', 'Order consolidation', 'Analytics'],
      },
      {
        title: 'AI Personalization',
        description: 'Deliver personalized shopping experiences',
        features: ['Product recommendations', 'Dynamic pricing', 'Customer segmentation', 'Predictive analytics'],
      },
      {
        title: 'Retail Analytics',
        description: 'Data-driven insights for better decisions',
        features: ['Sales analytics', 'Customer behavior', 'Inventory insights', 'Forecasting'],
      },
    ],
    
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'React', 'Node.js', 'AI/ML', 'AWS', 'Stripe'],
    
    caseStudies: [
      {
        title: 'Fashion E-commerce Platform',
        client: 'Leading Fashion Retailer',
        challenge: 'Low conversion rates and high bounce rates',
        solution: 'Rebuilt platform with AI personalization and optimized checkout',
        results: ['45% increase in conversion', '30% higher AOV', '60% faster page load'],
      },
      {
        title: 'Multi-Vendor Marketplace',
        client: 'B2B Wholesale Platform',
        challenge: 'Managing 500+ vendors and complex pricing',
        solution: 'Custom marketplace with automated vendor onboarding',
        results: ['3x more vendors', '2x GMV growth', '90% automation'],
      },
    ],
    
    benefits: [
      'Increase revenue by 30-40%',
      'Improve conversion rates',
      'Reduce operational costs',
      'Better customer insights',
      'Faster time to market',
    ],
    
    keyMetrics: [
      { metric: 'Average Revenue Increase', value: '35%' },
      { metric: 'Conversion Rate Improvement', value: '45%' },
      { metric: 'Customer Retention', value: '60%' },
    ],
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare',
    title: 'Healthcare Technology Solutions',
    description: 'Improve patient care and operational efficiency with secure, compliant healthcare technology.',
    icon: '🏥',
    image: '/images/industries/healthcare.jpg',
    
    challenges: [
      'Paper-based processes',
      'Data silos across systems',
      'Patient engagement gaps',
      'Regulatory compliance (HIPAA, GDPR)',
      'Staff burnout and shortages',
      'Rising operational costs',
      'Appointment no-shows',
      'Medical errors',
    ],
    
    ourApproach: [
      'HIPAA-compliant architecture',
      'Interoperability standards (HL7, FHIR)',
      'User-centered design',
      'AI-assisted diagnostics',
      'Telehealth integration',
      'Security-first development',
    ],
    
    solutions: [
      {
        title: 'Electronic Health Records (EHR)',
        description: 'Digital patient records and medical history',
        features: ['Patient records', 'Clinical documentation', 'E-prescribing', 'Lab integration'],
      },
      {
        title: 'Telemedicine Platforms',
        description: 'Virtual care and remote consultations',
        features: ['Video consultations', 'Appointment booking', 'Prescription management', 'Patient portals'],
      },
      {
        title: 'Healthcare AI',
        description: 'AI-powered diagnostics and analytics',
        features: ['Medical imaging analysis', 'Predictive analytics', 'Risk assessment', 'Clinical decision support'],
      },
      {
        title: 'Patient Engagement',
        description: 'Mobile apps for patient communication',
        features: ['Appointment reminders', 'Health tracking', 'Medication adherence', 'Educational content'],
      },
    ],
    
    technologies: ['FHIR', 'HL7', 'Python', 'TensorFlow', 'React', 'Node.js', 'AWS HIPAA', 'Blockchain'],
    
    caseStudies: [
      {
        title: 'Telemedicine Platform',
        client: 'Regional Healthcare Network',
        challenge: 'Limited access to specialists in rural areas',
        solution: 'Built telemedicine platform connecting patients with specialists',
        results: ['10,000+ consultations', '85% patient satisfaction', '40% cost reduction'],
      },
      {
        title: 'AI Diagnostic Assistant',
        client: 'Radiology Department',
        challenge: 'Radiologist shortage and long report turnaround',
        solution: 'AI system for preliminary screening of medical images',
        results: ['50% faster reporting', '95% accuracy', '30% productivity gain'],
      },
    ],
    
    benefits: [
      'Improve patient outcomes',
      'Reduce operational costs by 30%',
      'HIPAA compliant',
      'Better patient engagement',
      'Enhanced staff efficiency',
    ],
    
    keyMetrics: [
      { metric: 'Patient Satisfaction', value: '85%' },
      { metric: 'Operational Cost Reduction', value: '30%' },
      { metric: 'Staff Efficiency Gain', value: '40%' },
    ],
  },
  {
    id: 'fintech',
    slug: 'fintech',
    name: 'FinTech & Banking',
    title: 'FinTech Solutions',
    description: 'Build secure, scalable financial technology that transforms banking and payments.',
    icon: '💰',
    image: '/images/industries/fintech.jpg',
    
    challenges: [
      'Legacy banking systems',
      'Fraud and security threats',
      'Regulatory compliance',
      'Customer acquisition costs',
      'Manual processes',
      'Poor user experience',
      'Transaction processing delays',
      'High operational costs',
    ],
    
    ourApproach: [
      'Security-first architecture',
      'Compliance by design',
      'Real-time processing',
      'AI-powered fraud detection',
      'Open banking APIs',
      'Mobile-first experience',
    ],
    
    solutions: [
      {
        title: 'Digital Banking Platforms',
        description: 'Modern banking experiences',
        features: ['Account management', 'Bill payments', 'Fund transfers', 'Card management'],
      },
      {
        title: 'Payment Gateways',
        description: 'Secure payment processing',
        features: ['Multiple payment methods', 'Fraud detection', 'Instant settlements', 'Recurring billing'],
      },
      {
        title: 'Lending Platforms',
        description: 'Automated loan processing',
        features: ['Credit scoring', 'Document verification', 'Instant approvals', 'EMI management'],
      },
      {
        title: 'Wealth Management',
        description: 'Investment and portfolio management',
        features: ['Portfolio tracking', 'Robo-advisory', 'Tax optimization', 'Market insights'],
      },
    ],
    
    technologies: ['Blockchain', 'Node.js', 'Python', 'Kafka', 'PostgreSQL', 'Redis', 'AWS', 'AI/ML'],
    
    caseStudies: [
      {
        title: 'Digital Lending Platform',
        client: 'NBFC Company',
        challenge: 'Manual loan processing taking 7-10 days',
        solution: 'AI-powered lending platform with instant credit decisions',
        results: ['Instant approvals', '10x application volume', '70% cost reduction'],
      },
      {
        title: 'Payment Gateway',
        client: 'Payment Service Provider',
        challenge: 'High transaction failure rates and fraud',
        solution: 'Built scalable gateway with AI fraud detection',
        results: ['99.9% uptime', '60% less fraud', 'Process 10K TPS'],
      },
    ],
    
    benefits: [
      'Reduce fraud by 60%',
      '10x faster processing',
      'Regulatory compliant',
      'Better customer experience',
      'Lower operational costs',
    ],
    
    keyMetrics: [
      { metric: 'Fraud Reduction', value: '60%' },
      { metric: 'Processing Speed', value: '10x' },
      { metric: 'Customer Satisfaction', value: '90%' },
    ],
  },
  {
    id: 'edtech',
    slug: 'edtech',
    name: 'EdTech',
    title: 'Education Technology Solutions',
    description: 'Transform learning experiences with innovative educational technology platforms.',
    icon: '🎓',
    image: '/images/industries/edtech.jpg',
    
    challenges: [
      'Low student engagement',
      'Limited personalization',
      'Assessment and tracking gaps',
      'Geographic access barriers',
      'High cost of education',
      'Teacher workload',
      'Content management difficulties',
      'ROI measurement challenges',
    ],
    
    ourApproach: [
      'Learner-centric design',
      'Adaptive learning paths',
      'Gamification elements',
      'Analytics and insights',
      'Mobile-first platform',
      'Scalable infrastructure',
    ],
    
    solutions: [
      {
        title: 'Learning Management Systems (LMS)',
        description: 'Complete online learning platforms',
        features: ['Course management', 'Video streaming', 'Assessments', 'Progress tracking'],
      },
      {
        title: 'Live Classroom Platforms',
        description: 'Interactive virtual classrooms',
        features: ['Live video sessions', 'Screen sharing', 'Whiteboard', 'Recording'],
      },
      {
        title: 'AI Tutoring Systems',
        description: 'Personalized learning with AI',
        features: ['Adaptive learning', 'Intelligent assessment', 'Instant feedback', 'Learning analytics'],
      },
      {
        title: 'Student Management',
        description: 'Comprehensive student information systems',
        features: ['Enrollment', 'Attendance', 'Grades', 'Parent portals'],
      },
    ],
    
    technologies: ['React', 'Node.js', 'WebRTC', 'AI/ML', 'MongoDB', 'AWS', 'Zoom SDK', 'LTI'],
    
    caseStudies: [
      {
        title: 'Online Learning Platform',
        client: 'K-12 Education Provider',
        challenge: 'Transition to online learning during pandemic',
        solution: 'Built comprehensive LMS with live classes and assessments',
        results: ['50,000+ students', '95% attendance', '85% satisfaction'],
      },
      {
        title: 'Corporate Training Platform',
        client: 'Enterprise Training Company',
        challenge: 'Scaling training for 10,000+ employees',
        solution: 'Custom LMS with compliance tracking and certifications',
        results: ['90% completion rate', '40% cost savings', '70% faster onboarding'],
      },
    ],
    
    benefits: [
      'Increase engagement by 60%',
      'Personalized learning',
      'Better learning outcomes',
      'Scalable to millions',
      'Reduce costs by 40%',
    ],
    
    keyMetrics: [
      { metric: 'Student Engagement', value: '60%' },
      { metric: 'Learning Outcomes', value: '45%' },
      { metric: 'Cost Reduction', value: '40%' },
    ],
  },
  {
    id: 'saas',
    slug: 'saas',
    name: 'SaaS Companies',
    title: 'SaaS Product Development',
    description: 'Build and scale SaaS products that customers love and businesses rely on.',
    icon: '💼',
    image: '/images/industries/saas.jpg',
    
    challenges: [
      'Building MVP quickly',
      'Achieving product-market fit',
      'Scalability concerns',
      'Customer acquisition costs',
      'Churn rate management',
      'Feature bloat',
      'Technical debt accumulation',
      'Competition and differentiation',
    ],
    
    ourApproach: [
      'Lean MVP development',
      'User feedback loops',
      'Scalable architecture',
      'Growth-focused features',
      'Analytics-driven decisions',
      'Continuous deployment',
    ],
    
    solutions: [
      {
        title: 'MVP Development',
        description: 'Launch your SaaS product fast',
        features: ['Core features', 'User authentication', 'Subscription billing', 'Analytics'],
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'Scalable SaaS infrastructure',
        features: ['Data isolation', 'Tenant management', 'Usage tracking', 'Custom domains'],
      },
      {
        title: 'Product Analytics',
        description: 'Understand user behavior',
        features: ['Event tracking', 'User journeys', 'Cohort analysis', 'A/B testing'],
      },
      {
        title: 'Integration Marketplace',
        description: 'Ecosystem of integrations',
        features: ['API development', 'OAuth', 'Webhooks', 'Partner portal'],
      },
    ],
    
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS', 'Docker', 'Kubernetes'],
    
    caseStudies: [
      {
        title: 'Project Management SaaS',
        client: 'B2B SaaS Startup',
        challenge: 'Build MVP and get first 100 customers in 6 months',
        solution: 'Built scalable MVP with core features and integrations',
        results: ['150 customers in 4 months', '$50K MRR', 'Seed funding raised'],
      },
      {
        title: 'Marketing Automation Platform',
        client: 'MarTech Company',
        challenge: 'Scale from 1K to 10K customers',
        solution: 'Re-architected platform with microservices',
        results: ['10x customer growth', '99.9% uptime', '40% cost savings'],
      },
    ],
    
    benefits: [
      'Launch MVP in 8-12 weeks',
      'Scale to 100K+ users',
      'Reduce churn by 30%',
      'Faster feature deployment',
      'Lower CAC',
    ],
    
    keyMetrics: [
      { metric: 'Time to MVP', value: '8-12 weeks' },
      { metric: 'Uptime SLA', value: '99.9%' },
      { metric: 'Scalability', value: '100K+ users' },
    ],
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate',
    title: 'Real Estate Technology Solutions',
    description: 'Modernize real estate operations with technology that streamlines transactions and enhances experiences.',
    icon: '🏠',
    image: '/images/industries/real-estate.jpg',
    
    challenges: [
      'Manual property management',
      'Paper-based documentation',
      'Lead management difficulties',
      'Slow transaction processes',
      'Poor customer experience',
      'Marketing inefficiencies',
      'Lack of data insights',
      'Coordination challenges',
    ],
    
    ourApproach: [
      'Mobile-first experience',
      'Virtual property tours',
      'Automated workflows',
      'CRM integration',
      'Document digitization',
      'Analytics and reporting',
    ],
    
    solutions: [
      {
        title: 'Property Listing Platforms',
        description: 'Modern real estate marketplaces',
        features: ['Property listings', 'Advanced search', 'Virtual tours', 'Lead capture'],
      },
      {
        title: 'Property Management Systems',
        description: 'Manage properties and tenants',
        features: ['Tenant management', 'Rent collection', 'Maintenance requests', 'Financial reporting'],
      },
      {
        title: 'Real Estate CRM',
        description: 'Manage leads and transactions',
        features: ['Lead management', 'Pipeline tracking', 'Document management', 'Commission tracking'],
      },
      {
        title: 'Virtual Tours & AR',
        description: 'Immersive property experiences',
        features: ['360° tours', 'AR visualization', 'Floor plans', 'Video walkthroughs'],
      },
    ],
    
    technologies: ['React', 'Node.js', 'Google Maps API', '3D.js', 'MongoDB', 'Stripe', 'AWS', 'ML'],
    
    caseStudies: [
      {
        title: 'Property Marketplace',
        client: 'Real Estate Brokerage',
        challenge: 'Low lead conversion and high marketing costs',
        solution: 'Built modern listing platform with virtual tours and CRM',
        results: ['50% more leads', '30% higher conversion', '40% lower CAC'],
      },
      {
        title: 'Property Management Platform',
        client: 'Property Management Company',
        challenge: 'Managing 1000+ properties manually',
        solution: 'Custom PMS with tenant portal and automation',
        results: ['90% automation', '50% cost reduction', '95% tenant satisfaction'],
      },
    ],
    
    benefits: [
      'Increase leads by 50%',
      'Faster transactions',
      'Better customer experience',
      'Reduce operational costs',
      'Data-driven insights',
    ],
    
    keyMetrics: [
      { metric: 'Lead Generation', value: '50%' },
      { metric: 'Transaction Speed', value: '40% faster' },
      { metric: 'Cost Reduction', value: '35%' },
    ],
  },
];

export const INDUSTRIES_HERO = {
  title: 'Industries We Serve',
  subtitle: 'Deep expertise across key industries, delivering solutions that understand your unique challenges.',
};

export const INDUSTRY_CATEGORIES = [
  {
    category: 'Commerce',
    industries: ['ecommerce'],
  },
  {
    category: 'Services',
    industries: ['healthcare', 'fintech', 'edtech', 'real-estate'],
  },
  {
    category: 'Technology',
    industries: ['saas'],
  },
];
