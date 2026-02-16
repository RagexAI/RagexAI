import { useParams } from 'react-router-dom';
import Accordion from '../../components/ui/Accordion';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import SectionTitle from '../../components/ui/SectionTitle';
import { industryDetails } from '../../data/industryDetails';
import { industryPageData } from '../../data/ai/industryPageData';

export default function AISolutionsByIndustry() {
  const { slug } = useParams();
  const industryKey = slug ?? 'ecommerce';
  const industry =
    industryDetails[industryKey as keyof typeof industryDetails] ?? industryDetails.ecommerce;
  const industryPage =
    industryPageData[industryKey as keyof typeof industryPageData] ?? industryPageData.ecommerce;

  return (
    <>
      <section
        className="relative bg-slate-950 text-white border-b border-white/10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0.78)), url('https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Use Ecommerce{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
              AI Solutions
            </span>{' '}
            Before Your Competitors Do.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Accelerate conversion, automate merchandising, and unlock profit with AI built for modern retail.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" to="/contact">
              Get a Free AI Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/contact"
              className="!text-white !border-white/40 hover:!bg-white/10"
            >
              Talk to Experts
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Detail Section */}
      <section id="solutions" className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mt-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">{industry.title}</h2>
              <div className="space-y-4">
                {industry.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-white">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services / Capabilities */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={industryPage.services.title}
            subtitle={industryPage.services.subtitle}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {industryPage.services.items.map((item) => (
              <Card key={item.title} padding="xl" hover>
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-heading mb-2">{item.title}</h3>
                <p className="text-sm text-body">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-section bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={industryPage.process.title}
            subtitle={industryPage.process.subtitle}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {industryPage.process.steps.map((step, index) => (
              <Card key={step.title} padding="lg" hover>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-heading mb-2">{step.title}</h3>
                  <p className="text-sm text-body">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={industryPage.benefits.title}
            subtitle={industryPage.benefits.subtitle}
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {industryPage.benefits.items.map((item) => (
              <Card key={item.title} padding="lg" shadow="md">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-heading mb-3">{item.title}</h3>
                <p className="text-body">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={industryPage.techStack.title}
            subtitle={industryPage.techStack.subtitle}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {industryPage.techStack.categories.map((category) => (
              <Card key={category.title} padding="lg" shadow="md">
                <h3 className="text-xl font-bold text-heading mb-3">{category.title}</h3>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-sm text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
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

      {/* FAQ Section */}
      <section className="py-section bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={industryPage.faq.title} />

          <div className="mt-12">
            <Accordion
              items={industryPage.faq.items.map((item) => ({
                title: item.question,
                content: item.answer,
              }))}
            />
          </div>
        </div>
      </section>
    </>
  );
}
