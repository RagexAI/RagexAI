import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import { CAREERS_OPENINGS } from '../data/content';

export default function CareerDetail() {
  const { id } = useParams<{ id: string }>();
  const job = CAREERS_OPENINGS.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-slate-muted">Role not found.</p>
        <Link to="/careers" className="mt-4 inline-block text-accent font-semibold">View all roles</Link>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={job.title}
        subtitle={`${job.department} · ${job.location} · ${job.type}`}
        primaryCta={{ label: 'Apply now', href: '/contact?apply=' + job.id }}
      />
      <section className="py-section bg-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-muted leading-relaxed mb-8">
            We're looking for someone who can own delivery, work with clients and internal teams, and raise the bar on quality. You'll work on AI and web systems across industries. If that sounds like you, we'd love to hear from you.
          </p>
          <Link
            to={'/contact?apply=' + job.id}
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
          >
            Apply for this role
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
