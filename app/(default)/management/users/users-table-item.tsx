import Image from 'next/image';
import { UserTableProps } from './users-table';

interface UsersTableItemProps {
  user: UserTableProps;
  onCheckboxChange: (id: number, checked: boolean) => void;
  isSelected: boolean;
}

export default function UsersTableItem({
  user,
  onCheckboxChange,
  isSelected,
}: UsersTableItemProps) {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(user.id, e.target.checked);
  };

  return (
    <tr>
      <td className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input
              className="form-checkbox"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={isSelected}
            />
          </label>
        </div>
      </td>
      <td className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="relative flex items-center">
          <button>
            <svg
              className={`h-4 w-4 shrink-0 fill-current ${
                user.fav ? 'text-amber-500' : 'text-slate-300 dark:text-slate-600'
              }`}
              viewBox="0 0 16 16"
            >
              <path d="M8 0L6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934h-6L8 0z" />
            </svg>
          </button>
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="flex items-center">
          <div className="mr-2 h-10 w-10 shrink-0 sm:mr-3">
            <Image
              className="rounded-full"
              src={user.image}
              width={40}
              height={40}
              alt={user.name}
            />
          </div>
          <div className="font-medium text-slate-800 dark:text-slate-100">{user.name}</div>
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="text-left">{user.email}</div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="text-left">{user.location}</div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="text-center">{user.orders}</div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="text-left font-medium text-sky-500">{user.lastOrder}</div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="text-left font-medium text-emerald-500">{user.spent}</div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="text-center">{user.refunds}</div>
      </td>
      <td className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        {/* Menu button */}
        <button className="rounded-full text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400">
          <span className="sr-only">Menu</span>
          <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="2" />
            <circle cx="10" cy="16" r="2" />
            <circle cx="22" cy="16" r="2" />
          </svg>
        </button>
      </td>
    </tr>
  );
}
