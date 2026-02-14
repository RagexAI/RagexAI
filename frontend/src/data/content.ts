export const TRUST_STATS = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 25, suffix: '+', label: 'AI Systems Built' },
  { value: 12, label: 'Industries Served' },
  { value: 98, suffix: '%', label: 'Client Retention' },
];

export const CAPABILITIES = [
  {
    title: 'AI Engineering',
    description: 'Custom models, ML pipelines, and intelligent systems that automate decisions and unlock new revenue streams.',
    icon: '🤖',
    href: '/solutions/ai',
  },
  {
    title: 'SaaS Platforms',
    description: 'Multi-tenant, scalable SaaS products with subscription billing, analytics, and enterprise security.',
    icon: '🌐',
    href: '/solutions/web',
  },
  {
    title: 'Enterprise Systems',
    description: 'Integration-heavy platforms that connect legacy systems with modern APIs and workflows.',
    icon: '🏢',
    href: '/solutions/web',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Infrastructure as code, CI/CD, and observability so your systems scale and recover predictably.',
    icon: '☁️',
    href: '/solutions/web',
  },
  {
    title: 'Data Intelligence',
    description: 'Data pipelines, warehouses, and BI that turn raw data into actionable insights and reporting.',
    icon: '📊',
    href: '/solutions/ai',
  },
  {
    title: 'UX Engineering',
    description: 'Design systems and front-end architecture that keep experiences consistent and performant.',
    icon: '✨',
    href: '/solutions/web',
  },
];

export const PROCESS_STEPS = [
  { title: 'Discovery & Strategy', body: 'We align on goals, scope, success metrics, and technical constraints. No build begins without a clear North Star.', icon: '🔍' },
  { title: 'Architecture Design', body: 'System design, data models, and integration blueprints. We choose stack and patterns that fit your scale and team.', icon: '📐' },
  { title: 'Agile Development', body: 'Sprint-based delivery with demos and feedback loops. You see progress every two weeks and steer as needed.', icon: '⚡' },
  { title: 'QA & Optimization', body: 'Automated testing, performance profiling, and security review. We harden before launch.', icon: '✅' },
  { title: 'Scale & Support', body: 'Launch, monitor, and iterate. We stay available for scaling, incidents, and the next phase.', icon: '🚀' },
];

export const FEATURED_CASE_STUDY = {
  title: 'AI-Powered Revenue Intelligence for Global Retail',
  client: 'Fortune 500 Retailer',
  challenge: 'Legacy reporting could not keep up with real-time demand signals or regional pricing.',
  solution: 'We built a custom ML pipeline that ingests POS, inventory, and external data to predict demand and recommend pricing.',
  results: [
    { value: '+43%', label: 'Revenue uplift in pilot regions' },
    { value: '-28%', label: 'Inventory carrying cost' },
    { value: '3x', label: 'User engagement with dashboards' },
  ],
  tags: ['Machine Learning', 'Retail', 'Data Engineering'],
  href: '/case-studies/retail-revenue-ai',
};

export const TESTIMONIALS = [
  {
    quote: 'RagexAI delivered an ML pipeline that cut our manual reporting by 60%. The system is robust and their team understood our domain from day one.',
    name: 'Sarah Chen',
    title: 'VP of Data, Meridian Finance',
  },
  {
    quote: 'We needed a partner who could scale our platform and integrate with legacy systems. RagexAI did both without the usual enterprise drama.',
    name: 'James Okonkwo',
    title: 'CTO, ScaleHealth',
  },
  {
    quote: 'From discovery to launch in six months. Clear communication, solid architecture, and they left our codebase in great shape for our team to own.',
    name: 'Elena Vasquez',
    title: 'Head of Product, EduFlow',
  },
];

