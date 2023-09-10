import './css/style.css';

import React from 'react';
import { Inter } from 'next/font/google';
import Theme from './theme-provider';
import AppProvider from './app-provider';
import ReduxProvider from '@/store/ReduxProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Open BI Platform',
  description:
    'An open-source business intelligence platform based on microservice architecture. By leveraging ChatGPT technology, users only need to import raw Excel data and enter their analysis requirements. The system will then automatically generate visual charts and draw analytical conclusions, significantly reducing the cost of manual data analysis.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} bg-slate-100 font-inter text-slate-600 antialiased dark:bg-slate-900 dark:text-slate-400`}
      >
        <ReduxProvider>
          <Theme>
            <AppProvider>{children}</AppProvider>
          </Theme>
        </ReduxProvider>
      </body>
    </html>
  );
}
