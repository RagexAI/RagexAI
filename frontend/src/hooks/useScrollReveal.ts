import { useEffect, useRef, useState } from 'react';

const defaultOptions = { threshold: 0.08, rootMargin: '0px 0px -40px 0px' };

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options = defaultOptions) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      options
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, visible };
}
