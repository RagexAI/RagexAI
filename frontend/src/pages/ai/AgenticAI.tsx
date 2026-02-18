import { useParams } from 'react-router-dom';
import PageHero from '../../components/shared/PageHero';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import SectionTitle from '../../components/ui/SectionTitle';
import { AGENTIC_AI_SERVICES, AI_BENEFITS } from '../../data/ai.content';

export default function AgenticAI() {
  const { slug } = useParams();
  const selectedService = slug ? AGENTIC_AI_SERVICES.find((service) => service.id === slug) : undefined;
  const services = selectedService ? [selectedService] : AGENTIC_AI_SERVICES;

  return (
    <>
      <PageHero
        title={selectedService ? selectedService.title : 'Agentic AI Solutions'}
        subtitle={
          selectedService
            ? selectedService.description
            : 'Deploy autonomous AI agents that think, learn, and act independently to automate complex workflows'
        }
        primaryCta={{ label: 'Deploy AI Agents', href: '/contact' }}
      />

      {/* What is Agentic AI Section */}
      <section className="py-section bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-heading mb-6">What is Agentic AI?</h2>
          <p className="text-lg text-body leading-relaxed">
            Agentic AI refers to autonomous intelligent systems that can make decisions, take actions, and learn from outcomes without constant human intervention. These AI agents can understand context, plan multi-step tasks, and adapt their strategies to achieve defined goals.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card padding="lg">
              <span className="text-4xl mb-4 block">🎯</span>
              <h3 className="font-bold text-heading mb-2">Goal-Oriented</h3>
              <p className="text-sm text-body">Agents work towards defined objectives autonomously</p>
            </Card>
            <Card padding="lg">
              <span className="text-4xl mb-4 block">🔄</span>
              <h3 className="font-bold text-heading mb-2">Self-Learning</h3>
              <p className="text-sm text-body">Continuously improve from experience and feedback</p>
            </Card>
            <Card padding="lg">
              <span className="text-4xl mb-4 block">⚡</span>
              <h3 className="font-bold text-heading mb-2">Action-Taking</h3>
              <p className="text-sm text-body">Execute tasks and make decisions independently</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={selectedService ? 'Agentic AI Capability' : 'Agentic AI Services'}
            subtitle={
              selectedService
                ? 'Focused agentic AI expertise tailored to your workflow'
                : 'Intelligent automation solutions for modern businesses'
            }
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {services.map((service) => (
              <Card key={service.id} padding="xl" shadow="md" hover>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl">{service.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-heading mb-2">{service.title}</h3>
                    <p className="text-body">{service.description}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-accent mb-3">Capabilities:</p>
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
                  <p className="text-sm font-semibold text-accent mb-3">Applications:</p>
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

      {/* Use Case Examples */}
      <section className="py-section bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Real-World Applications"
            subtitle="See how agentic AI transforms business operations"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card padding="lg" shadow="md">
              <h3 className="text-xl font-bold text-heading mb-4">Customer Support Agent</h3>
              <p className="text-body mb-4">Autonomous AI agent that handles customer inquiries, resolves issues, and escalates complex cases.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-success">✓</span>
                  <span className="text-body">80% reduction in response time</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-success">✓</span>
                  <span className="text-body">24/7 availability</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-success">✓</span>
                  <span className="text-body">90% customer satisfaction</span>
                </div>
              </div>
            </Card>

            <Card padding="lg" shadow="md">
              <h3 className="text-xl font-bold text-heading mb-4">Sales Assistant Agent</h3>
              <p className="text-body mb-4">AI agent that qualifies leads, schedules meetings, and provides personalized product recommendations.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-success">✓</span>
                  <span className="text-body">3x more qualified leads</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-success">✓</span>
                  <span className="text-body">40% higher conversion</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-success">✓</span>
                  <span className="text-body">Zero manual follow-up</span>
                </div>
              </div>
            </Card>

            <Card padding="lg" shadow="md">
              <h3 className="text-xl font-bold text-heading mb-4">Research Agent</h3>
              <p className="text-body mb-4">Intelligent agent that gathers information, analyzes data, and generates comprehensive reports.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-success">✓</span>
                  <span className="text-body">10x faster research</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-success">✓</span>
                  <span className="text-body">Comprehensive insights</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-success">✓</span>
                  <span className="text-body">Continuous monitoring</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Agentic AI?"
            subtitle="Transform your business with autonomous intelligence"
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
      <section className="py-section bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Deploy AI Agents?</h2>
          <p className="text-xl mb-8 opacity-90">
            Automate complex workflows and scale your operations with agentic AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" to="/contact">
              Start Your AI Journey
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
