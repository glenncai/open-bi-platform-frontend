export const metadata = {
  title: 'Dashboard - Open BI Platform',
  description: 'Dashboard for showing all analytics summary.',
};

import DashboardCard from './dashboard-card';

export default function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
    </div>
  );
}
