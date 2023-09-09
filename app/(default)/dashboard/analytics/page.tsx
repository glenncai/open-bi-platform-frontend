export const metadata = {
  title: 'Analytics - Open BI Platform',
  description: 'AI analytics for user to generate visual charts and draw analytical conclusions.',
};

import DropdownFull from '@/components/dropdown-full';

export default function Analytics() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-8 sm:flex sm:items-center sm:justify-between">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">
            Analytics ✨
          </h1>
        </div>
      </div>

      {/* Forms */}
      <div className="flex flex-col">
        <div className="mb-3 w-full">
          <label className="mb-1 block text-sm font-medium" htmlFor="goal">
            Goal Analysis <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="goal"
            className="form-textarea w-full px-2 py-1"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="mb-3 w-full">
          <label className="mb-1 block text-sm font-medium" htmlFor="chartName">
            Chart Name
          </label>
          <textarea
            id="chartName"
            className="form-textarea w-full px-2 py-1"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="mb-3 w-full">
          <label className="mb-1 block text-sm font-medium" htmlFor="chartType">
            Chart Type
          </label>
          <DropdownFull htmlForId="chartType" />
        </div>
        <div className="mb-3 w-full">
          <label className="mb-1 block text-sm font-medium" htmlFor="fileInput">
            Raw Data <span className="text-rose-500">*</span>
          </label>
          <input id="fileInput" type="file" className="hidden" />
          <div className="w-full">
            <button className="btn w-full border-slate-200 bg-white text-indigo-500 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
              <svg className="h-4 w-4 shrink-0 fill-current opacity-50" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="ml-2">Upload xls, xlsx file</span>
            </button>
          </div>
        </div>
        {/* Submit footer */}
        <div className="mt-3 flex flex-wrap space-x-2">
          <button className="btn border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600">
            Reset
          </button>
          <button className="btn border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600">
            Auto Fill
          </button>
          <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">Submit</button>
        </div>
      </div>
    </div>
  );
}
