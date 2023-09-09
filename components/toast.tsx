import { ReactElement } from 'react';

interface ToastProps {
  children: React.ReactNode;
  className?: string;
  type?: 'warning' | 'error' | 'success' | '';
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Toast({ children, className = '', type = '', open, setOpen }: ToastProps) {
  const typeIcon = (type: string): ReactElement => {
    switch (type) {
      case 'warning':
        return (
          <svg
            className="mr-3 mt-[3px] h-4 w-4 shrink-0 fill-current opacity-80"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
          </svg>
        );
      case 'error':
        return (
          <svg
            className="mr-3 mt-[3px] h-4 w-4 shrink-0 fill-current opacity-80"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z" />
          </svg>
        );
      case 'success':
        return (
          <svg
            className="mr-3 mt-[3px] h-4 w-4 shrink-0 fill-current opacity-80"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
          </svg>
        );
      default:
        return (
          <svg
            className="mr-3 mt-[3px] h-4 w-4 shrink-0 fill-current opacity-80"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
          </svg>
        );
    }
  };

  const typeColor = (type: string): string => {
    switch (type) {
      case 'warning':
        return 'bg-amber-500';
      case 'error':
        return 'bg-rose-500';
      case 'success':
        return 'bg-emerald-500';
      default:
        return 'bg-indigo-500';
    }
  };

  return (
    <>
      {open && (
        <div className={className} role="alert">
          <div
            className={`inline-flex min-w-[20rem] rounded-sm px-4 py-2 text-sm text-white ${typeColor(
              type
            )}`}
          >
            <div className="flex w-full items-start justify-between">
              <div className="flex">
                {typeIcon(type)}
                <div className="font-medium">{children}</div>
              </div>
              <button
                className="ml-3 mt-[3px] opacity-70 hover:opacity-80"
                onClick={() => setOpen(false)}
              >
                <div className="sr-only">Close</div>
                <svg className="h-4 w-4 fill-current">
                  <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
