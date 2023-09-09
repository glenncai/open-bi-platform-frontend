export default function PaginationClassic() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav className="mb-4 sm:order-1 sm:mb-0" role="navigation" aria-label="Navigation">
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <span className="btn border-slate-200 bg-white text-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-600">
              &lt;- Previous
            </span>
          </li>
          <li className="ml-3 first:ml-0">
            <a
              className="btn border-slate-200 bg-white text-indigo-500 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
              href="#0"
            >
              Next -&gt;
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center text-sm text-slate-500 dark:text-slate-400 sm:text-left">
        Showing <span className="font-medium text-slate-600 dark:text-slate-300">1</span> to{' '}
        <span className="font-medium text-slate-600 dark:text-slate-300">10</span> of{' '}
        <span className="font-medium text-slate-600 dark:text-slate-300">467</span> results
      </div>
    </div>
  );
}
