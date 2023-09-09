'use client';

import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';

export default function DropdownHelp({ align }: { align?: 'left' | 'right' }) {
  return (
    <Menu as="div" className="relative inline-flex">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 ${
              open && 'bg-slate-200'
            }`}
          >
            <span className="sr-only">Need help?</span>
            <svg className="h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path
                className="fill-current text-slate-500 dark:text-slate-400"
                d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
              />
            </svg>
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
            <div className="px-3 pb-2 pt-1.5 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
              Need help?
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
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-300 dark:text-indigo-500"
                      viewBox="0 0 12 12"
                    >
                      <rect y="3" width="12" height="9" rx="1" />
                      <path d="M2 0h8v2H2z" />
                    </svg>
                    <span>Documentation</span>
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
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-300 dark:text-indigo-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z" />
                    </svg>
                    <span>Support Site</span>
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
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-300 dark:text-indigo-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" />
                    </svg>
                    <span>Contact us</span>
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
