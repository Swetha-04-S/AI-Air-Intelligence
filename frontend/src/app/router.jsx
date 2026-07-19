import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AboutAiPage from '../features/about-ai/AboutAiPage';
import AnalyticsPage from '../features/analytics/AnalyticsPage';
import DashboardPage from '../features/dashboard/DashboardPage';
import EnforcementPage from '../features/enforcement/EnforcementPage';
import ForecastingPage from '../features/forecasting/ForecastingPage';
import HealthPage from '../features/health/HealthPage';
import LiveAqiPage from '../features/live-aqi/LiveAqiPage';
import ReportsPage from '../features/reports/ReportsPage';
import SourceAttributionPage from '../features/source-attribution/SourceAttributionPage';
import TrafficPage from "../features/traffic/TrafficPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'live', element: <LiveAqiPage /> },
      { path: 'forecasting', element: <ForecastingPage /> },
      { path: 'source-attribution', element: <SourceAttributionPage /> },
      { path: 'enforcement', element: <EnforcementPage /> },
      { path: 'health', element: <HealthPage /> },
      {
        path: "traffic",
        element: <TrafficPage />,
      },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'about-ai', element: <AboutAiPage /> },
    ],
  },
]);
