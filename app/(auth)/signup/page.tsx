'use client';

import Link from 'next/link';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { RegisterFormProps, registerService } from '@/services/auth';

import AuthHeader from '../auth-header';
import AuthImage from '../auth-image';
import AuthError from '@/app/(auth)/auth-error';
import { useRequest } from 'ahooks';
import { useState } from 'react';
import Toast from '@/components/toast';

export default function SignUp() {
  const [toastOpen, setToastOpen] = useState(false);
  const [unknownError, setUnknownError] = useState('');

  const formik = useFormik<RegisterFormProps>({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username is required')
        .min(4, 'Username length must be between 4 and 16.')
        .max(16, 'Username length must be between 4 and 16.')
        .matches(/^[a-zA-Z0-9]+$/, 'Username must be alphanumeric with no spaces.'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be 8 characters or longer.')
        .matches(/^\S*$/, 'Password cannot contain spaces.'),
      confirmPassword: Yup.string().required('Confirm Password is required'),
    }),
    onSubmit: async values => {
      runRegister(values);
    },
  });

  const { run: runRegister, loading } = useRequest(
    (values: RegisterFormProps) => registerService(values),
    {
      manual: true,
      onError: error => {
        setUnknownError(error.message);
        setToastOpen(true);
      },
      onSuccess: result => {
        const { data, message, code } = result;
        if (code !== 0) {
          console.log(message);
          return;
        }
        console.log(data);
        // window.location.replace('/signin');
      },
    }
  );

  const showToast = () => (
    <>
      {toastOpen && (
        <Toast type="error" show={toastOpen} setShow={setToastOpen} text={unknownError} />
      )}
    </>
  );

  return (
    <main className="bg-white dark:bg-slate-900">
      {showToast()}
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="flex h-full min-h-[100dvh] flex-col after:flex-1">
            <AuthHeader />

            <div className="mx-auto w-full max-w-sm px-4 py-8">
              <h1 className="mb-6 text-3xl font-bold text-slate-800 dark:text-slate-100">
                Create your Account ✨
              </h1>
              {/* Form */}
              <form onSubmit={formik.handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="username">
                      Username <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="username"
                      className="form-input w-full"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username ? (
                      <AuthError message={formik.errors.username} />
                    ) : null}
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="password">
                      Password <span className="text-rose-500">*</span>
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
                  <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="confirmPassword">
                      Confirm Password <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="confirmPassword"
                      className="form-input w-full"
                      type="password"
                      autoComplete="on"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <AuthError message={formik.errors.password} />
                    ) : null}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="mr-1">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2 text-sm">Email me about product news.</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn ml-3 whitespace-nowrap bg-indigo-500 text-white hover:bg-indigo-600"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              {/* Footer */}
              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-700">
                <div className="text-sm">
                  Have an account?{' '}
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                    href="/signin"
                  >
                    Sign In
                  </Link>
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
