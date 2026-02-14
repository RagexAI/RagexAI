import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-section bg-slate">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Build the Future?
        </h2>
        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
          Book a strategy session. We'll map your goals to a clear technical roadmap and delivery plan.
        </p>
        <Link
          to="/contact#schedule"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-slate bg-white hover:bg-slate-100 rounded-lg transition-colors"
        >
          Schedule a Strategy Session
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