export const FAQ_HOME = [
  {
    title: 'What makes RagexAI different from other development agencies?',
    content: 'We combine AI/ML engineering with enterprise-grade web and data systems. Our teams are structured around outcomes—strategy, architecture, and delivery—so you get a single team that can own the full stack from data to UI.',
  },
  {
    title: 'Do you work with startups or only enterprises?',
    content: 'Both. We work with funded startups that need to scale their product and data infrastructure, and with enterprises that need to modernize legacy systems or add AI capabilities. Engagement models range from fixed-scope projects to dedicated pods.',
  },
  {
    title: 'How do you approach security and compliance?',
    content: 'Security is part of our architecture and development process. We follow OWASP practices, use dependency scanning, and can align with SOC 2, HIPAA, or GDPR requirements. We document controls and support audits when needed.',
  },
  {
    title: 'What is a typical engagement timeline?',
    content: 'Discovery and strategy run 2–4 weeks. First production-ready increments often ship within 8–12 weeks. Full project timelines depend on scope; we break work into phases so you see value early and can adjust priorities.',
  },
];

export const INDUSTRIES_LIST = [
  { id: 'fintech', name: 'FinTech', short: 'Payments, lending, and compliance-ready platforms.', href: '/industries/fintech' },
  { id: 'edtech', name: 'EdTech', short: 'Learning platforms, assessments, and content delivery.', href: '/industries/edtech' },
  { id: 'healthcare', name: 'Healthcare', short: 'Clinical workflows, interoperability, and patient engagement.', href: '/industries/healthcare' },
  { id: 'retail', name: 'Retail', short: 'Commerce, inventory, and demand intelligence.', href: '/industries/retail' },
  { id: 'logistics', name: 'Logistics', short: 'Routing, visibility, and supply chain optimization.', href: '/industries/logistics' },
  { id: 'saas', name: 'SaaS', short: 'B2B and B2C product development and scale.', href: '/industries/saas' },
];

export const CASE_STUDIES_LIST = [
  {
    id: 'retail-revenue-ai',
    title: 'AI-Powered Revenue Intelligence for Global Retail',
    industry: 'Retail',
    tags: ['ML', 'Data', 'Retail'],
    results: ['+43% revenue', '-28% cost', '3x engagement'],
    excerpt: 'Custom ML pipeline for demand prediction and dynamic pricing.',
    href: '/case-studies/retail-revenue-ai',
  },
  {
    id: 'fintech-compliance',
    title: 'Compliance-First Lending Platform',
    industry: 'FinTech',
    tags: ['Compliance', 'SaaS', 'Security'],
    results: ['60% faster onboarding', 'Zero findings', '4 regions'],
    excerpt: 'End-to-end lending platform with built-in regulatory controls.',
    href: '/case-studies/fintech-compliance',
  },
  {
    id: 'healthcare-interop',
    title: 'Healthcare Interoperability Hub',
    industry: 'Healthcare',
    tags: ['FHIR', 'Integration', 'Enterprise'],
    results: ['20+ systems connected', 'Real-time sync', 'HIPAA'],
    excerpt: 'Unified data layer and APIs for payers and providers.',
    href: '/case-studies/healthcare-interop',
  },
];

export const BLOG_POSTS = [
  { id: 'ai-vs-traditional', title: 'When to Build Custom AI vs. Use Off-the-Shelf Models', category: 'AI', date: '2024-01-15', excerpt: 'A practical framework for CTOs and product leaders.', href: '/blog/ai-vs-traditional' },
  { id: 'saas-pricing', title: 'Architecting SaaS for Multiple Pricing Tiers', category: 'Engineering', date: '2024-01-08', excerpt: 'Feature flags, entitlements, and billing alignment.', href: '/blog/saas-pricing' },
  { id: 'data-mesh', title: 'Data Mesh in Practice: What We Learned', category: 'Data', date: '2023-12-18', excerpt: 'Domain-owned data products without chaos.', href: '/blog/data-mesh' },
];

export const CAREERS_OPENINGS = [
  { id: 'senior-fullstack', title: 'Senior Full-Stack Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
  { id: 'ml-engineer', title: 'ML Engineer', department: 'AI', location: 'Remote', type: 'Full-time' },
  { id: 'product-designer', title: 'Product Designer', department: 'Design', location: 'Hybrid', type: 'Full-time' },
];
