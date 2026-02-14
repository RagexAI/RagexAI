import AnimatedCounter from '../ui/AnimatedCounter';
import { TRUST_STATS } from '../../data/content';

const PARTNERS = ['Meridian Finance', 'ScaleHealth', 'EduFlow', 'RetailOne', 'DataDrive'];

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-20 bg-surface/80 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-body/80 uppercase tracking-wider mb-12">
          Trusted by innovative companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mb-16">
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="h-11 px-6 bg-background rounded-xl border border-border flex items-center justify-center text-sm font-medium text-body/80 shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {TRUST_STATS.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-accent to-emerald-600 bg-clip-text text-transparent">
                <AnimatedCounter end={item.value} suffix={item.suffix || ''} duration={2200} />
              </p>
              <p className="mt-2 text-sm font-medium text-body">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
