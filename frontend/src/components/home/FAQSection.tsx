import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';
import { FAQ_HOME } from '../../data/content';

export default function FAQSection() {
  return (
    <section id="faq" className="py-section bg-page">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Common questions about working with RagexAI."
          />
        </ScrollReveal>
        <ScrollReveal className="mt-14">
          <Accordion items={FAQ_HOME.map((item) => ({ title: item.title, content: item.content }))} />
        </ScrollReveal>
      </div>
    </section>
  );
}
