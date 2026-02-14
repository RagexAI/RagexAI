import { useState, ReactNode } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-divider last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left text-slate font-medium hover:text-accent transition-colors"
      >
        {title}
        <svg
          className={`w-5 h-5 text-slate-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-5 text-slate-muted leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: ReactNode }[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="divide-y-0">
      {items.map((item, i) => (
        <AccordionItem key={item.title} title={item.title} defaultOpen={i === 0}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
