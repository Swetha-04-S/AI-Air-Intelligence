import ReportGrid from "../../components/reports/ReportGrid";
import DownloadPanel from "../../components/reports/DownloadPanel";
import RecentReports from "../../components/reports/RecentReports";
import ReportSummary from "../../components/reports/ReportSummary";

export default function ReportsPage() {
  return (
    <div className="p-10 space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          📄 Smart Reports
        </h1>

        <p className="mt-2 text-slate-400">
          Generate, export and share AI-powered environmental intelligence reports.
        </p>
      </div>

      <ReportGrid />

      <DownloadPanel />

      <RecentReports />

      <ReportSummary />

    </div>
  );
}