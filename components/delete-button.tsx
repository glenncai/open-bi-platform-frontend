'use client';

import { useSelectedItems } from '@/app/selected-items-context';

export default function DeleteButton() {
  const { selectedItems } = useSelectedItems();

  return (
    <div className={`${selectedItems.length < 1 && 'hidden'}`}>
      <div className="flex items-center">
        <div className="mr-2 hidden whitespace-nowrap text-sm italic xl:block">
          <span>{selectedItems.length}</span> items selected
        </div>
        <button className="btn border-slate-200 bg-white text-rose-500 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
          Delete
        </button>
      </div>
    </div>
  );
}
