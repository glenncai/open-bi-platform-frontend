export default function PaginationNumeric() {
  return (
    <div className="flex justify-center">
      <nav className="flex" role="navigation" aria-label="Navigation">
        <div className="mr-2">
          <span className="inline-flex items-center justify-center rounded border border-slate-200 bg-white px-2.5 py-2 leading-5 text-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-600">
            <span className="sr-only">Previous</span>
            <wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
            </svg>
          </span>
        </div>
        <ul className="inline-flex -space-x-px text-sm font-medium shadow-sm">
          <li>
            <span className="inline-flex items-center justify-center rounded-l border border-slate-200 bg-white px-3.5 py-2 leading-5 text-indigo-500 dark:border-slate-700 dark:bg-slate-800">
              1
            </span>
          </li>
          <li>
            <a
              className="inline-flex items-center justify-center border border-slate-200 bg-white px-3.5 py-2 leading-5 text-slate-600 hover:bg-indigo-500 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-indigo-500"
              href="#0"
            >
              2
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center justify-center border border-slate-200 bg-white px-3.5 py-2 leading-5 text-slate-600 hover:bg-indigo-500 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-indigo-500"
              href="#0"
            >
              3
            </a>
          </li>
          <li>
            <span className="inline-flex items-center justify-center border border-slate-200 bg-white px-3.5 py-2 leading-5 text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500">
              …
            </span>
          </li>
          <li>
            <a
              className="inline-flex items-center justify-center rounded-r border border-slate-200 bg-white px-3.5 py-2 leading-5 text-slate-600 hover:bg-indigo-500 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-indigo-500"
              href="#0"
            >
              9
            </a>
          </li>
        </ul>
        <div className="ml-2">
          <a
            href="#0"
            className="inline-flex items-center justify-center rounded border border-slate-200 bg-white px-2.5 py-2 leading-5 text-slate-600 shadow-sm hover:bg-indigo-500 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-indigo-500"
          >
            <span className="sr-only">Next</span>
            <wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
}
