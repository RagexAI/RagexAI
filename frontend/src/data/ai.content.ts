/**
 * AI First Content Data
 * Contains all content for Core AI, Agentic AI, and AI Solutions
 */

// Core AI Services
export const CORE_AI_SERVICES = [
  {
    id: 'custom-ai-models',
    title: 'Custom AI Model Development',
    description: 'Build tailored AI models designed specifically for your business needs and data.',
    icon: '🧠',
    features: [
      'Domain-specific model training',
      'Transfer learning implementation',
      'Model optimization & fine-tuning',
      'Performance monitoring & iteration',
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face'],
    useCases: [
      'Industry-specific classification',
      'Custom recommendation engines',
      'Specialized prediction models',
    ],
  },
  {
    id: 'nlp-solutions',
    title: 'Natural Language Processing',
    description: 'Extract insights and automate text processing with advanced NLP solutions.',
    icon: '💬',
    features: [
      'Text classification & sentiment analysis',
      'Named entity recognition',
      'Language translation',
      'Document summarization',
    ],
    technologies: ['GPT-4', 'BERT', 'spaCy', 'NLTK'],
    useCases: [
      'Customer feedback analysis',
      'Automated content generation',
      'Chatbot development',
    ],
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Enable machines to understand and interpret visual information from the world.',
    icon: '👁️',
    features: [
      'Object detection & recognition',
      'Image classification',
      'Facial recognition',
      'Video analytics',
    ],
    technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorFlow'],
    useCases: [
      'Quality control automation',
      'Security & surveillance',
      'Medical image analysis',
    ],
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Forecast future trends and behaviors using historical data and ML algorithms.',
    icon: '📊',
    features: [
      'Time series forecasting',
      'Risk assessment models',
      'Demand prediction',
      'Anomaly detection',
    ],
    technologies: ['Python', 'R', 'Prophet', 'XGBoost'],
    useCases: [
      'Sales forecasting',
      'Inventory optimization',
      'Fraud detection',
    ],
  },
  {
    id: 'recommendation-systems',
    title: 'Recommendation Systems',
    description: 'Deliver personalized experiences with intelligent recommendation engines.',
    icon: '🎯',
    features: [
      'Collaborative filtering',
      'Content-based recommendations',
      'Hybrid recommendation models',
      'Real-time personalization',
    ],
    technologies: ['TensorFlow', 'Spark MLlib', 'Neo4j', 'Redis'],
    useCases: [
      'E-commerce product recommendations',
      'Content discovery platforms',
      'Personalized marketing',
    ],
  },
];

// Agentic AI Services
export const AGENTIC_AI_SERVICES = [
  {
    id: 'autonomous-agents',
    title: 'Autonomous AI Agents',
    description: 'Deploy intelligent agents that can make decisions and take actions independently.',
    icon: '🤖',
    features: [
      'Goal-oriented task execution',
      'Decision-making capabilities',
      'Self-learning mechanisms',
      'Multi-step reasoning',
    ],
    technologies: ['LangChain', 'AutoGPT', 'OpenAI', 'CrewAI'],
    useCases: [
      'Autonomous customer support',
      'Automated research assistants',
      'Smart process automation',
    ],
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation Agents',
    description: 'Streamline complex workflows with intelligent automation agents.',
    icon: '⚙️',
    features: [
      'Process orchestration',
      'Intelligent task routing',
      'Exception handling',
      'Integration with existing tools',
    ],
    technologies: ['n8n', 'Zapier', 'Make', 'Custom APIs'],
    useCases: [
      'Sales pipeline automation',
      'Document processing',
      'Report generation',
    ],
  },
  {
    id: 'ai-assistants',
    title: 'AI Chat Assistants',
    description: 'Create conversational AI assistants for enhanced customer engagement.',
    icon: '💬',
    features: [
      'Natural conversation flow',
      'Context awareness',
      'Multi-language support',
      'Integration with knowledge bases',
    ],
    technologies: ['GPT-4', 'Claude', 'Rasa', 'Dialogflow'],
    useCases: [
      'Customer service automation',
      'Internal help desk',
      'Virtual shopping assistants',
    ],
  },
  {
    id: 'multi-agent-systems',
    title: 'Multi-Agent Systems',
    description: 'Coordinate multiple AI agents working together to solve complex problems.',
    icon: '🔗',
    features: [
      'Agent collaboration',
      'Task delegation',
      'Distributed problem-solving',
      'Consensus mechanisms',
    ],
    technologies: ['CrewAI', 'AutoGen', 'LangGraph', 'Custom frameworks'],
    useCases: [
      'Complex research tasks',
      'Software development teams',
      'Business process optimization',
    ],
  },
  {
    id: 'business-automation',
    title: 'AI Business Process Automation',
    description: 'Transform business operations with intelligent automation solutions.',
    icon: '🏢',
    features: [
      'End-to-end process automation',
      'Intelligent document processing',
      'Automated decision-making',
      'Performance analytics',
    ],
    technologies: ['UiPath', 'Blue Prism', 'Custom AI', 'RPA'],
    useCases: [
      'Invoice processing',
      'HR onboarding automation',
      'Compliance monitoring',
    ],
  },
];

// AI Solutions by Industry
export const AI_SOLUTIONS_BY_INDUSTRY = [
  {
    id: 'ai-ecommerce',
    title: 'AI for E-commerce',
    description: 'Boost sales and customer satisfaction with AI-powered e-commerce solutions.',
    icon: '🛒',
    solutions: [
      'Personalized product recommendations',
      'Dynamic pricing optimization',
      'Inventory demand forecasting',
      'Customer churn prediction',
      'Visual search capabilities',
      'Automated customer support',
    ],
    benefits: [
      'Increase conversion rates by 30%',
      'Reduce cart abandonment',
      'Improve customer lifetime value',
      'Optimize inventory costs',
    ],
  },
  {
    id: 'ai-healthcare',
    title: 'AI for Healthcare',
    description: 'Enhance patient care and operational efficiency with healthcare AI solutions.',
    icon: '🏥',
    solutions: [
      'Medical image analysis',
      'Predictive patient outcomes',
      'Automated diagnosis assistance',
      'Drug discovery acceleration',
      'Patient monitoring systems',
      'Healthcare chatbots',
    ],
    benefits: [
      'Improve diagnostic accuracy',
      'Reduce patient wait times',
      'Lower operational costs',
      'Enhanced patient outcomes',
    ],
  },
  {
    id: 'ai-fintech',
    title: 'AI for FinTech',
    description: 'Secure and optimize financial operations with intelligent AI systems.',
    icon: '💰',
    solutions: [
      'Fraud detection & prevention',
      'Credit scoring models',
      'Algorithmic trading',
      'Risk assessment automation',
      'Customer service bots',
      'Regulatory compliance automation',
    ],
    benefits: [
      'Reduce fraud by 50%+',
      'Faster loan approvals',
      'Better risk management',
      'Enhanced security',
    ],
  },
  {
    id: 'ai-enterprise',
    title: 'Enterprise AI Integration',
    description: 'Transform enterprise operations with seamless AI integration.',
    icon: '🏢',
    solutions: [
      'AI-powered analytics dashboards',
      'Automated reporting systems',
      'Intelligent document management',
      'Workforce optimization',
      'Supply chain optimization',
      'Predictive maintenance',
    ],
    benefits: [
      'Increase productivity by 40%',
      'Data-driven decision making',
      'Cost reduction',
      'Competitive advantage',
    ],
  },
];

export const AI_FIRST_HERO = {
  title: 'AI-First Solutions',
  subtitle: 'Harness the power of artificial intelligence to transform your business operations and create competitive advantages.',
  description: 'We build custom AI solutions that solve real business problems—from intelligent automation to advanced machine learning models.',
};

export const AI_BENEFITS = [
  {
    title: 'Faster Time to Market',
    description: 'Deploy AI solutions 3x faster with our proven frameworks and methodologies.',
    icon: '⚡',
  },
  {
    title: 'Scalable Architecture',
    description: 'Build AI systems that grow with your business needs and handle increasing data volumes.',
    icon: '📈',
  },
  {
    title: 'Expert Team',
    description: 'Work with PhD-level data scientists and ML engineers with years of industry experience.',
    icon: '👥',
  },
  {
    title: 'Production-Ready',
    description: 'Get AI solutions that are tested, secure, and ready for enterprise deployment.',
    icon: '✅',
  },
];
