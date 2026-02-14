import { useEffect, useState } from 'react';

export function useCountUp(end: number, duration = 2000, startOn = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOn) return;
    let start: number;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, startOn]);

  return count;
}
