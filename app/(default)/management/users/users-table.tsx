'use client';

import { StaticImageData } from 'next/image';
import { useItemSelection } from '@/components/utils/use-item-selection';
import UsersTableItem from './users-table-item';

export interface UserTableProps {
  id: number;
  image: StaticImageData;
  name: string;
  email: string;
  location: string;
  orders: string;
  lastOrder: string;
  spent: string;
  refunds: string;
  fav: boolean;
}

export default function UsersTable({ users }: { users: UserTableProps[] }) {
  const { selectedItems, isAllSelected, handleCheckboxChange, handleSelectAllChange } =
    useItemSelection(users);

  return (
    <div className="relative rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          All Users <span className="font-medium text-slate-400 dark:text-slate-500">248</span>
        </h2>
      </header>
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto dark:text-slate-300">
            {/* Table header */}
            <thead className="border-b border-t border-slate-200 bg-slate-50 text-xs font-semibold uppercase text-slate-500 dark:border-slate-700 dark:bg-slate-900/20 dark:text-slate-400">
              <tr>
                <th className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input
                        className="form-checkbox"
                        type="checkbox"
                        onChange={handleSelectAllChange}
                        checked={isAllSelected}
                      />
                    </label>
                  </div>
                </th>
                <th className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <span className="sr-only">Favourite</span>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Order</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Email</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Location</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="font-semibold">Orders</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Last order</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Total spent</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="font-semibold">Refunds</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <span className="sr-only">Menu</span>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-slate-200 text-sm dark:divide-slate-700">
              {users.map(user => (
                <UsersTableItem
                  key={user.id}
                  user={user}
                  onCheckboxChange={handleCheckboxChange}
                  isSelected={selectedItems.includes(user.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
