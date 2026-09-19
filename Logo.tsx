import logoImage from './images/logo.png';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showText?: boolean;
}

export function Logo({ className = '', variant = 'dark', showText = true }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-bcn-dark';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src={logoImage} alt="" aria-hidden="true" className="h-[38px] w-[38px] flex-shrink-0 object-contain" />
      {showText && (
        <span className={`text-[13px] sm:text-[15px] font-bold leading-tight ${textColor}`}>
          Besnijdenis Centrum Nederland
        </span>
      )}
    </div>
  );
}
