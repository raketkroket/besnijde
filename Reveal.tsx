import { createElement, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'span' | 'li' | 'article';
  stagger?: boolean;
}

export function Reveal({ children, className = '', as = 'div', stagger = false }: RevealProps) {
  const { ref, isVisible } = useReveal();

  return createElement(as, {
    ref,
    className: `${stagger ? 'reveal-stagger' : 'reveal'} ${isVisible ? 'is-visible' : ''} ${className}`,
  }, children);
}

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
}

export function ImageReveal({ children, className = '' }: ImageRevealProps) {
  return (
    <div className={`image-reveal is-visible ${className}`}>
      {children}
    </div>
  );
}

export function LineGrow({ className = '' }: { className?: string }) {
  const { ref, isVisible } = useReveal();

  return (
    <div ref={ref} className={`line-grow ${isVisible ? 'is-visible' : ''} ${className}`} />
  );
}
