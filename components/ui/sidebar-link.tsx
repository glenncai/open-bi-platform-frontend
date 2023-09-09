import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppProvider } from '@/app/app-provider';

interface SidebarLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function SidebarLink({ children, href }: SidebarLinkProps) {
  const pathname = usePathname();
  const { setSidebarOpen } = useAppProvider();

  return (
    <Link
      className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
        pathname === href
          ? 'group-[.is-link-group]:text-indigo-500'
          : 'hover:text-slate-200 group-[.is-link-group]:text-slate-400 hover:group-[.is-link-group]:text-slate-200'
      }`}
      href={href}
      onClick={() => setSidebarOpen(false)}
    >
      {children}
    </Link>
  );
}
