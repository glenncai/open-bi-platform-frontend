'use client';

import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import Avatar from '@/components/avatar';

export default function DropdownProfile({ align }: { align?: 'left' | 'right' }) {
  return (
    <Menu as="div" className="relative inline-flex">
      <Menu.Button className="group inline-flex items-center justify-center">
        <Avatar />
        <div className="flex items-center truncate">
          <span className="ml-2 truncate text-sm font-medium group-hover:text-slate-800 dark:text-slate-300 dark:group-hover:text-slate-200">
            Acme Inc.
          </span>
          <svg className="ml-1 h-3 w-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </Menu.Button>
      <Transition
        className={`absolute top-full z-10 mt-1 min-w-[11rem] origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800 ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="mb-1 border-b border-slate-200 px-3 pb-2 pt-0.5 dark:border-slate-700">
          <div className="font-medium text-slate-800 dark:text-slate-100">Acme Inc.</div>
          <div className="text-xs italic text-slate-500 dark:text-slate-400">Administrator</div>
        </div>
        <Menu.Items as="ul" className="focus:outline-none">
          <Menu.Item as="li">
            {({ active }) => (
              <Link
                className={`flex items-center px-3 py-1 text-sm font-medium ${
                  active ? 'text-indigo-600 dark:text-indigo-400' : 'text-indigo-500'
                }`}
                href="#0"
              >
                Settings
              </Link>
            )}
          </Menu.Item>
          <Menu.Item as="li">
            {({ active }) => (
              <Link
                className={`flex items-center px-3 py-1 text-sm font-medium ${
                  active ? 'text-indigo-600 dark:text-indigo-400' : 'text-indigo-500'
                }`}
                href="#0"
              >
                Sign Out
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
