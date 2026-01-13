import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if element is already in viewport on mount
    const checkInitialVisibility = () => {
      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isVisible = rect.top < windowHeight && rect.bottom > 0;
      
      if (isVisible) {
        // Element is already visible, show it immediately
        setTimeout(() => {
          node.classList.add("visible");
        }, delay);
        return true;
      }
      return false;
    };

    // If already visible, don't set up observer
    if (checkInitialVisibility()) {
      return;
    }

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
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px" // Trigger earlier for smoother feel
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
