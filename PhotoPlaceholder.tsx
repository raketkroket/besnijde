import { RefObject } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface PhotoPlaceholderProps {
  label: string;
  sublabel?: string;
  className?: string;
  aspect?: string;
  rounded?: string;
  overlay?: boolean;
}

export function PhotoPlaceholder({
  label,
  sublabel,
  className = '',
  aspect = 'aspect-[4/3]',
  rounded = 'rounded-xl2',
  overlay = false,
}: PhotoPlaceholderProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={`image-reveal ${isVisible ? 'is-visible' : ''} relative overflow-hidden bg-bcn-50 ${aspect} ${rounded} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-bcn-100 via-bcn-50 to-bcn-200/50" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 40%, rgba(23,143,227,0.12) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(140,203,243,0.1) 0%, transparent 50%)',
        }}
      />
      {overlay && <div className="absolute inset-0 bg-bcn-dark/15" />}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          className="mb-3 text-bcn-400/50"
          aria-hidden="true"
        >
          <rect x="5" y="8" width="26" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 24l8-8 6 6 6-5 9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-wider text-bcn-400/70">
          {label}
        </span>
        {sublabel && (
          <span className="mt-1 text-[11px] text-bcn-300/50">{sublabel}</span>
        )}
      </div>
    </div>
  );
}
