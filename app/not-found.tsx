import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/ui/sidebar';
import Header from '@/components/ui/header';
import NotFoundImage from '@/public/images/404-illustration.svg';
import NotFoundImageDark from '@/public/images/404-illustration-dark.svg';

export default function NotFound() {
  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main className="grow [&>*:first-child]:scroll-mt-16">
          <div className="relative h-full bg-white dark:bg-slate-900">
            <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
              <div className="m-auto mt-16 max-w-2xl">
                <div className="px-4 text-center">
                  <div className="mb-8 inline-flex">
                    <Image
                      className="dark:hidden"
                      src={NotFoundImage}
                      width={176}
                      height={176}
                      alt="404 illustration"
                    />
                    <Image
                      className="hidden dark:block"
                      src={NotFoundImageDark}
                      width={176}
                      height={176}
                      alt="404 illustration dark"
                    />
                  </div>
                  <div className="mb-6">
                    Hmm...this page does not exist. Try searching for something else!
                  </div>
                  <Link href="/" className="btn bg-indigo-500 text-white hover:bg-indigo-600">
                    Back To Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
