import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants/navigation';
import Card from '../ui/Card';
import StatusBadge from '../ui/StatusBadge';
import { cn } from '../../utils/cn';

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-white/5 bg-bg-sidebar lg:flex">
      <div className="flex h-16 shrink-0 items-center gap-3 border-b border-white/5 px-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-xl">
          🌍
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-wide text-white">
            AI AIR INTELLIGENCE
          </p>
          <p className="truncate text-xs text-text-secondary">
            Smart City Decision Platform
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              cn(
                'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-primary/15 text-white shadow-soft ring-1 ring-primary/20'
                  : 'text-text-secondary hover:translate-x-0.5 hover:bg-white/5 hover:text-white',
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={cn(
                    'h-5 w-5 shrink-0 transition-colors duration-200',
                    isActive ? 'text-primary' : 'text-text-secondary group-hover:text-accent',
                  )}
                />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="shrink-0 p-4">
        <Card className="p-4">
          <StatusBadge status="success" pulse>
            Live Data Connected
          </StatusBadge>
        </Card>
      </div>
    </aside>
  );
}
