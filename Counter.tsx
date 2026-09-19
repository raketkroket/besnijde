import { RefObject } from 'react';
import { useCountUp, useReveal } from '@/hooks/useReveal';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  separator?: boolean;
  className?: string;
}

export function Counter({
  target,
  suffix = '',
  prefix = '',
  decimals = 0,
  separator = false,
  className = '',
}: CounterProps) {
  const { ref, isVisible } = useReveal();
  const value = useCountUp(target, isVisible);

  const formatted = separator
    ? Math.round(value).toLocaleString('nl-NL')
    : decimals > 0
      ? value.toFixed(decimals).replace('.', ',')
      : Math.round(value).toString();

  return (
    <span ref={ref as RefObject<HTMLSpanElement>} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
