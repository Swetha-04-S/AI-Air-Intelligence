import {
  HiOutlineChartBar,
  HiOutlineCpuChip,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineShieldCheck,
  HiOutlineSignal,
  HiOutlineSquares2X2,
  HiOutlineBeaker,
  HiOutlineCloud,
} from 'react-icons/hi2';

export const NAV_ITEMS = [
  {
    path: '/',
    label: 'Dashboard',
    icon: HiOutlineSquares2X2,
  },
  {
    path: '/live',
    label: 'Live Air Quality',
    icon: HiOutlineSignal,
  },
  {
    path: '/forecasting',
    label: 'AQI Forecasting',
    icon: HiOutlineChartBar,
  },
  {
    path: '/source-attribution',
    label: 'Source Attribution',
    icon: HiOutlineBeaker,
  },
  {
    path: '/enforcement',
    label: 'Enforcement Intelligence',
    icon: HiOutlineShieldCheck,
  },
  {
    path: '/health',
    label: 'Weather Intelligence',
    icon: HiOutlineCloud,
  },
  {
    path: "/traffic",
    label: "Traffic Intelligence",
    icon: HiOutlineSignal,
  },
  {
    path: '/analytics',
    label: 'Analytics',
    icon: HiOutlinePresentationChartLine,
  },
  {
    path: '/reports',
    label: 'Reports',
    icon: HiOutlineDocumentText,
  },
  {
    path: '/about-ai',
    label: 'About AI',
    icon: HiOutlineCpuChip,
  },
];

export function getPageTitle(pathname) {
  const item = NAV_ITEMS.find(
    (nav) =>
      nav.path === pathname ||
      (nav.path !== '/' && pathname.startsWith(nav.path)),
  );

  return item?.label ?? 'Dashboard';
}