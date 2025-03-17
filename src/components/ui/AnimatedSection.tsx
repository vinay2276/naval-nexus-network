
import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left';
  delay?: number; // in milliseconds
  threshold?: number; // value between 0 and 1
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.2,
  className = '',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const observedRef = useRef<boolean>(false);

  useEffect(() => {
    const section = sectionRef.current;
    
    if (!section) return;
    
    // Initial state (hidden)
    section.style.opacity = '0';
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting && !observedRef.current) {
          observedRef.current = true;
          
          // Add delay if specified
          setTimeout(() => {
            section.style.opacity = '1';
            section.classList.add(`animate-${animation}`);
          }, delay);
          
          // Unobserve after animation is triggered
          observer.unobserve(section);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );
    
    observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [animation, delay, threshold]);

  return (
    <div 
      ref={sectionRef} 
      className={`transition-opacity duration-700 will-change-transform ${className}`}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
