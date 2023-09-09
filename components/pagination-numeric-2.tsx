export default function PaginationNumeric02() {
  return (
    <div>
      <nav className="flex justify-between" role="navigation" aria-label="Navigation">
        <div className="mr-2 flex-1">
          <span className="btn border-slate-200 bg-white text-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-600">
            &lt;-<span className="hidden sm:inline">&nbsp;Previous</span>
          </span>
        </div>
        <div className="grow text-center">
          <ul className="inline-flex -space-x-px text-sm font-medium">
            <li>
              <span className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-2 py-2 leading-5 text-indigo-500 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <span className="w-5">1</span>
              </span>
            </li>
            <li>
              <a
                className="inline-flex items-center justify-center border border-transparent px-2 py-2 leading-5 text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-500"
                href="#0"
              >
                <span className="w-5">2</span>
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center justify-center border border-transparent px-2 py-2 leading-5 text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-500"
                href="#0"
              >
                <span className="w-5">3</span>
              </a>
            </li>
            <li>
              <span className="inline-flex items-center justify-center px-2 py-2 leading-5 text-slate-400 dark:text-slate-500">
                …
              </span>
            </li>
            <li>
              <a
                className="inline-flex items-center justify-center rounded-r border border-transparent px-2 py-2 leading-5 text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-500"
                href="#0"
              >
                <span className="w-5">9</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-2 flex-1 text-right">
          <a
            className="btn border-slate-200 bg-white text-indigo-500 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
            href="#0"
          >
            <span className="hidden sm:inline">Next&nbsp;</span>-&gt;
          </a>
        </div>
      </nav>
    </div>
  );
}
