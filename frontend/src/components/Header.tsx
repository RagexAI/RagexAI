import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

/* ─── Nav data ───────────────────────────────────────────────── */
const AI_FIRST_ITEMS = {
  'Core AI': [
    { label: 'Custom AI Model Development', href: '/ai/core-ai/custom-ai-models',    desc: 'Fine-tuned LLMs for your domain' },
    { label: 'NLP Solutions',               href: '/ai/core-ai/nlp-solutions',        desc: 'Text understanding & generation' },
    { label: 'Computer Vision',             href: '/ai/core-ai/computer-vision',      desc: 'Image & video intelligence' },
    { label: 'Predictive Analytics',        href: '/ai/core-ai/predictive-analytics', desc: 'Forecast outcomes with precision' },
    { label: 'Recommendation Systems',      href: '/ai/core-ai/recommendation-systems', desc: 'Personalisation at scale' },
  ],
  'Agentic AI': [
    { label: 'Autonomous AI Agents',  href: '/ai/agentic-ai/autonomous-agents',   desc: 'Self-directed reasoning systems' },
    { label: 'Workflow Automation',   href: '/ai/agentic-ai/workflow-automation',  desc: 'End-to-end process automation' },
    { label: 'AI Chat Assistants',    href: '/ai/agentic-ai/ai-assistants',        desc: 'Intelligent conversational AI' },
    { label: 'Multi-Agent Systems',   href: '/ai/agentic-ai/multi-agent-systems',  desc: 'Collaborative AI architectures' },
    { label: 'Business Process AI',   href: '/ai/agentic-ai/business-automation',  desc: 'Automate complex business logic' },
  ],
  'AI Solutions': [
    { label: 'AI for E-commerce',         href: '/ai/solutions/ecommerce', desc: 'Personalisation & dynamic pricing' },
    { label: 'AI for Healthcare',         href: '/ai/solutions/healthcare', desc: 'HIPAA-compliant clinical AI' },
    { label: 'AI for FinTech',            href: '/ai/solutions/fintech',   desc: 'Fraud detection & credit scoring' },
    { label: 'Enterprise AI Integration', href: '/ai/solutions/saas',      desc: 'AI-powered SaaS copilots' },
  ],
};

const SERVICES_ITEMS = [
  { label: 'AI/ML & Automation',       href: '/services/ai-ml-automation',         desc: 'Custom models, MLOps, pipelines' },
  { label: 'E-commerce Development',   href: '/services/ecommerce-development',     desc: 'High-conversion storefronts' },
  { label: 'DevOps, Cloud & Security', href: '/services/devops-cloud-security',     desc: 'Kubernetes, CI/CD, zero-trust' },
  { label: 'Digital Transformation',   href: '/services/digital-transformation',    desc: 'Legacy modernisation at scale' },
  { label: 'Web & Mobile Development', href: '/services/web-mobile-development',    desc: 'React, Flutter, TypeScript' },
  { label: 'SaaS Product Development', href: '/services/saas-product-development',  desc: 'From MVP to enterprise SaaS' },
  { label: 'Managed IT Services',      href: '/services/managed-it-services',       desc: '24/7 monitoring & support' },
];

const SOLUTIONS_ITEMS = [
  { label: 'Web Applications',       href: '/solutions/web-applications',       desc: 'Fast, SEO-ready web platforms' },
  { label: 'Enterprise Applications',href: '/solutions/enterprise-applications', desc: 'SSO, RBAC, audit-grade systems' },
  { label: 'CRM & ERP Solutions',    href: '/solutions/crm-erp-solutions',       desc: 'AI-powered business operations' },
  { label: 'Marketplace Platforms',  href: '/solutions/marketplace-platforms',   desc: 'Two-sided AI marketplaces' },
  { label: 'Cloud Migration',        href: '/solutions/cloud-migration',         desc: 'Zero-downtime cloud migration' },
];

const INDUSTRIES_ITEMS = [
  { label: 'E-commerce & Retail', href: '/industries/ecommerce',    desc: 'Personalisation & inventory AI' },
  { label: 'Healthcare',          href: '/industries/healthcare',   desc: 'HIPAA-compliant clinical tools' },
  { label: 'FinTech & Banking',   href: '/industries/fintech',      desc: 'Fraud, scoring, robo-advisory' },
  { label: 'EdTech',              href: '/industries/edtech',       desc: 'Adaptive learning systems' },
  { label: 'SaaS Companies',      href: '/industries/saas',         desc: 'Churn prevention & AI copilots' },
  { label: 'Real Estate',         href: '/industries/real-estate',  desc: 'Valuation & lead-scoring AI' },
];

