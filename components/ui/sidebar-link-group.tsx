import { useState } from 'react';

interface SidebarLinkGroupProps {
  children: (handleClick: () => void, openGroup: boolean) => React.ReactNode;
  open?: boolean;
}

export default function SidebarLinkGroup({ children, open = false }: SidebarLinkGroupProps) {
  const [openGroup, setOpenGroup] = useState<boolean>(open);

  const handleClick = () => {
    setOpenGroup(!openGroup);
  };

  return (
    <li
      className={`is-link-group group mb-0.5 rounded-sm px-3 py-2 last:mb-0 ${
        open && 'bg-slate-900'
      }`}
    >
      {children(handleClick, openGroup)}
    </li>
  );
}
