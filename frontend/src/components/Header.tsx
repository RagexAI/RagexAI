import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

/**
 * Updated Header Component with New Navigation Structure
 * 
 * Final Layout:
 * Left: Logo, AI First, Services, Solutions, Portfolio, Industries, About
 * Right: Let's Connect (Primary CTA)
 */

// AI First Mega Menu Items
const AI_FIRST_ITEMS = {
  'Core AI': [
    { label: 'Custom AI Model Development', href: '/ai/core-ai' },
    { label: 'NLP Solutions', href: '/ai/core-ai' },
    { label: 'Computer Vision', href: '/ai/core-ai' },
    { label: 'Predictive Analytics', href: '/ai/core-ai' },
    { label: 'Recommendation Systems', href: '/ai/core-ai' },
  ],
  'Agentic AI': [
    { label: 'Autonomous AI Agents', href: '/ai/agentic-ai' },
    { label: 'Workflow Automation Agents', href: '/ai/agentic-ai' },
    { label: 'AI Chat Assistants', href: '/ai/agentic-ai' },
    { label: 'Multi-Agent Systems', href: '/ai/agentic-ai' },
    { label: 'Business Process Automation', href: '/ai/agentic-ai' },
  ],
  'AI Solutions': [
    { label: 'AI for E-commerce', href: '/ai/solutions' },
    { label: 'AI for Healthcare', href: '/ai/solutions' },
    { label: 'AI for FinTech', href: '/ai/solutions' },
    { label: 'Enterprise AI Integration', href: '/ai/solutions' },
  ],
};

// Services Dropdown
const SERVICES_ITEMS = [
  { label: 'E-commerce Development', href: '/services/ecommerce-development' },
  { label: 'DevOps, Cloud & Security', href: '/services/devops-cloud-security' },
  { label: 'Digital Transformation', href: '/services/digital-transformation' },
  { label: 'Managed IT Services', href: '/services/managed-it-services' },
  { label: 'AI/ML & Automation', href: '/services/ai-ml-automation' },
  { label: 'Web & Mobile Development', href: '/services/web-mobile-development' },
  { label: 'SaaS Product Development', href: '/services/saas-product-development' },
];

// Solutions Dropdown
const SOLUTIONS_ITEMS = [
  { label: 'Web-Based Applications', href: '/solutions/web-applications' },
  { label: 'Enterprise Applications', href: '/solutions/enterprise-applications' },
  { label: 'CRM & ERP Solutions', href: '/solutions/crm-erp-solutions' },
  { label: 'Marketplace Platforms', href: '/solutions/marketplace-platforms' },
  { label: 'Cloud Migration', href: '/solutions/cloud-migration' },
];

// Industries Dropdown
const INDUSTRIES_ITEMS = [
  { label: 'E-commerce & Retail', href: '/industries/ecommerce' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'FinTech & Banking', href: '/industries/fintech' },
  { label: 'EdTech', href: '/industries/edtech' },
  { label: 'SaaS Companies', href: '/industries/saas' },
  { label: 'Real Estate', href: '/industries/real-estate' },
];

