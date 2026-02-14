import { Link } from 'react-router-dom';
import { IconArrowRight } from '../icons/FeatureIcons';

export default function CTASection() {
  return (
    <section className="relative py-section overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
      <div className="absolute inset-0 bg-hero-pattern bg-pattern opacity-10" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/90 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          Let's discuss how AI-first solutions can scale your operations and drive growth.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white rounded-xl shadow-xl hover:bg-white/95 transition-all duration-300 hover:scale-[1.02]"
        >
          Let's Connect
          <IconArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
}
