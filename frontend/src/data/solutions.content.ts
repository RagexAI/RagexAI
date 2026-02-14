/**
 * Solutions Content Data
 * Business-focused solutions that solve specific problems
 */

export const SOLUTIONS_DATA = [
  {
    id: 'web-applications',
    slug: 'web-applications',
    title: 'Web-Based Applications',
    shortDescription: 'Modern web applications that streamline operations and enhance productivity.',
    description: 'Build powerful web applications that work seamlessly across devices and platforms, helping your team work smarter and faster.',
    icon: '🌐',
    image: '/images/solutions/web-apps.jpg',
    
    challenges: [
      'Need to digitize manual processes',
      'Remote team collaboration challenges',
      'Data scattered across multiple tools',
      'Poor user adoption of existing tools',
      'High licensing costs for software',
      'Difficulty customizing off-the-shelf solutions',
    ],
    
    ourApproach: [
      'Requirements gathering and analysis',
      'User experience design',
      'Agile development sprints',
      'Continuous testing and feedback',
      'Cloud deployment',
      'Post-launch support and training',
    ],
    
    whatWeDeliver: [
      'Custom business applications',
      'Internal tools and dashboards',
      'Workflow automation systems',
      'Data management platforms',
      'Collaboration tools',
      'Customer-facing portals',
      'Analytics and reporting tools',
      'Integration with existing systems',
    ],
    
    useCases: [
      {
        title: 'Project Management Portal',
        description: 'Track projects, tasks, and team productivity in one place',
        results: ['40% faster project delivery', '60% better visibility'],
      },
      {
        title: 'Customer Portal',
        description: 'Self-service portal for customer account management',
        results: ['50% reduction in support tickets', '80% customer satisfaction'],
      },
      {
        title: 'Internal Operations Dashboard',
        description: 'Real-time visibility into business metrics and KPIs',
        results: ['30% better decision making', 'Real-time insights'],
      },
    ],
    
    technologies: ['React', 'Vue.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
    
    benefits: [
      'Tailored to your exact needs',
      'Scale as your business grows',
      'Own your data and code',
      'Lower total cost of ownership',
      'Competitive advantage',
    ],
    
    caseStudies: ['enterprise-dashboard', 'project-management-tool'],
  },
  {
    id: 'enterprise-applications',
    slug: 'enterprise-applications',
    title: 'Enterprise Applications',
    shortDescription: 'Mission-critical applications built for large-scale operations and complex workflows.',
    description: 'Enterprise-grade solutions designed to handle complex business processes, high transaction volumes, and stringent security requirements.',
    icon: '🏢',
    image: '/images/solutions/enterprise.jpg',
    
    challenges: [
      'Legacy systems hindering growth',
      'Complex integration requirements',
      'Security and compliance concerns',
      'Need for high availability',
      'Managing large user bases',
      'Expensive licensing and maintenance',
    ],
    
    ourApproach: [
      'Enterprise architecture design',
      'Security-first development',
      'Microservices architecture',
      'Comprehensive testing strategy',
      'Gradual migration planning',
      'Training and change management',
    ],
    
    whatWeDeliver: [
      'Core business applications',
      'Process automation platforms',
      'Document management systems',
      'Workflow orchestration',
      'Business intelligence tools',
      'Integration middleware',
      'API gateways',
      'Security and compliance features',
    ],
    
    useCases: [
      {
        title: 'Supply Chain Management',
        description: 'End-to-end visibility and control over supply chain operations',
        results: ['25% cost reduction', '35% faster fulfillment'],
      },
      {
        title: 'HR Management System',
        description: 'Comprehensive HRMS for recruitment, payroll, and performance',
        results: ['70% faster onboarding', '90% employee satisfaction'],
      },
      {
        title: 'Financial Management Platform',
        description: 'Integrated platform for accounting, invoicing, and reporting',
        results: ['60% faster month-end close', 'Real-time financials'],
      },
    ],
    
    technologies: ['Java', 'Spring Boot', '.NET', 'PostgreSQL', 'Oracle', 'Kubernetes', 'Azure', 'Kafka'],
    
    benefits: [
      '99.99% uptime SLA',
      'Enterprise-grade security',
      'Seamless integrations',
      'Scalable to millions of users',
      'Compliance ready (SOC2, HIPAA, GDPR)',
    ],
    
    caseStudies: ['enterprise-erp', 'financial-platform'],
  },
  {
    id: 'crm-erp-solutions',
    slug: 'crm-erp-solutions',
    title: 'CRM & ERP Solutions',
    shortDescription: 'Centralize customer relationships and business operations in unified systems.',
    description: 'Custom CRM and ERP solutions that bring together sales, operations, and customer data for a complete business view.',
    icon: '📊',
    image: '/images/solutions/crm-erp.jpg',
    
    challenges: [
      'Disconnected customer data',
      'Manual sales processes',
      'Lack of inventory visibility',
      'Inefficient order management',
      'Poor reporting and analytics',
      'Expensive legacy systems',
    ],
    
    ourApproach: [
      'Business process mapping',
      'Custom module development',
      'Data migration strategy',
      'User role configuration',
      'Automation setup',
      'Training and adoption support',
    ],
    
    whatWeDeliver: [
      'Customer relationship management',
      'Sales pipeline automation',
      'Lead management system',
      'Inventory management',
      'Order processing automation',
      'Financial management',
      'Reporting and analytics',
      'Mobile CRM/ERP apps',
    ],
    
    useCases: [
      {
        title: 'Sales CRM Platform',
        description: 'Track leads, opportunities, and customer interactions',
        results: ['40% increase in sales', '50% shorter sales cycles'],
      },
      {
        title: 'Manufacturing ERP',
        description: 'Manage production, inventory, and supply chain',
        results: ['30% cost savings', '45% productivity gain'],
      },
      {
        title: 'Distribution Management',
        description: 'End-to-end distribution and logistics management',
        results: ['35% faster delivery', '98% order accuracy'],
      },
    ],
    
    technologies: ['Salesforce', 'Custom CRM', 'Odoo', 'SAP', 'React', 'Node.js', 'PostgreSQL', 'Power BI'],
    
    benefits: [
      '360° customer view',
      'Automated workflows',
      'Real-time reporting',
      'Better forecasting',
      'Improved customer satisfaction',
    ],
    
    caseStudies: ['sales-crm', 'manufacturing-erp'],
  },
  {
    id: 'marketplace-platforms',
    slug: 'marketplace-platforms',
    title: 'Marketplace Platforms',
    shortDescription: 'Multi-vendor marketplaces that connect buyers and sellers seamlessly.',
    description: 'Build thriving online marketplaces with features for vendors, buyers, and administrators to create a sustainable ecosystem.',
    icon: '🏪',
    image: '/images/solutions/marketplace.jpg',
    
    challenges: [
      'Complex multi-vendor management',
      'Payment processing and splits',
      'Vendor onboarding and vetting',
      'Product catalog management',
      'Trust and safety concerns',
      'Scalability for growth',
    ],
    
    ourApproach: [
      'Marketplace model design',
      'Vendor portal development',
      'Payment gateway integration',
      'Rating and review system',
      'Search and discovery optimization',
      'Growth and retention features',
    ],
    
    whatWeDeliver: [
      'Vendor management system',
      'Product listing and catalog',
      'Advanced search and filters',
      'Secure payment processing',
      'Order management',
      'Rating and review system',
      'Vendor analytics dashboard',
      'Commission management',
      'Dispute resolution system',
      'Mobile marketplace apps',
    ],
    
    useCases: [
      {
        title: 'B2B Marketplace',
        description: 'Connect wholesale suppliers with retailers',
        results: ['500+ active vendors', '$5M GMV in year 1'],
      },
      {
        title: 'Service Marketplace',
        description: 'Platform connecting service providers with customers',
        results: ['10,000+ bookings/month', '4.8 star rating'],
      },
      {
        title: 'Rental Marketplace',
        description: 'Peer-to-peer equipment and property rental platform',
        results: ['85% repeat customers', '3x YoY growth'],
      },
    ],
    
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe Connect', 'Elasticsearch', 'Redis', 'AWS', 'React Native'],
    
    benefits: [
      'Launch in 12-16 weeks',
      'Scalable architecture',
      'Multiple revenue streams',
      'Trust and safety features',
      'Growth-focused features',
    ],
    
    caseStudies: ['b2b-marketplace', 'service-platform'],
  },
  {
    id: 'cloud-migration',
    slug: 'cloud-migration',
    title: 'Cloud Migration',
    shortDescription: 'Seamlessly migrate legacy systems to modern cloud infrastructure.',
    description: 'Move your applications and data to the cloud with minimal disruption, maximum performance, and optimized costs.',
    icon: '☁️',
    image: '/images/solutions/cloud.jpg',
    
    challenges: [
      'High on-premise infrastructure costs',
      'Scalability limitations',
      'Disaster recovery concerns',
      'Security vulnerabilities',
      'Legacy system dependencies',
      'Fear of downtime during migration',
    ],
    
    ourApproach: [
      'Cloud readiness assessment',
      'Migration strategy planning',
      'Application modernization',
      'Phased migration execution',
      'Testing and validation',
      'Optimization and monitoring',
    ],
    
    whatWeDeliver: [
      'Cloud architecture design',
      'Application migration',
      'Database migration',
      'Infrastructure as Code',
      'Security implementation',
      'Cost optimization',
      'Monitoring setup',
      'Training and documentation',
    ],
    
    useCases: [
      {
        title: 'Enterprise Data Center Migration',
        description: 'Migrate 50+ applications to AWS cloud',
        results: ['40% cost reduction', 'Zero downtime'],
      },
      {
        title: 'Legacy Modernization',
        description: 'Modernize monolithic app to microservices',
        results: ['10x faster deployment', '99.9% uptime'],
      },
      {
        title: 'Hybrid Cloud Setup',
        description: 'Implement hybrid cloud with on-premise integration',
        results: ['Flexible scaling', 'Enhanced security'],
      },
    ],
    
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'CloudFormation'],
    
    benefits: [
      'Reduce costs by 30-40%',
      'Improve performance',
      'Enhanced disaster recovery',
      'Better security',
      'Scale on demand',
    ],
    
    caseStudies: ['aws-migration', 'hybrid-cloud'],
  },
];

export const SOLUTIONS_HERO = {
  title: 'Solutions Built for Your Business',
  subtitle: 'Tailored technology solutions that solve real business challenges and deliver measurable outcomes.',
};

export const SOLUTION_TYPES = [
  {
    type: 'Applications',
    solutions: ['web-applications', 'enterprise-applications'],
  },
  {
    type: 'Business Systems',
    solutions: ['crm-erp-solutions', 'marketplace-platforms'],
  },
  {
    type: 'Infrastructure',
    solutions: ['cloud-migration'],
  },
];
