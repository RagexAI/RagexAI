import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { IconArrowRight, IconCpu, IconCart, IconHospital, IconDollarSign } from '../icons/FeatureIcons';

const FEATURED_PROJECTS = [
  { title: 'AI-Powered CRM Platform', category: 'AI', metric: '40% sales increase', href: '/portfolio', Icon: IconCpu, gradient: 'from-primary/20 to-violet-500/20' },
  { title: 'Multi-Vendor E-commerce Marketplace', category: 'E-commerce', metric: '$5M+ GMV', href: '/portfolio', Icon: IconCart, gradient: 'from-accent/20 to-emerald-500/20' },
  { title: 'Telemedicine Platform', category: 'Healthcare', metric: '10K+ consultations', href: '/portfolio', Icon: IconHospital, gradient: 'from-cyan-500/20 to-primary/20' },
  { title: 'Digital Lending Platform', category: 'FinTech', metric: 'Instant approvals', href: '/portfolio', Icon: IconDollarSign, gradient: 'from-secondary/20 to-primary/20' },
];

export default function PortfolioPreviewSection() {
  return (
    <section className="py-section bg-background gradient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Portfolio Preview"
            subtitle="Featured projects across AI, E-commerce, and Enterprise"
          />
        </ScrollReveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <ScrollReveal key={project.title}>
              <Link
                to={project.href}
                className="group block h-full rounded-2xl border border-border bg-white overflow-hidden shadow-sm gradient-card-hover"
              >
                <div className={`relative aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center p-6`}>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-lg bg-white/60 backdrop-blur-sm" />
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-lg bg-white/80 p-2 shadow-sm">
                    <project.Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg font-bold text-heading mt-2 mb-1">{project.title}</h3>
                  <p className="text-sm text-body font-medium">{project.metric}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 group-hover:gap-2 gap-1 transition-all">
                    View project
                    <IconArrowRight className="w-4 h-4 flex-shrink-0" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-heading rounded-xl border-2 border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
          >
            View All Portfolio
            <IconArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
