'use client';

import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

export default function DateSelect() {
  const options = [
    {
      id: 0,
      period: 'Today',
    },
    {
      id: 1,
      period: 'Last 7 Days',
    },
    {
      id: 2,
      period: 'Last Month',
    },
    {
      id: 3,
      period: 'Last 12 Months',
    },
    {
      id: 4,
      period: 'All Time',
    },
  ];

  const [selected, setSelected] = useState<number>(2);

  return (
    <Menu as="div" className="relative inline-flex">
      {({ open }) => (
        <>
          <Menu.Button
            className="btn min-w-[11rem] justify-between border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-200"
            aria-label="Select date range"
          >
            <span className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-slate-500 dark:text-slate-400"
                viewBox="0 0 16 16"
              >
                <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
              </svg>
              <span>{options[selected].period}</span>
            </span>
            <svg
              className="ml-1 shrink-0 fill-current text-slate-400"
              width="11"
              height="7"
              viewBox="0 0 11 7"
            >
              <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
            </svg>
          </Menu.Button>
          <Transition
            className="absolute right-0 top-full z-10 mt-1 w-full overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800"
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items className="text-sm font-medium text-slate-600 focus:outline-none dark:text-slate-300">
              {options.map((option, optionIndex) => (
                <Menu.Item key={optionIndex}>
                  {({ active }) => (
                    <button
                      className={`flex w-full cursor-pointer items-center px-3 py-1 ${
                        active ? 'bg-slate-50 dark:bg-slate-700/20' : ''
                      } ${option.id === selected && 'text-indigo-500'}`}
                      onClick={() => {
                        setSelected(option.id);
                      }}
                    >
                      <svg
                        className={`mr-2 shrink-0 fill-current text-indigo-500 ${
                          option.id !== selected && 'invisible'
                        }`}
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                      >
                        <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                      </svg>
                      <span>{option.period}</span>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
