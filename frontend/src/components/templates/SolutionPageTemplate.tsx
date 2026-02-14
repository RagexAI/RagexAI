import PageHero from '../shared/PageHero';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';

/**
 * Solution Page Template
 * Reusable template for all solution pages
 */

interface SolutionPageTemplateProps {
  solution: {
    title: string;
    description: string;
    icon: string;
    challenges: string[];
    ourApproach: string[];
    whatWeDeliver: string[];
    useCases: Array<{
      title: string;
      description: string;
      results: string[];
    }>;
    technologies: string[];
    benefits: string[];
  };
  caseStudies?: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

const SolutionPageTemplate = ({ solution, caseStudies }: SolutionPageTemplateProps) => {
  const faqs = [
    {
      question: `Is ${solution.title} right for my business?`,
      answer: 'We start with a discovery call to understand your needs and determine if this solution is the best fit. We provide honest recommendations even if it means suggesting alternatives.',
    },
    {
      question: 'How do you ensure the solution meets our requirements?',
      answer: 'We follow an agile development process with regular demos and feedback sessions. You are involved in every stage from planning to deployment.',
    },
    {
      question: 'What happens after the solution is deployed?',
      answer: 'We provide training, documentation, and ongoing support. We also offer maintenance packages to ensure your solution continues to perform optimally.',
    },
    {
      question: 'Can the solution scale as we grow?',
      answer: 'Absolutely. We build solutions with scalability in mind, using modern architecture patterns that can handle growth in users, data, and features.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={solution.title}
        subtitle={solution.description}
        primaryCta={{ label: "Let's Connect", href: '/contact' }}
        secondaryCta={{ label: 'View Case Studies', href: '/case-studies' }}
      />

      {/* Challenges Section */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Business Challenges"
            subtitle="Problems this solution helps you overcome"
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {solution.challenges.map((challenge, index) => (
              <Card key={index} padding="lg" border>
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">⚠️</span>
                  <p className="text-body font-medium">{challenge}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-section bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Approach"
            subtitle="How we deliver results"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {solution.ourApproach.map((item, index) => (
              <Card key={index} padding="lg" hover>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-body font-medium">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What We Deliver"
            subtitle="Comprehensive solutions tailored to your needs"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {solution.whatWeDeliver.map((item, index) => (
              <Card key={index} padding="md" border hover>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-xl flex-shrink-0">✓</span>
                  <p className="text-sm text-body font-medium">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-section bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Use Cases & Results"
            subtitle="Real-world applications and measurable outcomes"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {solution.useCases.map((useCase, index) => (
              <Card key={index} padding="lg" shadow="md">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-heading mb-2">{useCase.title}</h3>
                  <p className="text-body">{useCase.description}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent mb-2">Results:</p>
                  {useCase.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-body mb-1">
                      <span className="text-success">✓</span>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Technology Stack"
            subtitle="Proven technologies we leverage"
          />
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {solution.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-surface border border-border rounded-lg text-heading font-medium hover:border-primary hover:bg-primary/5 transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-section bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Key Benefits"
            subtitle="Why choose this solution"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {solution.benefits.map((benefit, index) => (
              <Card key={index} padding="lg" hover shadow="md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{solution.icon}</span>
                  <p className="text-lg text-heading font-semibold">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {caseStudies && caseStudies.length > 0 && (
        <section className="py-section bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Success Stories"
              subtitle="See this solution in action"
            />
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {caseStudies.map((study) => (
                <Card key={study.id} padding="lg" hover to={`/case-studies/${study.id}`}>
                  <h3 className="text-2xl font-bold text-heading mb-4">{study.title}</h3>
                  <p className="text-body mb-6">{study.description}</p>
                  <Button variant="outline" to={`/case-studies/${study.id}`}>
                    View Full Case Study →
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-section bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Common questions about this solution"
          />
          
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's explore how {solution.title.toLowerCase()} can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" to="/contact">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" to="/portfolio" className="!text-white !border-white hover:!bg-white/10">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionPageTemplate;
