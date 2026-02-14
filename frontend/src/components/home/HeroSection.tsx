import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative bg-page overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0F172A 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[2.75rem] font-bold text-slate leading-tight tracking-tight">
              Engineering Intelligent Digital Infrastructure
            </h1>
            <p className="mt-6 text-lg text-slate-muted max-w-xl leading-relaxed">
              We build AI-powered platforms, scalable web systems, and enterprise-grade software for startups and global brands.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
              >
                Start a Project
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate bg-section border border-divider hover:border-slate-300 hover:bg-accent-soft/50 rounded-lg transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-[4/3] animate-float rounded-xl bg-section border border-divider shadow-card overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent-soft flex items-center justify-center">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-light">System architecture & dashboards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
