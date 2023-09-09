'use client';

import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

export default function EditMenu({
  align,
  className = '',
}: React.HTMLAttributes<HTMLDivElement> & {
  align?: 'left' | 'right';
  className?: string;
}) {
  return (
    <Menu as="div" className={`relative inline-flex ${className}`}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`rounded-full ${
              open
                ? 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
                : 'text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400'
            }`}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="2" />
              <circle cx="10" cy="16" r="2" />
              <circle cx="22" cy="16" r="2" />
            </svg>
          </Menu.Button>
          <Transition
            className={`absolute top-full z-10 mt-1 min-w-[9rem] origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800 ${
              align === 'right' ? 'right-0' : 'left-0'
            }`}
            enter="transition ease-out duration-200 transform"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items as="ul" className="focus:outline-none">
              <Menu.Item as="li">
                {({ active }) => (
                  <Link
                    className={`flex px-3 py-1 text-sm font-medium ${
                      active
                        ? 'text-slate-800 dark:text-slate-200'
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                    href="#0"
                  >
                    Rerun
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item as="li">
                {({ active }) => (
                  <Link
                    className={`flex px-3 py-1 text-sm font-medium ${
                      active ? 'text-rose-600' : 'text-rose-500'
                    }`}
                    href="#0"
                  >
                    Remove
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
