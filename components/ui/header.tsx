'use client';

import { useState } from 'react';
import { useAppProvider } from '@/app/app-provider';

import SearchModal from '@/components/search-modal';
import Notifications from '@/components/dropdown-notifications';
import DropdownHelp from '@/components/dropdown-help';
import ThemeToggle from '@/components/theme-toggle';
import DropdownProfile from '@/components/dropdown-profile';

export default function Header() {
  const { sidebarOpen, setSidebarOpen } = useAppProvider();
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-[#182235]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="-mb-px flex h-16 items-center justify-between">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <div>
              <button
                className={`ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 ${
                  searchModalOpen && 'bg-slate-200'
                }`}
                onClick={() => {
                  setSearchModalOpen(true);
                }}
              >
                <span className="sr-only">Search</span>
                <svg className="h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-current text-slate-500 dark:text-slate-400"
                    d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                  />
                  <path
                    className="fill-current text-slate-400 dark:text-slate-500"
                    d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                  />
                </svg>
              </button>
              <SearchModal isOpen={searchModalOpen} setIsOpen={setSearchModalOpen} />
            </div>
            <Notifications align="right" />
            <DropdownHelp align="right" />
            <ThemeToggle />
            {/*  Divider */}
            <hr className="h-6 w-px border-none bg-slate-200 dark:bg-slate-700" />
            <DropdownProfile align="right" />
          </div>
        </div>
      </div>
    </header>
  );
}
