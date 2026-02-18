import { Link } from 'react-router-dom';
import { IconArrowRight } from '../icons/FeatureIcons';

export default function HeroSection() {
  return (
    <section className="relative gradient-mesh overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-pattern opacity-60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Digital Product & AI Engineering Studio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-[1.1] tracking-tight">
             We Design and Build Scalable Digital Products from Idea to Launch
            </h1>
            <p className="mt-6 text-xl text-body max-w-xl leading-relaxed">
              Enterprise Web, Cloud & AI Solutions for Modern Companies
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-accent to-emerald-600 hover:from-accent/90 hover:to-emerald-600/90 shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                Let's Build Together
                <IconArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
            </div>
          </div>
          {/* Animated UI preview - tech feel */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3] animate-float rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/80 bg-gradient-to-br from-surface to-surface/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" aria-hidden />
              <div className="relative h-full flex flex-col p-8">
                <div className="flex gap-2 mb-6">
                  {['bg-primary/20', 'bg-accent/20', 'bg-secondary/20'].map((c, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${c}`} />
                  ))}
                </div>
                <div className="flex-1 grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white/60 border border-white/80 shadow-sm h-20 flex items-center justify-center"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-body/80">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>AI-powered dashboards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
