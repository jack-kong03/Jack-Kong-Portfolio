import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          // Apply delay if specified
          setTimeout(() => {
            node.classList.add("visible");
          }, delay);
          obs.unobserve(node); // only animate once
        }
      },
      { 
        threshold: 0.15, 
        rootMargin: "0px 0px -80px 0px" // Trigger earlier for smoother feel
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};
