import { useLocation } from 'react-router-dom';
import { HiOutlineBell } from 'react-icons/hi2';
import { getPageTitle } from '../../constants/navigation';

function formatTodayDate() {
  return new Intl.DateTimeFormat('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date());
}

export default function Navbar() {
  const { pathname } = useLocation();
  const pageTitle = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b border-white/5 bg-bg-primary/80 px-6 backdrop-blur-md">
      <h1 className="text-lg font-semibold tracking-tight text-white">{pageTitle}</h1>

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="hidden items-center gap-2 text-sm text-text-secondary sm:flex">
          <span aria-hidden="true">📍</span>
          <span>New Delhi</span>
        </div>

        <div className="hidden h-4 w-px bg-white/10 md:block" />

        <time className="hidden text-sm text-text-secondary md:block" dateTime={new Date().toISOString()}>
          {formatTodayDate()}
        </time>

        <div className="hidden h-4 w-px bg-white/10 sm:block" />

        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-all duration-200 hover:bg-white/5 hover:text-white"
        >
          <HiOutlineBell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-white shadow-soft">
          A
        </div>
      </div>
    </header>
  );
}
