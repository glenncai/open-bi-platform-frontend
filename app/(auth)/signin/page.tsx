'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { useRequest } from 'ahooks';
import { setToken } from '@/utils';
import { LoginFormProps, loginService } from '@/services/auth';

import AuthHeader from '@/app/(auth)/auth-header';
import AuthImage from '@/app/(auth)/auth-image';
import AuthError from '@/app/(auth)/auth-error';
import LoadingButton from '@/components/loading-button';

export default function SignIn() {
  const [customError, setCustomError] = useState('');

  const formik = useFormik<LoginFormProps>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async values => {
      runLogin(values);
    },
  });

  const { run: runLogin, loading } = useRequest((values: LoginFormProps) => loginService(values), {
    manual: true,
    onError: error => {
      setCustomError(error.message);
    },
    onSuccess: result => {
      const token = result.data;
      setToken(token);
      window.location.replace('/');
    },
  });

  return (
    <main className="bg-white dark:bg-slate-900">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="flex h-full min-h-[100dvh] flex-col after:flex-1">
            <AuthHeader />

            <div className="mx-auto w-full max-w-sm px-4 py-8">
              <h1 className="mb-6 text-3xl font-bold text-slate-800 dark:text-slate-100">
                Welcome back! ✨
              </h1>
              {/* Form */}
              <form onSubmit={formik.handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="username">
                      Username
                    </label>
                    <input
                      id="username"
                      className="form-input w-full"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                    {customError ? <AuthError message={customError} /> : null}
                    {formik.touched.username && formik.errors.username ? (
                      <AuthError message={formik.errors.username} />
                    ) : null}
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="password">
                      Password
                    </label>
                    <input
                      id="password"
                      className="form-input w-full"
                      type="password"
                      autoComplete="on"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <AuthError message={formik.errors.password} />
                    ) : null}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="mr-1">
                    <Link className="text-sm underline hover:no-underline" href="/reset-password">
                      Forgot Password?
                    </Link>
                  </div>
                  {loading ? (
                    <LoadingButton text="Sign In" />
                  ) : (
                    <button
                      type="submit"
                      className="btn ml-3 bg-indigo-500 text-white hover:bg-indigo-600"
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </form>
              {/* Footer */}
              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-700">
                <div className="text-sm">
                  Don&apos;t have an account yet?{' '}
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                    href="/signup"
                  >
                    Sign Up
                  </Link>
                </div>
                {/* Warning */}
                <div className="mt-5">
                  <div className="rounded bg-amber-100 px-3 py-2 text-amber-600 dark:bg-amber-400/30 dark:text-amber-400">
                    <svg className="mr-2 inline h-3 w-3 shrink-0 fill-current" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span className="text-sm">
                      Our platform is in beta and any feedback is welcome.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AuthImage />
      </div>
    </main>
  );
}
