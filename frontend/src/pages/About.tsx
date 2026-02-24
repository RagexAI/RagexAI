import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const LEADERSHIP = [
  {
    name: "Sanuj Bhagat",
    role: "CEO & Co-founder",
    bio: "Intern at Rawyal with 1+ year of freelance experience delivering high-quality web and mobile products.",
    image: "/RagexAI-website/images/team/sanuj.png",
  },
  {
    name: "Shrey Shukla",
    role: "CTO & Co-founder",
    bio: "Intern at Agoda and former intern at Heyev, focused on system architecture and performance-driven applications.",
    image: "/RagexAI-website/images/team/shrey.png",
  },
  {
    name: "Shagun Yadav",
    role: "Founder",
    bio: "Intern at Candex AI, contributing to product execution and modern application development.",
    image: "/RagexAI-website/images/team/shagun.png",
  },
  {
    name: "Aditya Kumar Arya",
    role: "Founder",
    bio: "Worked at Ingenious E-Brain, RemoteEngine, LiquidMind AI, and Foodbot.ai, building RAG systems, fine-tuning LLMs, developing OCR solutions, and creating low-latency voice agents.",
    image: "/RagexAI-website/images/team/aditya.png",
  },
];

const WHY_US = [
  {
    title: "Outcome-focused",
    body: "We align every sprint to business metrics and ship in phases so you see value early.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Technical depth",
    body: "Our engineers have shipped AI and web systems at scale. No handoffs to offshore juniors.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Transparent process",
    body: "You get demos, roadmaps, and access to the team. No black-box delivery.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="eyebrow">
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--blue)",
                  display: "inline-block",
                }}
              />
              About RagexAI
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="t-h1 text-center"
            style={{ maxWidth: 800, margin: "0 auto" }}
          >
            We build intelligent digital infrastructure.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="t-body text-center mx-auto mt-5"
            style={{ maxWidth: 620, color: "var(--text-secondary)" }}
          >
            RagexAI is an AI-first digital engineering firm. We help startups
            and enterprises ship AI-powered platforms, scalable web systems, and
            data solutions that last.
          </motion.p>
        </div>
      </section>

      {/* Team Image */}
      <section className="section-sm">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-image">
              <img
                src="/RagexAI-website/images/about/team.jpg"
                alt="RagexAI Team"
                className="w-full h-72 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="t-h2 mb-6">Company Story</h2>
            <div className="space-y-4">
              <p className="t-body" style={{ color: "var(--text-secondary)" }}>
                RagexAI was started by three friends who wanted to build
                real-world products that actually solve problems.
              </p>
              <p className="t-body" style={{ color: "var(--text-secondary)" }}>
                We combine AI, web development, and data engineering to deliver
                smart, reliable, and production-ready solutions. As freelancers,
                we work closely with startups and growing businesses, handling
                everything from idea to final delivery.
              </p>
              <p className="t-body" style={{ color: "var(--text-secondary)" }}>
                Our focus is simple -- clear communication, clean code, and 100%
                practical solutions without unnecessary complexity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="t-h2">Vision & Mission</h2>
            <p
              className="t-body mx-auto mt-4"
              style={{ maxWidth: 520, color: "var(--text-secondary)" }}
            >
              Where we're headed and why it matters
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="glass-card p-10 text-center"
              style={{ maxWidth: 720, margin: "0 auto" }}
            >
              <p
                className="t-body"
                style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
              >
                Our vision is to be the go-to partner for organizations that
                need to ship AI and modern web systems without the risk and cost
                of building everything in-house. Our mission is to deliver
                measurable outcomes through transparent process, strong
                engineering, and a culture of ownership.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="t-h2">Leadership</h2>
            <p
              className="t-body mx-auto mt-4"
              style={{ maxWidth: 520, color: "var(--text-secondary)" }}
            >
              The people behind RagexAI
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {LEADERSHIP.map((person, i) => (
              <motion.div
                key={person.name}
                custom={i}
                variants={fadeUp}
                className="glass-card p-6 text-center flex flex-col items-center"
              >
                <div className="w-40 h-40 mb-5 overflow-hidden rounded-2xl">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="t-h3 mb-1">{person.name}</h3>

                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--blue)",
                    marginBottom: 10,
                  }}
                >
                  {person.role}
                </p>

                <p className="t-small">{person.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="t-h2">Why Choose Us</h2>
            <p
              className="t-body mx-auto mt-4"
              style={{ maxWidth: 520, color: "var(--text-secondary)" }}
            >
              What sets RagexAI apart
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                className="glass-card p-7"
              >
                <div className="icon-box mb-5">{item.icon}</div>
                <h3 className="t-h3 mb-2">{item.title}</h3>
                <p className="t-small">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center"
          >
            <h2 className="t-h2 mb-4">Join Us</h2>
            <p
              className="t-body mx-auto mb-8"
              style={{ maxWidth: 480, color: "var(--text-secondary)" }}
            >
              We're always looking for talented engineers and designers to join
              the team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/careers" className="btn-primary">
                View Open Roles
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link to="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