// About Dropdown
const ABOUT_ITEMS = [
  { label: 'About Company', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// AI First Mega Menu Component
function AIFirstMegaMenu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;
  return (
      <div className="fixed left-0 right-0 top-16 z-40 animate-menu-in">
      <div className="glass border-b border-border/80 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-8">
            {Object.entries(AI_FIRST_ITEMS).map(([category, items]) => (
              <div key={category}>
                <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">{category}</p>
                <div className="space-y-2">
                  {items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block text-sm text-body hover:text-primary transition-colors py-1.5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Standard Dropdown Component
function Dropdown({
  items,
  isOpen,
}: {
  items: { label: string; href: string }[];
  isOpen: boolean;
}) {
  if (!isOpen) return null;
  return (
    <div className="absolute left-0 top-full pt-1 z-50 min-w-[220px] animate-menu-in">
      <div className="bg-surface border border-border rounded-lg shadow-lg py-2">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="block px-4 py-2.5 text-sm text-body hover:text-primary hover:bg-primary/5 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const open = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenMenu(menu);
  };

  const close = () => {
    timeoutRef.current = window.setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass border-b border-border/80 shadow-lg shadow-black/5' : 'bg-surface/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0 tracking-wide font-bold text-heading text-xl"
            onClick={() => setOpenMenu(null)}
          >
            RagexAI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {/* AI First - Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => open('ai-first')}
              onMouseLeave={close}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-heading hover:text-primary transition-colors"
              >
                AI First
                <svg className={`w-4 h-4 transition-transform duration-200 ${openMenu === 'ai-first' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AIFirstMegaMenu isOpen={openMenu === 'ai-first'} />
            </div>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => open('services')}
              onMouseLeave={close}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-heading hover:text-primary transition-colors"
              >
                Services
                <svg className={`w-4 h-4 transition-transform duration-200 ${openMenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Dropdown items={SERVICES_ITEMS} isOpen={openMenu === 'services'} />
            </div>

            {/* Solutions */}
            <div
              className="relative"
              onMouseEnter={() => open('solutions')}
              onMouseLeave={close}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-heading hover:text-primary transition-colors"
              >
                Solutions
                <svg className={`w-4 h-4 transition-transform duration-200 ${openMenu === 'solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Dropdown items={SOLUTIONS_ITEMS} isOpen={openMenu === 'solutions'} />
            </div>

            {/* Portfolio */}
            <Link
              to="/portfolio"
              className="px-4 py-5 text-sm font-medium text-heading hover:text-primary transition-colors"
            >
              Portfolio
            </Link>

            {/* Industries */}
            <div
              className="relative"
              onMouseEnter={() => open('industries')}
              onMouseLeave={close}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-heading hover:text-primary transition-colors"
              >
                Industries
                <svg className={`w-4 h-4 transition-transform duration-200 ${openMenu === 'industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Dropdown items={INDUSTRIES_ITEMS} isOpen={openMenu === 'industries'} />
            </div>

            {/* About */}
            <div
              className="relative"
              onMouseEnter={() => open('about')}
              onMouseLeave={close}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-heading hover:text-primary transition-colors"
              >
                About
                <svg className={`w-4 h-4 transition-transform duration-200 ${openMenu === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Dropdown items={ABOUT_ITEMS} isOpen={openMenu === 'about'} />
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-accent to-emerald-600 hover:from-accent/90 hover:to-emerald-600/90 shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Let's Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-heading"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-menu-in">
            <div className="space-y-1">
              <Link to="/" className="block py-3 px-4 text-heading hover:bg-primary/5 rounded-lg font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
              
              <div className="py-2 px-4">
                <p className="text-xs text-accent uppercase tracking-wider mb-2 font-bold">AI First</p>
                {Object.entries(AI_FIRST_ITEMS).map(([category, items]) => (
                  <div key={category} className="mb-3">
                    <p className="text-xs text-body font-semibold mb-1">{category}</p>
                    {items.map((item) => (
                      <Link key={item.label} to={item.href} className="block py-2 text-sm text-body hover:text-primary pl-2" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                    ))}
                  </div>
                ))}
              </div>

              <div className="py-2 px-4">
                <p className="text-xs text-accent uppercase tracking-wider mb-2 font-bold">Services</p>
                {SERVICES_ITEMS.map((item) => (
                  <Link key={item.label} to={item.href} className="block py-2 text-sm text-body hover:text-primary" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
              </div>

              <div className="py-2 px-4">
                <p className="text-xs text-accent uppercase tracking-wider mb-2 font-bold">Solutions</p>
                {SOLUTIONS_ITEMS.map((item) => (
                  <Link key={item.label} to={item.href} className="block py-2 text-sm text-body hover:text-primary" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
              </div>

              <Link to="/portfolio" className="block py-3 px-4 text-heading hover:bg-primary/5 rounded-lg font-medium" onClick={() => setMobileOpen(false)}>Portfolio</Link>

              <div className="py-2 px-4">
                <p className="text-xs text-accent uppercase tracking-wider mb-2 font-bold">Industries</p>
                {INDUSTRIES_ITEMS.map((item) => (
                  <Link key={item.label} to={item.href} className="block py-2 text-sm text-body hover:text-primary" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
              </div>

              <Link to="/about" className="block py-3 px-4 text-heading hover:bg-primary/5 rounded-lg font-medium" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/contact" className="block py-3 px-4" onClick={() => setMobileOpen(false)}>
                <span className="inline-flex items-center justify-center w-full py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-accent to-emerald-600 shadow-lg shadow-accent/25">Let's Connect</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
