import PageHero from '../shared/PageHero';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';

/**
 * Service Page Template
 * Reusable template for all service pages following consistent structure
 */

interface ServicePageTemplateProps {
  service: {
    title: string;
    description: string;
    icon: string;
    problems: string[];
    approach: string[];
    features: string[];
    technologies: string[];
    benefits: string[];
    pricing?: {
      starter: string;
      enterprise: string;
    };
  };
  caseStudies?: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

const ServicePageTemplate = ({ service, caseStudies }: ServicePageTemplateProps) => {
  const faqs = [
    {
      question: `How long does it take to implement ${service.title}?`,
      answer: 'Timeline varies based on project scope and complexity. Typical projects range from 8-16 weeks for MVP, with ongoing enhancements.',
    },
    {
      question: 'What is included in the pricing?',
      answer: 'Our pricing includes discovery, design, development, testing, deployment, and post-launch support. We provide transparent pricing with no hidden costs.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer maintenance and support packages to ensure your solution runs smoothly and evolves with your business needs.',
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We specialize in integrating with existing tools, databases, and third-party services to create a seamless ecosystem.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={service.title}
        subtitle={service.description}
        primaryCta={{ label: "Let's Build Together", href: '/contact' }}
        secondaryCta={{ label: 'View Portfolio', href: '/case-studies' }}
      />

      {/* Problems Section */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Challenges We Solve"
            subtitle="Common problems businesses face that we help overcome"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.problems.map((problem, index) => (
              <Card key={index} padding="lg" hover>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">❌</span>
                  <p className="text-body">{problem}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-section bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Approach"
            subtitle="How we deliver exceptional results"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.approach.map((item, index) => (
              <Card key={index} padding="lg" border>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-body font-medium">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Features We Build"
            subtitle="Comprehensive features tailored to your needs"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {service.features.map((feature, index) => (
              <Card key={index} padding="md" hover border>
                <div className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <p className="text-sm text-body">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-section bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Technology Stack"
            subtitle="Modern, proven technologies we use"
          />
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-background border border-border rounded-lg text-heading font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Benefits & Results"
            subtitle="Measurable impact on your business"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.benefits.map((benefit, index) => (
              <Card key={index} padding="lg" shadow="md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{service.icon}</span>
                  <p className="text-lg text-heading font-semibold">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {caseStudies && caseStudies.length > 0 && (
        <section className="py-section bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Success Stories"
              subtitle="Real results from real clients"
            />
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {caseStudies.map((study) => (
                <Card key={study.id} padding="lg" hover to={`/case-studies/${study.id}`}>
                  <h3 className="text-2xl font-bold text-heading mb-4">{study.title}</h3>
                  <p className="text-body mb-6">{study.description}</p>
                  <Button variant="outline" to={`/case-studies/${study.id}`}>
                    Read Case Study →
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-section bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Common questions about our services"
          />
          
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how {service.title.toLowerCase()} can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" to="/contact">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" to="/case-studies" className="!text-white !border-white hover:!bg-white/10">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePageTemplate;
