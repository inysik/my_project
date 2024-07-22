import { useState, useEffect } from 'react';

export const useInView = (options) => {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], observer) => {
      setInView(entry.isIntersecting);

      if (entry.isIntersecting) {
        observer.unobserve(ref);
      }
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, inView];
};
