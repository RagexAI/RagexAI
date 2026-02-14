import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function PageHero({ title, subtitle, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="bg-page border-b border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate leading-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-6 text-lg text-slate-muted max-w-2xl">{subtitle}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                to={primaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
              >
                {primaryCta.label}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate bg-section border border-divider hover:bg-accent-soft/50 rounded-lg transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
