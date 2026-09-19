import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from './ArrowIcon';
import { Link } from '@/router';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  withArrow?: boolean;
}

const variantClasses = {
  primary: 'bg-bcn-blue text-white hover:bg-bcn-deep shadow-soft hover:shadow-blue',
  secondary: 'border border-bcn-200 text-bcn-deep hover:bg-bcn-ice bg-transparent',
  ghost: 'text-ink hover:bg-bcn-ice',
  light: 'bg-white text-bcn-dark hover:bg-bcn-50 shadow-soft',
};

const sizeClasses = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  withArrow = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all duration-300 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bcn-blue focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight size={16} className="transition-transform duration-300 ease-smooth group-hover:translate-x-0.5" />
      )}
    </button>
  );
}

interface LinkButtonProps {
  to: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  withArrow?: boolean;
  className?: string;
}

export function LinkButton({
  to,
  variant = 'primary',
  size = 'md',
  children,
  withArrow = false,
  className = '',
}: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all duration-300 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bcn-blue focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight size={16} className="transition-transform duration-300 ease-smooth group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
