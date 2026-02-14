import PageHero from '../../components/shared/PageHero';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import SectionTitle from '../../components/ui/SectionTitle';
import { CORE_AI_SERVICES, AI_BENEFITS } from '../../data/ai.content';

export default function CoreAI() {
  return (
    <>
      <PageHero
        title="Core AI Services"
        subtitle="Build custom AI models and solutions tailored to your unique business needs"
        primaryCta={{ label: "Let's Build AI", href: '/contact' }}
        secondaryCta={{ label: 'View Case Studies', href: '/case-studies' }}
      />

      {/* Services Grid */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Core AI Capabilities"
            subtitle="Comprehensive AI services to power your business"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {CORE_AI_SERVICES.map((service) => (
              <Card key={service.id} padding="xl" shadow="md" hover>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl">{service.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-heading mb-2">{service.title}</h3>
                    <p className="text-body">{service.description}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-accent mb-3">Key Features:</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-success">✓</span>
                        <span className="text-sm text-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-accent mb-3">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-surface border border-border rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-accent mb-3">Use Cases:</p>
                  <ul className="space-y-1">
                    {service.useCases.map((useCase, idx) => (
                      <li key={idx} className="text-sm text-body">• {useCase}</li>
                    ))}
                  </ul>
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
            title="Why Choose Our Core AI Services"
            subtitle="Benefits of working with our AI experts"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {AI_BENEFITS.map((benefit, index) => (
              <Card key={index} padding="lg" hover>
                <div className="text-center">
                  <span className="text-4xl mb-4 block">{benefit.icon}</span>
                  <h3 className="text-lg font-bold text-heading mb-2">{benefit.title}</h3>
                  <p className="text-sm text-body">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Custom AI Solutions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how Core AI services can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" to="/contact">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" to="/case-studies" className="!text-white !border-white hover:!bg-white/10">
              View Success Stories
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
