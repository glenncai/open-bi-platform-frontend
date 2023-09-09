'use client';

import { Popover, Transition } from '@headlessui/react';

export default function DropdownProfile({ align }: { align?: 'left' | 'right' }) {
  return (
    <Popover className="relative inline-flex">
      <Popover.Button className="btn border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-300">
        <span className="sr-only">Filter</span>
        <wbr />
        <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
          <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
        </svg>
      </Popover.Button>
      <Transition
        className={`absolute left-0 right-auto top-full z-10 mt-1 min-w-[14rem] origin-top-right overflow-hidden rounded border border-slate-200 bg-white pt-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800 ${
          align === 'right' ? 'md:left-auto md:right-0' : 'md:left-0 md:right-auto'
        }`}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel>
          {({ close }) => (
            <>
              <div className="px-3 pb-2 pt-1.5 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
                Filters
              </div>
              <ul className="mb-4">
                <li className="px-3 py-1">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm font-medium">Direct VS Indirect</span>
                  </label>
                </li>
                <li className="px-3 py-1">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm font-medium">Real Time Value</span>
                  </label>
                </li>
                <li className="px-3 py-1">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm font-medium">Top Channels</span>
                  </label>
                </li>
                <li className="px-3 py-1">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm font-medium">Sales VS Refunds</span>
                  </label>
                </li>
                <li className="px-3 py-1">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm font-medium">Last Order</span>
                  </label>
                </li>
                <li className="px-3 py-1">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm font-medium">Total Spent</span>
                  </label>
                </li>
              </ul>
              <div className="border-t border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-700/20">
                <ul className="flex items-center justify-between">
                  <li>
                    <button className="btn-xs border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-200">
                      Clear
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn-xs bg-indigo-500 text-white hover:bg-indigo-600"
                      onClick={() => close()}
                    >
                      Apply
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
