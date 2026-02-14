import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-section border-t border-divider shadow-lg animate-menu-in py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium text-slate">Ready to build intelligent digital infrastructure?</p>
        <div className="flex gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
          >
            Start a Project
          </Link>
          <Link
            to="/contact#schedule"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate border border-divider hover:bg-accent-soft/50 rounded-lg transition-colors"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </div>
  );
}
