import { cn } from '../../utils/cn';

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/5 bg-bg-card p-6 shadow-card',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
