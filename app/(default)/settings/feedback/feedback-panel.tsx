export default function FeedbackPanel() {
  return (
    <div className="grow">
      {/* Panel body */}
      <div className="space-y-6 p-6">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-slate-100">
            Give Feedback
          </h2>
          <div className="text-sm">
            Our platform depends on user feedback to improve the overall experience!
          </div>
        </div>

        {/* Rate */}
        <section>
          <h3 className="mb-6 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
            How likely would you recommend us to a friend or colleague?
          </h3>
          <div className="w-full max-w-xl">
            <div className="relative">
              <div
                className="absolute left-0 top-1/2 -mt-px h-0.5 w-full bg-slate-200 dark:bg-slate-700"
                aria-hidden="true"
              ></div>
              <ul className="relative flex w-full justify-between">
                <li className="flex">
                  <button className="h-3 w-3 rounded-full border-2 border-slate-400 bg-white dark:border-slate-500 dark:bg-slate-800">
                    <span className="sr-only">1</span>
                  </button>
                </li>
                <li className="flex">
                  <button className="h-3 w-3 rounded-full border-2 border-slate-400 bg-white dark:border-slate-500 dark:bg-slate-800">
                    <span className="sr-only">2</span>
                  </button>
                </li>
                <li className="flex">
                  <button className="h-3 w-3 rounded-full border-2 border-indigo-500 bg-indigo-500">
                    <span className="sr-only">3</span>
                  </button>
                </li>
                <li className="flex">
                  <button className="h-3 w-3 rounded-full border-2 border-slate-400 bg-white dark:border-slate-500 dark:bg-slate-800">
                    <span className="sr-only">4</span>
                  </button>
                </li>
                <li className="flex">
                  <button className="h-3 w-3 rounded-full border-2 border-slate-400 bg-white dark:border-slate-500 dark:bg-slate-800">
                    <span className="sr-only">5</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="mt-3 flex w-full justify-between text-sm italic text-slate-500 dark:text-slate-400">
              <div>Not at all</div>
              <div>Extremely likely</div>
            </div>
          </div>
        </section>

        {/* Tell us in words */}
        <section>
          <h3 className="mb-5 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
            Tell us in words
          </h3>
          {/* Form */}
          <label className="sr-only" htmlFor="feedback">
            Leave a feedback
          </label>
          <textarea
            id="feedback"
            className="form-textarea w-full focus:border-slate-300"
            rows={4}
            placeholder="I really enjoy…"
          ></textarea>
        </section>
      </div>

      {/* Panel footer */}
      <footer>
        <div className="flex flex-col border-t border-slate-200 px-6 py-5 dark:border-slate-700">
          <div className="flex self-end">
            <button className="btn border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600">
              Cancel
            </button>
            <button className="btn ml-3 bg-indigo-500 text-white hover:bg-indigo-600">
              Save Changes
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
