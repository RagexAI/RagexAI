import PageHero from '../../components/shared/PageHero';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import SectionTitle from '../../components/ui/SectionTitle';
import { AI_SOLUTIONS_BY_INDUSTRY } from '../../data/ai.content';

export default function AISolutionsByIndustry() {
  return (
    <>
      <PageHero
        title="AI Solutions by Industry"
        subtitle="Industry-specific AI solutions designed to solve real business problems and drive measurable results"
        primaryCta={{ label: 'Explore Solutions', href: '#solutions' }}
        secondaryCta={{ label: 'Talk to Experts', href: '/contact' }}
      />

      {/* Industry Solutions Grid */}
      <section id="solutions" className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="AI Solutions Across Industries"
            subtitle="Tailored AI solutions for your industry's unique challenges"
          />

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {AI_SOLUTIONS_BY_INDUSTRY.map((industry) => (
              <Card key={industry.id} padding="xl" shadow="lg" hover>
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-5xl">{industry.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-heading mb-2">{industry.title}</h3>
                    <p className="text-body">{industry.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-accent mb-3">AI Solutions:</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {industry.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-success">✓</span>
                        <span className="text-sm text-body">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-semibold text-accent mb-3">Business Benefits:</p>
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-primary">→</span>
                        <span className="text-sm font-medium text-heading">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="outline" to={`/industries/${industry.id.replace('ai-', '')}`} fullWidth>
                    Learn More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-section bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our AI Integration Process"
            subtitle="From strategy to deployment in a structured approach"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card padding="lg" hover>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-heading mb-2">Discovery</h3>
                <p className="text-sm text-body">Understand business challenges and identify AI opportunities</p>
              </div>
            </Card>

            <Card padding="lg" hover>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-heading mb-2">Data Assessment</h3>
                <p className="text-sm text-body">Evaluate data quality and prepare for AI model training</p>
              </div>
            </Card>

            <Card padding="lg" hover>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-heading mb-2">Development</h3>
                <p className="text-sm text-body">Build and train AI models with your business data</p>
              </div>
            </Card>

            <Card padding="lg" hover>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-heading mb-2">Deployment</h3>
                <p className="text-sm text-body">Deploy AI solutions and monitor performance</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Our AI Solutions"
            subtitle="Industry expertise combined with cutting-edge AI technology"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card padding="lg" shadow="md">
              <span className="text-4xl mb-4 block">🎯</span>
              <h3 className="text-xl font-bold text-heading mb-3">Industry Expertise</h3>
              <p className="text-body">Deep understanding of industry-specific challenges and regulatory requirements</p>
            </Card>

            <Card padding="lg" shadow="md">
              <span className="text-4xl mb-4 block">🔒</span>
              <h3 className="text-xl font-bold text-heading mb-3">Secure & Compliant</h3>
              <p className="text-body">Enterprise-grade security with compliance to industry standards (HIPAA, GDPR, SOC2)</p>
            </Card>

            <Card padding="lg" shadow="md">
              <span className="text-4xl mb-4 block">📈</span>
              <h3 className="text-xl font-bold text-heading mb-3">Measurable ROI</h3>
              <p className="text-body">Focus on business outcomes with clear metrics and continuous optimization</p>
            </Card>

            <Card padding="lg" shadow="md">
              <span className="text-4xl mb-4 block">⚡</span>
              <h3 className="text-xl font-bold text-heading mb-3">Fast Implementation</h3>
              <p className="text-body">Rapid deployment using proven frameworks and pre-trained models</p>
            </Card>

            <Card padding="lg" shadow="md">
              <span className="text-4xl mb-4 block">🔄</span>
              <h3 className="text-xl font-bold text-heading mb-3">Continuous Learning</h3>
              <p className="text-body">AI models that improve over time with feedback and new data</p>
            </Card>

            <Card padding="lg" shadow="md">
              <span className="text-4xl mb-4 block">🤝</span>
              <h3 className="text-xl font-bold text-heading mb-3">Ongoing Support</h3>
              <p className="text-body">Dedicated support team to ensure optimal performance and address issues</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-gradient-to-br from-accent via-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Industry with AI</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how industry-specific AI solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" to="/contact">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" to="/case-studies" className="!text-white !border-white hover:!bg-white/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
