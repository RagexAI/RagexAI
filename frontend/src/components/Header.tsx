import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const AI_SOLUTIONS = [
  { label: 'Generative AI', href: '/solutions/ai' },
  { label: 'AI Agents', href: '/solutions/ai' },
  { label: 'Machine Learning', href: '/solutions/ai' },
  { label: 'NLP Systems', href: '/solutions/ai' },
  { label: 'Computer Vision', href: '/solutions/ai' },
];

const WEB_SOLUTIONS = [
  { label: 'Custom Web Development', href: '/solutions/web' },
  { label: 'SaaS Platforms', href: '/solutions/web' },
  { label: 'Enterprise Systems', href: '/solutions/web' },
  { label: 'eCommerce Solutions', href: '/solutions/web' },
  { label: 'UI/UX Engineering', href: '/solutions/web' },
];

const INDUSTRIES = [
  { label: 'FinTech', href: '/industries/fintech' },
  { label: 'EdTech', href: '/industries/edtech' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Logistics', href: '/industries/logistics' },
  { label: 'Retail', href: '/industries/retail' },
];

function MegaMenu({
  title,
  items,
  isOpen,
}: {
  title: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed left-0 right-0 top-16 z-40 animate-menu-in">
      <div className="bg-section border-b border-divider shadow-card">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-xs font-semibold text-slate-light uppercase tracking-wider mb-4">{title}</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm text-slate hover:text-accent transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdown({
  items,
  isOpen,
}: {
  items: { label: string; href: string }[];
  isOpen: boolean;
}) {
  if (!isOpen) return null;
  return (
    <div className="absolute left-0 top-full pt-1 z-50 min-w-[180px] animate-menu-in">
      <div className="bg-section border border-divider rounded-lg shadow-card py-2">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="block px-4 py-2.5 text-sm text-slate hover:text-accent hover:bg-accent-soft transition-colors"
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
      className={`sticky top-0 z-40 bg-section transition-all duration-300 ${
        scrolled ? 'border-b border-divider' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center shrink-0 tracking-wide font-semibold text-slate text-lg"
            onClick={() => setOpenMenu(null)}
          >
            RagexAI
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            <div
              className="relative"
              onMouseEnter={() => open('ai')}
              onMouseLeave={close}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-slate hover:text-accent transition-colors"
              >
                AI Solutions
                <svg className={`w-4 h-4 transition-transform duration-200 ${openMenu === 'ai' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <MegaMenu title="AI Solutions" items={AI_SOLUTIONS} isOpen={openMenu === 'ai'} />
            </div>

            <div
              className="relative"
              onMouseEnter={() => open('web')}
              onMouseLeave={close}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-slate hover:text-accent transition-colors"
              >
                Web Solutions
                <svg className={`w-4 h-4 transition-transform duration-200 ${openMenu === 'web' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <MegaMenu title="Web Solutions" items={WEB_SOLUTIONS} isOpen={openMenu === 'web'} />
            </div>

            <div
              className="relative"
              onMouseEnter={() => open('industries')}
              onMouseLeave={close}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-slate hover:text-accent transition-colors"
              >
                Industries
                <svg className={`w-4 h-4 transition-transform duration-200 ${openMenu === 'industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Dropdown items={INDUSTRIES} isOpen={openMenu === 'industries'} />
            </div>

            <Link
              to="/case-studies"
              className="px-4 py-5 text-sm font-medium text-slate hover:text-accent transition-colors"
            >
              Case Studies
            </Link>

            <Link
              to="/about"
              className="px-4 py-5 text-sm font-medium text-slate hover:text-accent transition-colors"
            >
              About
            </Link>

            <Link
              to="/blog"
              className="px-4 py-5 text-sm font-medium text-slate hover:text-accent transition-colors"
            >
              Blog
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="text-sm font-medium text-slate hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
            >
              Start a Project
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-slate"
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

        {mobileOpen && (
          <div className="lg:hidden border-t border-divider py-4 animate-menu-in">
            <div className="space-y-1">
              <Link to="/" className="block py-3 px-4 text-slate hover:bg-accent-soft rounded-lg" onClick={() => setMobileOpen(false)}>Home</Link>
              <div className="py-2 px-4">
                <p className="text-xs text-slate-light uppercase tracking-wider mb-2">AI Solutions</p>
                {AI_SOLUTIONS.map((item) => (
                  <Link key={item.label} to={item.href} className="block py-2.5 text-sm text-slate-muted hover:text-accent pl-2" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
              </div>
              <div className="py-2 px-4">
                <p className="text-xs text-slate-light uppercase tracking-wider mb-2">Web Solutions</p>
                {WEB_SOLUTIONS.map((item) => (
                  <Link key={item.label} to={item.href} className="block py-2.5 text-sm text-slate-muted hover:text-accent pl-2" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
              </div>
              <Link to="/case-studies" className="block py-3 px-4 text-slate hover:bg-accent-soft rounded-lg" onClick={() => setMobileOpen(false)}>Case Studies</Link>
              <Link to="/about" className="block py-3 px-4 text-slate hover:bg-accent-soft rounded-lg" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/blog" className="block py-3 px-4 text-slate hover:bg-accent-soft rounded-lg" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link to="/contact" className="block py-3 px-4 text-accent font-semibold" onClick={() => setMobileOpen(false)}>Contact</Link>
              <Link to="/contact" className="block py-3 px-4" onClick={() => setMobileOpen(false)}>
                <span className="inline-flex items-center justify-center w-full py-2.5 text-sm font-semibold text-white bg-accent rounded-lg">Start a Project</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
