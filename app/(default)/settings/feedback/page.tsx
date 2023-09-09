export const metadata = {
  title: 'Feedback Settings - Mosaic',
  description: 'Page description',
};

import SettingsSidebar from '../settings-sidebar';
import FeedbackPanel from './feedback-panel';

export default function FeedbackSettings() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">
          Account Settings ✨
        </h1>
      </div>

      {/* Content */}
      <div className="mb-8 rounded-sm bg-white shadow-lg dark:bg-slate-800">
        <div className="flex flex-col md:-mr-px md:flex-row">
          <SettingsSidebar />
          <FeedbackPanel />
        </div>
      </div>
    </div>
  );
}
