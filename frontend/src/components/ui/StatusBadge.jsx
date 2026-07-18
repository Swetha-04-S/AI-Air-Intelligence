import { cn } from '../../utils/cn';

const statusStyles = {
  success: {
    badge: 'bg-success/10 text-success',
    dot: 'bg-success shadow-[0_0_8px_rgba(34,197,94,0.6)]',
  },
  danger: {
    badge: 'bg-danger/10 text-danger',
    dot: 'bg-danger shadow-[0_0_8px_rgba(239,68,68,0.6)]',
  },
  warning: {
    badge: 'bg-accent/10 text-accent',
    dot: 'bg-accent shadow-[0_0_8px_rgba(6,182,212,0.6)]',
  },
};

export default function StatusBadge({
  children,
  status = 'success',
  pulse = false,
  className,
}) {
  const styles = statusStyles[status] ?? statusStyles.success;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium',
        styles.badge,
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span
            className={cn(
              'absolute inline-flex h-full w-full animate-ping rounded-full opacity-60',
              styles.dot,
            )}
          />
        )}
        <span className={cn('relative inline-flex h-2 w-2 rounded-full', styles.dot)} />
      </span>
      {children}
    </span>
  );
}
