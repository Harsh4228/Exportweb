"use client";
import { useEffect, useState, useRef } from "react";

export default function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}
