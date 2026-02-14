import AnimatedCounter from '../ui/AnimatedCounter';
import { TRUST_STATS } from '../../data/content';

const PARTNERS = ['Meridian Finance', 'ScaleHealth', 'EduFlow', 'RetailOne', 'DataDrive'];

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-20 bg-section border-y border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-light mb-12">
          Trusted by innovative companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-16 opacity-80">
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="h-10 px-6 bg-page rounded-lg flex items-center justify-center text-sm font-medium text-slate-muted"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {TRUST_STATS.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-accent">
                <AnimatedCounter end={item.value} suffix={item.suffix || ''} duration={2200} />
              </p>
              <p className="mt-2 text-sm text-slate-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
