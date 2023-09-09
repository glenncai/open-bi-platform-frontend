'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SettingsSidebar() {
  const pathname = usePathname();

  return (
    <div className="no-scrollbar flex min-w-[15rem] flex-nowrap overflow-x-scroll border-b border-slate-200 px-3 py-6 dark:border-slate-700 md:block md:space-y-3 md:overflow-auto md:border-b-0 md:border-r">
      {/* Group 1 */}
      <div>
        <div className="mb-3 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
          My settings
        </div>
        <ul className="mr-3 flex flex-nowrap md:mr-0 md:block">
          <li className="mr-0.5 md:mb-0.5 md:mr-0">
            <Link
              href="/settings/account"
              className={`flex items-center whitespace-nowrap rounded px-2.5 py-2 ${
                pathname.includes('/settings/account') && 'bg-indigo-50 dark:bg-indigo-500/30'
              }`}
            >
              <svg
                className={`mr-2 h-4 w-4 shrink-0 fill-current ${
                  pathname.includes('/settings/account')
                    ? 'text-indigo-500 dark:text-indigo-400'
                    : 'text-slate-400 dark:text-slate-500'
                }`}
                viewBox="0 0 16 16"
              >
                <path d="M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z" />
              </svg>
              <span
                className={`text-sm font-medium ${
                  pathname.includes('/settings/account')
                    ? 'text-indigo-500 dark:text-indigo-400'
                    : 'text-slate-600 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-200'
                }`}
              >
                My Account
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {/* Group 2 */}
      <div>
        <div className="mb-3 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
          Experience
        </div>
        <ul className="mr-3 flex flex-nowrap md:mr-0 md:block">
          <li className="mr-0.5 md:mb-0.5 md:mr-0">
            <Link
              href="/settings/feedback"
              className={`flex items-center whitespace-nowrap rounded px-2.5 py-2 ${
                pathname.includes('/settings/feedback') && 'bg-indigo-50 dark:bg-indigo-500/30'
              }`}
            >
              <svg
                className={`mr-2 h-4 w-4 shrink-0 fill-current ${
                  pathname.includes('/settings/feedback')
                    ? 'text-indigo-500 dark:text-indigo-400'
                    : 'text-slate-400 dark:text-slate-500'
                }`}
                viewBox="0 0 16 16"
              >
                <path d="M7.001 3h2v4h-2V3zm1 7a1 1 0 110-2 1 1 0 010 2zM15 16a1 1 0 01-.6-.2L10.667 13H1a1 1 0 01-1-1V1a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1zM2 11h9a1 1 0 01.6.2L14 13V2H2v9z" />
              </svg>
              <span
                className={`text-sm font-medium ${
                  pathname.includes('/settings/feedback')
                    ? 'text-indigo-500 dark:text-indigo-400'
                    : 'text-slate-600 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-200'
                }`}
              >
                Give Feedback
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
