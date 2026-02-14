interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ title, subtitle, centered = true, className = '' }: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-heading ${className}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-body text-lg max-w-2xl ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  );
}
