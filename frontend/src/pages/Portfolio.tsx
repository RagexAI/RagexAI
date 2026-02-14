import { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'AI' | 'E-commerce' | 'Enterprise' | 'SaaS' | 'FinTech' | 'Healthcare';
  image: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: 'ai-powered-crm',
    title: 'AI-Powered CRM Platform',
    description: 'Enterprise CRM with AI-driven insights and automation',
    category: 'AI',
    image: '/images/portfolio/ai-crm.jpg',
    technologies: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
    metrics: [
      { label: 'Increased Sales', value: '40%' },
      { label: 'Time Saved', value: '60%' },
    ],
    link: '/case-studies/ai-crm',
  },
  {
    id: 'ecommerce-marketplace',
    title: 'Multi-Vendor Marketplace',
    description: 'Scalable marketplace platform connecting 500+ vendors',
    category: 'E-commerce',
    image: '/images/portfolio/marketplace.jpg',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'AWS'],
    metrics: [
      { label: 'GMV', value: '$5M+' },
      { label: 'Active Vendors', value: '500+' },
    ],
    link: '/case-studies/marketplace',
  },
  {
    id: 'healthcare-platform',
    title: 'Telemedicine Platform',
    description: 'HIPAA-compliant telehealth solution',
    category: 'Healthcare',
    image: '/images/portfolio/telehealth.jpg',
    technologies: ['React', 'WebRTC', 'Node.js', 'AWS'],
    metrics: [
      { label: 'Consultations', value: '10K+' },
      { label: 'Patient Satisfaction', value: '85%' },
    ],
    link: '/case-studies/telehealth',
  },
  {
    id: 'fintech-app',
    title: 'Digital Lending Platform',
    description: 'AI-powered lending platform with instant approvals',
    category: 'FinTech',
    image: '/images/portfolio/lending.jpg',
    technologies: ['React Native', 'Python', 'AI/ML', 'Blockchain'],
    metrics: [
      { label: 'Loan Volume', value: '10x' },
      { label: 'Approval Time', value: 'Instant' },
    ],
    link: '/case-studies/lending',
  },
  {
    id: 'saas-analytics',
    title: 'Analytics SaaS Platform',
    description: 'Real-time analytics and reporting platform',
    category: 'SaaS',
    image: '/images/portfolio/analytics.jpg',
    technologies: ['React', 'Node.js', 'ClickHouse', 'Kubernetes'],
    metrics: [
      { label: 'Users', value: '50K+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    link: '/case-studies/analytics',
  },
  {
    id: 'enterprise-erp',
    title: 'Enterprise ERP System',
    description: 'Comprehensive ERP for manufacturing industry',
    category: 'Enterprise',
    image: '/images/portfolio/erp.jpg',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Microservices'],
    metrics: [
      { label: 'Cost Reduction', value: '30%' },
      { label: 'Efficiency Gain', value: '45%' },
    ],
    link: '/case-studies/erp',
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="Explore our successful projects across industries and technologies"
        primaryCta={{ label: 'Start Your Project', href: '/contact' }}
      />

      {/* Filters */}
      <section className="py-12 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-background text-body hover:bg-primary/10 hover:text-primary border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} padding="none" shadow="md" hover to={project.link}>
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl opacity-50">🎯</span>
                </div>
                
                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-heading mb-2">{project.title}</h3>
                  <p className="text-body text-sm mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-surface border border-border rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-body">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-body text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-section bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Portfolio Highlights"
            subtitle="Our impact in numbers"
            className="text-white"
          />
          
          <div className="grid md:grid-cols-4 gap-8 mt-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Industries Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$50M+</div>
              <div className="text-lg opacity-90">Business Value Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-heading mb-6">Ready to Build Your Next Project?</h2>
          <p className="text-xl text-body mb-8">
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" to="/contact">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" to="/case-studies">
              Read Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
