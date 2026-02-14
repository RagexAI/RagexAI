import PageHero from '../shared/PageHero';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

/**
 * Industry Page Template
 * Reusable template for all industry pages
 */

interface IndustryPageTemplateProps {
  industry: {
    name: string;
    title: string;
    description: string;
    icon: string;
    challenges: string[];
    ourApproach: string[];
    solutions: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
    technologies: string[];
    caseStudies: Array<{
      title: string;
      client: string;
      challenge: string;
      solution: string;
      results: string[];
    }>;
    benefits: string[];
    keyMetrics: Array<{
      metric: string;
      value: string;
    }>;
  };
}

const IndustryPageTemplate = ({ industry }: IndustryPageTemplateProps) => {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={industry.title}
        subtitle={industry.description}
        primaryCta={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCta={{ label: 'View Success Stories', href: '#case-studies' }}
      />

      {/* Key Metrics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {industry.keyMetrics.map((metric, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg opacity-90">{metric.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={`${industry.name} Industry Challenges`}
            subtitle="Common obstacles we help overcome"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {industry.challenges.map((challenge, index) => (
              <Card key={index} padding="lg" border>
                <div className="text-center">
                  <span className="text-3xl mb-4 block">⚡</span>
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
            subtitle={`How we transform ${industry.name.toLowerCase()} businesses`}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industry.ourApproach.map((item, index) => (
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

      {/* Solutions Section */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Solutions"
            subtitle={`Tailored technology solutions for ${industry.name.toLowerCase()}`}
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {industry.solutions.map((solution, index) => (
              <Card key={index} padding="lg" shadow="md" hover>
                <h3 className="text-2xl font-bold text-heading mb-3">{solution.title}</h3>
                <p className="text-body mb-6">{solution.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-accent mb-3">Key Features:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-success text-sm">✓</span>
                        <span className="text-sm text-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-section bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Technology Stack"
            subtitle={`Proven technologies for ${industry.name.toLowerCase()}`}
          />
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {industry.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-background border border-border rounded-lg text-heading font-medium hover:border-primary hover:bg-primary/5 transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Success Stories"
            subtitle={`Real results from ${industry.name.toLowerCase()} clients`}
          />
          
          <div className="space-y-8 mt-12">
            {industry.caseStudies.map((study, index) => (
              <Card key={index} padding="xl" shadow="lg">
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold text-heading mb-2">{study.title}</h3>
                    <p className="text-primary font-semibold mb-6">{study.client}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-accent mb-2">Challenge:</p>
                        <p className="text-body">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-semibold text-accent mb-2">Solution:</p>
                        <p className="text-body">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-sm font-semibold text-accent mb-4">Results:</p>
                    <div className="space-y-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-success text-xl">✓</span>
                          <p className="text-lg font-semibold text-heading">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-section bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Partner With Us"
            subtitle={`Benefits of choosing us for ${industry.name.toLowerCase()}`}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industry.benefits.map((benefit, index) => (
              <Card key={index} padding="lg" hover shadow="md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{industry.icon}</span>
                  <p className="text-lg text-heading font-semibold">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your {industry.name} Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you overcome challenges and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" to="/contact">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" to="/case-studies" className="!text-white !border-white hover:!bg-white/10">
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryPageTemplate;