const ABOUT_ITEMS = [
  { label: 'About Company', href: '/about',   desc: 'Our story & mission' },
  { label: 'Careers',       href: '/careers', desc: "Join the team — we're hiring" },
  { label: 'Blog',          href: '/blog',    desc: 'Insights, tutorials & news' },
  { label: 'Contact',       href: '/contact', desc: 'Start a conversation' },
];

/* ─── Shared icon components ─────────────────────────────────── */
const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 16 16" fill="none"
    className={`w-3 h-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6l4 4 4-4" />
  </svg>
);

/* ─── Mega Menu (AI First) ───────────────────────────────────── */
function MegaMenu({ isOpen, navbarTop, onItemClick }: { isOpen: boolean; navbarTop: number; onItemClick: () => void }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed left-0 right-0 z-50 px-4"
      style={{ top: navbarTop, animation: 'slide-down-fade 0.22s cubic-bezier(.16,1,.3,1)' }}>
      <div
        className="max-w-5xl mx-auto rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.5)',
          boxShadow: '0 24px 64px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
        }}>
        <div className="px-8 py-8">
          <div className="grid grid-cols-3 gap-8">
            {Object.entries(AI_FIRST_ITEMS).map(([category, items]) => (
              <div key={category}>
                <p className="text-[11px] font-semibold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: 'var(--blue)' }}>
                  <span className="inline-block w-4 h-px rounded-full" style={{ background: 'var(--blue)' }} />
                  {category}
                </p>
                <ul className="space-y-0.5">
                  {items.map(item => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        onClick={onItemClick}
                        className="group flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-200"
                        style={{ color: 'inherit' }}
                        onMouseEnter={e => {
                          const t = e.currentTarget;
                          t.style.background = 'rgba(26,86,196,0.06)';
                          t.style.borderRadius = '12px';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = '';
                        }}>
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c3d5e6] group-hover:bg-[var(--blue)] transition-colors duration-200" />
                        <div className="min-w-0">
                          <span className="block text-[13px] font-medium text-[#0f172a] group-hover:text-[var(--blue)] transition-colors duration-200 leading-snug">
                            {item.label}
                          </span>
                          <span className="block text-[12px] mt-0.5 text-[var(--text-secondary)] leading-snug">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mt-6 pt-5 flex items-center justify-between flex-wrap gap-4"
            style={{ borderTop: '1px solid rgba(170,190,212,0.4)' }}>
            <span className="text-[12px] text-[var(--text-muted)]">
              Production-grade AI infrastructure · SOC 2 · GDPR · HIPAA
            </span>
            <Link
              to="/ai"
              onClick={onItemClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200"
              style={{
                color: 'var(--blue)',
                background: 'rgba(26,86,196,0.08)',
                border: '1px solid rgba(26,86,196,0.18)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(26,86,196,0.12)';
                e.currentTarget.style.borderColor = 'rgba(26,86,196,0.28)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(26,86,196,0.08)';
                e.currentTarget.style.borderColor = 'rgba(26,86,196,0.18)';
              }}>
              View all AI capabilities
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Standard dropdown ──────────────────────────────────────── */
function Dropdown({ items, isOpen, onItemClick }: { items: { label: string; href: string; desc: string }[]; isOpen: boolean; onItemClick: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
      style={{ minWidth: 260, animation: 'slide-down-fade 0.2s cubic-bezier(.16,1,.3,1)' }}>
      {/* Caret */}
      <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t rounded-sm"
        style={{ borderColor: 'rgba(0,0,0,0.06)' }} />
      <div className="relative bg-white rounded-2xl overflow-hidden"
        style={{ border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 16px 48px -8px rgba(0,0,0,0.12), 0 4px 16px -2px rgba(0,0,0,0.06)' }}>
        <ul className="py-2">
          {items.map(item => (
            <li key={item.label}>
              <Link to={item.href}
                className="group flex items-start gap-3 mx-2 px-3 py-2.5 rounded-xl transition-all duration-120"
                onClick={onItemClick}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(var(--color-primary) / 0.05)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; }}>
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full transition-colors duration-150"
                  style={{ background: '#c8d8e8' }} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate transition-colors duration-120"
                    style={{ color: 'var(--navy)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#1a56c4'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = ''; }}>
                    {item.label}
                  </div>
                  <div className="text-[11px] mt-0.5 truncate" style={{ color: 'rgba(61,80,112,0.5)' }}>{item.desc}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Logo mark ──────────────────────────────────────────────── */
function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group shrink-0">
      {/* Icon mark */}
      <div className="relative w-8 h-8 rounded-[10px] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1D6DB5, #0E8FBF)', boxShadow: '0 2px 12px rgba(29,109,181,0.30)' }}>
        {/* Stylised 'R' letterform */}
        <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white">
          <path d="M4 3h7a4 4 0 0 1 0 8H8v6H4V3zm4 5h3a1 1 0 1 0 0-2H8v2zm0 1v2.5l3.5-2.5H8z" />
        </svg>
      </div>
      {/* Word mark */}
      <span className="font-extrabold text-[17px] tracking-[-0.02em]"
        style={{ color: 'var(--navy)', letterSpacing: '-0.02em' }}>
        Ragex<span style={{ color: '#1a56c4' }}>AI</span>
      </span>
    </Link>
  );
}

/* ─── NavLink with animated underline ───────────────────────── */
function NavBtn({ label, active, onClick, transparent }: { label: string; active: boolean; onClick?: () => void; transparent?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative px-3 py-1.5 text-[13px] font-[500] tracking-[0.005em] transition-all duration-200 flex items-center gap-1.5 rounded-lg"
      style={{ color: transparent ? 'var(--navy)' : (active ? 'var(--navy)' : 'var(--text-secondary)'), fontFamily: "'Inter', sans-serif" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--navy)'; }}
      onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = ''; }}>
      {label}
      <ChevronDown open={active} />
      <span className="absolute bottom-0 left-3 right-3 h-[1.5px] rounded-full transition-all duration-300 origin-left"
        style={{ background: '#1a56c4', transform: active ? 'scaleX(1)' : 'scaleX(0)', opacity: active ? 0.8 : 0 }} />
    </button>
  );
}

function NavLink({ label, href, transparent }: { label: string; href: string; transparent?: boolean }) {
  const location = useLocation();
  const isActive = location.pathname === href;
  return (
    <Link to={href}
      className="relative px-3 py-1.5 text-[13px] font-[500] tracking-[0.005em] transition-all duration-200 rounded-lg"
      style={{ color: transparent ? 'var(--navy)' : (isActive ? 'var(--navy)' : 'var(--text-secondary)'), fontFamily: "'Inter', sans-serif" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--navy)'; }}
      onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = ''; }}>
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-3 right-3 h-[1.5px] rounded-full"
          style={{ background: '#1a56c4', opacity: 0.8 }} />
      )}
    </Link>
  );
}

/* ─── Main Header ────────────────────────────────────────────── */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(60);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.getBoundingClientRect().height);
  });

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const open  = (menu: string) => {
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
    setOpenMenu(menu);
  };
  const close = () => { timeoutRef.current = window.setTimeout(() => setOpenMenu(null), 140); };
  const closeAll = () => {
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const navItems = [
    { key: 'ai-first',   label: 'AI First',   isMega: true,  dropdownItems: null,              href: undefined },
    { key: 'services',   label: 'Services',   isMega: false, dropdownItems: SERVICES_ITEMS,    href: undefined },
    { key: 'solutions',  label: 'Solutions',  isMega: false, dropdownItems: SOLUTIONS_ITEMS,   href: undefined },
    { key: 'portfolio',  label: 'Portfolio',  isMega: false, dropdownItems: null,              href: '/portfolio' },
    { key: 'industries', label: 'Industries', isMega: false, dropdownItems: INDUSTRIES_ITEMS,  href: undefined },
    { key: 'about',      label: 'About',      isMega: false, dropdownItems: ABOUT_ITEMS,       href: undefined },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ paddingTop: scrolled ? 10 : 0, transition: 'padding 0.45s cubic-bezier(.16,1,.3,1)' }}>
      {/* ── Nav pill ─────────────────────────────────────────── */}
      <div
        ref={navRef}
        className="transition-all duration-500"
        style={
          scrolled
            ? { maxWidth: 1100, margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }
            : { maxWidth: '100%' }
        }>
        <div
          className="transition-all duration-500"
          style={
            scrolled
              ? {
                  background: 'rgba(255,255,255,0.96)',
                  backdropFilter: 'blur(28px)',
                  WebkitBackdropFilter: 'blur(28px)',
                  borderRadius: 18,
                  border: '1px solid rgba(0,0,0,0.07)',
                  boxShadow: '0 4px 28px -4px rgba(30,50,90,0.10), 0 1px 4px rgba(30,50,90,0.05)',
                  padding: '0 22px',
                }
              : {
                  background: 'transparent',
                  padding: '0 28px',
                }
          }>
          <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ height: scrolled ? 54 : 64 }}>

            {/* Logo */}
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map(nav =>
                nav.href ? (
                  <NavLink key={nav.key} label={nav.label} href={nav.href} transparent={!scrolled} />
                ) : (
                  <div key={nav.key} className="relative" onMouseEnter={() => open(nav.key)} onMouseLeave={close}>
                    <NavBtn label={nav.label} active={openMenu === nav.key} transparent={!scrolled} />
                    {nav.isMega
                      ? <MegaMenu isOpen={openMenu === nav.key} navbarTop={navHeight} onItemClick={closeAll} />
                      : nav.dropdownItems && <Dropdown items={nav.dropdownItems} isOpen={openMenu === nav.key} onItemClick={closeAll} />
                    }
                  </div>
                )
              )}
            </nav>

            {/* Right: CTA group */}
            <div className="hidden lg:flex items-center gap-2">
              <Link to="/contact"
                className="group relative inline-flex items-center gap-2 rounded-xl text-[13px] font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                onClick={closeAll}
                style={{
                  padding: '9px 20px',
                  background: 'linear-gradient(135deg, #1D6DB5, #0E8FBF)',
                  boxShadow: scrolled ? '0 2px 14px rgba(29,109,181,0.30)' : '0 4px 22px rgba(29,109,181,0.35)',
                  fontFamily: "'Inter', sans-serif",
                }}>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }} />
                <span className="relative">Let's Connect</span>
                <svg className="relative w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl transition-colors duration-150"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMobileOpen(!mobileOpen)}>
              <span className={`block w-[18px] h-[1.5px] rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} style={{ background: 'currentColor' }} />
              <span className={`block h-[1.5px] rounded-full transition-all duration-200 ${mobileOpen ? 'w-0 opacity-0' : 'w-[14px]'}`} style={{ background: 'currentColor' }} />
              <span className={`block w-[18px] h-[1.5px] rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} style={{ background: 'currentColor' }} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ─────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden"
          style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 32px -4px rgba(0,0,0,0.08)', animation: 'slide-down-fade 0.2s ease' }}>
          <div className="max-w-lg mx-auto px-5 py-5 max-h-[80vh] overflow-y-auto space-y-0.5">
            {navItems.map(nav =>
              nav.href ? (
                <Link key={nav.key} to={nav.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium"
                  style={{ color: 'var(--navy)' }}
                  onClick={closeAll}>
                  {nav.label}
                </Link>
              ) : (
                <div key={nav.key}>
                  <p className="px-4 pt-5 pb-2 text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: '#1a56c4' }}>
                    {nav.label}
                  </p>
                  {nav.isMega
                    ? Object.entries(AI_FIRST_ITEMS).map(([cat, items]) => (
                        <div key={cat} className="px-4 mb-2">
                          <p className="text-[10px] font-semibold mb-1.5" style={{ color: 'hsl(var(--color-body) / 0.45)' }}>{cat}</p>
                          {items.map(i => (
                            <Link key={i.label} to={i.href}
                              className="block py-2 pl-3 text-sm"
                              style={{ color: 'var(--text-secondary)' }}
                              onClick={closeAll}>
                              {i.label}
                            </Link>
                          ))}
                        </div>
                      ))
                    : nav.dropdownItems?.map(i => (
                        <Link key={i.label} to={i.href}
                          className="flex items-start gap-3 px-4 py-2.5 rounded-xl"
                          style={{ color: 'var(--text-secondary)' }}
                          onClick={closeAll}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#c8d8e8' }} />
                          <div>
                            <div className="text-sm font-medium" style={{ color: 'var(--navy)' }}>{i.label}</div>
                            <div className="text-[11px]" style={{ color: 'hsl(var(--color-body)/0.5)' }}>{i.desc}</div>
                          </div>
                        </Link>
                      ))
                  }
                </div>
              )
            )}
            <div className="pt-4 pb-1 px-1">
              <Link to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-semibold text-white"
                onClick={closeAll}
                style={{ background: 'linear-gradient(135deg, #1a56c4, hsl(var(--color-secondary)))', boxShadow: '0 4px 16px hsl(var(--color-primary)/.3)' }}>
                Let's Connect
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
