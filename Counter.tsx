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
  const value = target;

  const formatted = separator
    ? Math.round(value).toLocaleString('nl-NL')
    : decimals > 0
      ? value.toFixed(decimals).replace('.', ',')
      : Math.round(value).toString();

  return (
    <span className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
