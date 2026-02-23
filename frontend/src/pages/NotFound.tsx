import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTE_PATHS } from '../config/route/routes';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: 500, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="stat-number" style={{ fontSize: 80, marginBottom: 8 }}>404</p>
          <h1 className="t-h2 mb-3">Page Not Found</h1>
          <p className="t-body mb-8" style={{ color: 'var(--text-secondary)' }}>
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link to={ROUTE_PATHS.HOME} className="btn-primary">
            Go Back Home
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
