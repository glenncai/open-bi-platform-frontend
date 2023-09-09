export const metadata = {
  title: 'Reset Password - Mosaic',
  description: 'Page description',
};

import Link from 'next/link';
import AuthHeader from '../auth-header';
import AuthImage from '../auth-image';

export default function ResetPassword() {
  return (
    <main className="bg-white dark:bg-slate-900">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="flex h-full min-h-[100dvh] flex-col after:flex-1">
            <AuthHeader />

            <div className="mx-auto w-full max-w-sm px-4 py-8">
              <h1 className="mb-6 text-3xl font-bold text-slate-800 dark:text-slate-100">
                Reset your Password ✨
              </h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="email">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input id="email" className="form-input w-full" type="email" />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="btn whitespace-nowrap bg-indigo-500 text-white hover:bg-indigo-600">
                    Send Reset Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <AuthImage />
      </div>
    </main>
  );
}
