interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showText?: boolean;
}

export function Logo({ className = '', variant = 'dark', showText = true }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-bcn-dark';
  const subColor = variant === 'light' ? 'text-bcn-light' : 'text-bcn-blue';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        {/* Interlocking curved forms inspired by BCN logo */}
        <path
          d="M20 4C14 4 9 7 9 13c0 3 1.5 5.5 4 7-4 1.5-7 5-7 10v6h10c8 0 14-5 14-13V13c0-6-5-9-10-9z"
          fill="#168FE3"
        />
        <path
          d="M20 4c6 0 11 3 11 9 0 3-1.5 5.5-4 7 4 1.5 7 5 7 10v6H24c-8 0-14-5-14-13V13c0-6 5-9 10-9z"
          fill="#0755B0"
        />
        <circle cx="20" cy="14" r="3.5" fill="white" />
      </svg>
      {showText && (
        <div className="leading-tight">
          <div className={`text-[15px] font-bold tracking-tight ${textColor}`}>
            Besnijdenis Centrum
          </div>
          <div className={`text-[10px] font-semibold tracking-[0.1em] ${subColor}`}>
            NEDERLAND
          </div>
        </div>
      )}
    </div>
  );
}
