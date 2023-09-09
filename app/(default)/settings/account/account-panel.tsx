'use client';

import { useState } from 'react';
import Avatar from '@/components/avatar';

export default function AccountPanel() {
  const [sync, setSync] = useState<boolean>(false);

  return (
    <div className="grow">
      {/* Panel body */}
      <div className="space-y-6 p-6">
        <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">My Account</h2>
        {/* Picture */}
        <section>
          <div className="flex items-center">
            <div className="mr-4">
              <Avatar />
            </div>
            <button className="btn-sm bg-indigo-500 text-white hover:bg-indigo-600">Change</button>
          </div>
        </section>
        {/* Email */}
        <section>
          <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
            Email
          </h2>
          <div className="text-sm">
            For product updates, notifications, and other communications.
          </div>
          <div className="mt-3 flex flex-wrap">
            <div className="mr-2">
              <label className="sr-only" htmlFor="email">
                Business email
              </label>
              <input id="email" className="form-input" type="email" />
            </div>
            <button className="btn border-slate-200 text-indigo-500 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">
              Change
            </button>
          </div>
        </section>
        {/* Password */}
        <section>
          <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
            Password
          </h2>
          <div className="mt-2">
            <button className="btn border-slate-200 text-indigo-500 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">
              Set New Password
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
