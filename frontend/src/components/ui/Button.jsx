import { cn } from '../../utils/cn';

const variants = {
  primary:
    'bg-primary text-white shadow-soft hover:bg-primary/90 active:bg-primary/80',
  secondary:
    'border border-white/10 bg-bg-card text-white hover:border-white/20 hover:bg-white/5',
  ghost: 'text-text-secondary hover:bg-white/5 hover:text-white',
  accent:
    'bg-accent/15 text-accent hover:bg-accent/25 active:bg-accent/30',
};

const sizes = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-9 px-4 text-sm',
  lg: 'h-10 px-5 text-sm',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
