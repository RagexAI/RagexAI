/**
 * Services Content Data
 * Contains all content for the 7 main service categories
 */

export const SERVICES_DATA = [
  {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    shortDescription: 'Build scalable online stores that drive sales and deliver exceptional shopping experiences.',
    description: 'We create high-performing e-commerce platforms that convert visitors into customers. From custom storefronts to multi-vendor marketplaces, our solutions are built for growth.',
    icon: '🛒',
    image: '/images/services/ecommerce.jpg',
    
    problems: [
      'Low conversion rates and high cart abandonment',
      'Poor mobile shopping experience',
      'Slow page load times affecting sales',
      'Difficulty managing inventory across channels',
      'Limited payment gateway options',
      'Lack of personalization features',
    ],
    
    approach: [
      'User experience first design methodology',
      'Performance optimization from the ground up',
      'Mobile-first responsive development',
      'Secure payment integration',
      'SEO optimization for organic traffic',
      'Analytics and conversion tracking',
    ],
    
    features: [
      'Custom product catalogs with advanced filtering',
      'Multi-currency and multi-language support',
      'Integrated payment gateways (Stripe, PayPal, etc.)',
      'Inventory management system',
      'Order tracking and management',
      'Customer account portals',
      'Wishlist and comparison features',
      'Product reviews and ratings',
      'Abandoned cart recovery',
      'Email marketing integration',
    ],
    
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Shopify', 'WooCommerce', 'Magento'],
    
    benefits: [
      'Increase conversion rates by 35%+',
      'Reduce cart abandonment',
      'Improve customer retention',
      'Scale to handle thousands of products',
      'Mobile-optimized for 50%+ of traffic',
    ],
    
    pricing: {
      starter: 'From $5,000',
      enterprise: 'Custom pricing',
    },
  },
  {
    id: 'devops-cloud-security',
    slug: 'devops-cloud-security',
    title: 'DevOps, Cloud & Security',
    shortDescription: 'Accelerate delivery with modern DevOps practices and secure cloud infrastructure.',
    description: 'Build, deploy, and scale with confidence. Our DevOps and cloud solutions ensure your applications are fast, reliable, and secure.',
    icon: '☁️',
    image: '/images/services/devops.jpg',
    
    problems: [
      'Slow and manual deployment processes',
      'Frequent production outages',
      'High infrastructure costs',
      'Security vulnerabilities',
      'Lack of monitoring and observability',
      'Difficulty scaling applications',
    ],
    
    approach: [
      'Infrastructure as Code (IaC)',
      'CI/CD pipeline automation',
      'Container orchestration',
      'Security-first architecture',
      'Monitoring and logging setup',
      'Cost optimization strategies',
    ],
    
    features: [
      'Automated CI/CD pipelines',
      'Kubernetes cluster management',
      'AWS/Azure/GCP cloud setup',
      'Security scanning and compliance',
      'Performance monitoring',
      'Auto-scaling configuration',
      'Disaster recovery planning',
      'Infrastructure cost optimization',
      'Zero-downtime deployments',
      'Secret management',
    ],
    
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Terraform', 'Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana'],
    
    benefits: [
      'Deploy 10x faster with automation',
      'Reduce infrastructure costs by 40%',
      '99.9% uptime guarantee',
      'Enhanced security posture',
      'Scalable infrastructure',
    ],
    
    pricing: {
      starter: 'From $3,000/month',
      enterprise: 'Custom pricing',
    },
  },
  {
    id: 'digital-transformation',
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    shortDescription: 'Modernize legacy systems and transform business processes with cutting-edge technology.',
    description: 'We help organizations transition from outdated systems to modern, efficient digital solutions that drive growth and innovation.',
    icon: '🚀',
    image: '/images/services/transformation.jpg',
    
    problems: [
      'Outdated legacy systems holding back growth',
      'Manual processes consuming resources',
      'Poor data accessibility and insights',
      'Disconnected systems and data silos',
      'Inability to adapt to market changes',
      'High operational costs',
    ],
    
    approach: [
      'Comprehensive digital maturity assessment',
      'Strategic roadmap development',
      'Phased implementation approach',
      'Change management support',
      'Training and knowledge transfer',
      'Continuous improvement methodology',
    ],
    
    features: [
      'Legacy system modernization',
      'Process automation',
      'Cloud migration strategy',
      'Data integration and ETL',
      'API development and integration',
      'Digital workflow optimization',
      'Employee training programs',
      'Analytics and reporting dashboards',
      'Mobile workforce enablement',
      'Customer portal development',
    ],
    
    technologies: ['React', 'Node.js', 'Python', 'AWS', 'Azure', 'MongoDB', 'PostgreSQL', 'Microservices', 'APIs'],
    
    benefits: [
      'Reduce operational costs by 30%',
      'Improve process efficiency by 50%',
      'Enable data-driven decisions',
      'Faster time to market',
      'Enhanced customer experience',
    ],
    
    pricing: {
      starter: 'From $10,000',
      enterprise: 'Custom pricing',
    },
  },
  {
    id: 'managed-it-services',
    slug: 'managed-it-services',
    title: 'Managed IT Services',
    shortDescription: 'Focus on your business while we manage your IT infrastructure and support.',
    description: 'Comprehensive IT management services that keep your systems running smoothly, securely, and efficiently.',
    icon: '🛠️',
    image: '/images/services/managed-it.jpg',
    
    problems: [
      'IT issues disrupting business operations',
      'High cost of in-house IT team',
      'Security threats and vulnerabilities',
      'Outdated software and systems',
      'Lack of proactive monitoring',
      'Slow incident response times',
    ],
    
    approach: [
      '24/7 monitoring and support',
      'Proactive maintenance',
      'Security-first mindset',
      'Regular system updates',
      'Performance optimization',
      'Disaster recovery planning',
    ],
    
    features: [
      '24/7 help desk support',
      'System monitoring and alerts',
      'Regular security audits',
      'Patch management',
      'Backup and disaster recovery',
      'Network management',
      'Server administration',
      'Cloud infrastructure management',
      'Software license management',
      'IT consulting and strategy',
    ],
    
    technologies: ['AWS', 'Azure', 'Microsoft 365', 'Linux', 'Windows Server', 'Network Security', 'Backup Solutions'],
    
    benefits: [
      'Reduce IT costs by 40%',
      '99.9% system uptime',
      'Fast incident resolution',
      'Enhanced security',
      'Focus on core business',
    ],
    
    pricing: {
      starter: 'From $1,500/month',
      enterprise: 'Custom pricing',
    },
  },
  {
    id: 'ai-ml-automation',
    slug: 'ai-ml-automation',
    title: 'AI/ML & Automation',
    shortDescription: 'Leverage artificial intelligence and machine learning to automate and optimize operations.',
    description: 'Build intelligent systems that learn, adapt, and automate complex tasks to drive efficiency and innovation.',
    icon: '🤖',
    image: '/images/services/ai-ml.jpg',
    
    problems: [
      'Manual, repetitive tasks consuming time',
      'Inability to process large data volumes',
      'Lack of predictive insights',
      'Poor personalization capabilities',
      'High operational costs',
      'Human error in critical processes',
    ],
    
    approach: [
      'Business problem identification',
      'Data assessment and preparation',
      'Model development and training',
      'Integration with existing systems',
      'Continuous monitoring and improvement',
      'ROI measurement and optimization',
    ],
    
    features: [
      'Custom ML model development',
      'Predictive analytics',
      'Natural language processing',
      'Computer vision solutions',
      'Chatbot and virtual assistants',
      'Process automation (RPA)',
      'Recommendation engines',
      'Anomaly detection',
      'Sentiment analysis',
      'Document processing automation',
    ],
    
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'GPT-4', 'OpenAI', 'LangChain', 'Hugging Face'],
    
    benefits: [
      'Automate 70% of repetitive tasks',
      'Reduce processing time by 80%',
      'Improve accuracy to 95%+',
      'Generate actionable insights',
      'Scale without adding headcount',
    ],
    
    pricing: {
      starter: 'From $8,000',
      enterprise: 'Custom pricing',
    },
  },
  {
    id: 'web-mobile-development',
    slug: 'web-mobile-development',
    title: 'Web & Mobile Development',
    shortDescription: 'Create beautiful, high-performance web and mobile applications that users love.',
    description: 'From responsive websites to native mobile apps, we build digital products that deliver exceptional user experiences.',
    icon: '📱',
    image: '/images/services/web-mobile.jpg',
    
    problems: [
      'Poor user experience and engagement',
      'Slow loading times',
      'Not mobile responsive',
      'Difficult to maintain and update',
      'Low conversion rates',
      'Inconsistent cross-platform experience',
    ],
    
    approach: [
      'User-centered design process',
      'Mobile-first development',
      'Performance optimization',
      'Cross-platform compatibility',
      'Agile development methodology',
      'Continuous testing and iteration',
    ],
    
    features: [
      'Responsive web applications',
      'Progressive Web Apps (PWA)',
      'Native iOS and Android apps',
      'Cross-platform mobile apps',
      'Real-time features',
      'Offline functionality',
      'Push notifications',
      'Social media integration',
      'Analytics integration',
      'App store deployment',
    ],
    
    technologies: ['React', 'React Native', 'Flutter', 'Node.js', 'Next.js', 'TypeScript', 'Swift', 'Kotlin', 'Firebase'],
    
    benefits: [
      'Reach users on any device',
      '50% faster load times',
      'Increase engagement by 40%',
      'Single codebase for multiple platforms',
      'Seamless user experience',
    ],
    
    pricing: {
      starter: 'From $7,000',
      enterprise: 'Custom pricing',
    },
  },
  {
    id: 'saas-product-development',
    slug: 'saas-product-development',
    title: 'SaaS Product Development',
    shortDescription: 'Build scalable SaaS products from concept to launch and beyond.',
    description: 'We help startups and enterprises build cloud-based SaaS products that scale, monetize, and delight users.',
    icon: '💼',
    image: '/images/services/saas.jpg',
    
    problems: [
      'Turning ideas into market-ready products',
      'Building for scale from day one',
      'Managing multi-tenant architecture',
      'Implementing subscription billing',
      'Ensuring security and compliance',
      'High infrastructure costs',
    ],
    
    approach: [
      'MVP development strategy',
      'Scalable architecture design',
      'User onboarding optimization',
      'Subscription model implementation',
      'Analytics and growth tracking',
      'Continuous feature development',
    ],
    
    features: [
      'Multi-tenant SaaS architecture',
      'User authentication and authorization',
      'Subscription billing integration',
      'Admin dashboard',
      'User analytics and reporting',
      'API development',
      'Third-party integrations',
      'Email notification system',
      'Role-based access control',
      'White-label solutions',
    ],
    
    technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Stripe', 'AWS', 'Docker', 'Kubernetes', 'Redis'],
    
    benefits: [
      'Launch MVP in 8-12 weeks',
      'Scale to 10,000+ users',
      'Recurring revenue model',
      'Low customer acquisition cost',
      'Enterprise-grade security',
    ],
    
    pricing: {
      starter: 'From $15,000',
      enterprise: 'Custom pricing',
    },
  },
];

export const SERVICES_HERO = {
  title: 'Services That Scale Your Business',
  subtitle: 'End-to-end technology services designed to solve real business challenges and drive measurable results.',
};

export const SERVICE_CATEGORIES = [
  {
    category: 'Development',
    services: ['ecommerce-development', 'web-mobile-development', 'saas-product-development'],
  },
  {
    category: 'Infrastructure',
    services: ['devops-cloud-security', 'managed-it-services'],
  },
  {
    category: 'Innovation',
    services: ['ai-ml-automation', 'digital-transformation'],
  },
];
