'use client';

import ReactECharts from 'echarts-for-react';
import AccordionBasic from '@/components/accordion-basic';
import EditMenu from '@/components/edit-menu';

export default function DashboardCard() {
  const chartName = 'User Growth';

  let option = {
    xAxis: {
      type: 'category',
      data: [
        '07/01/23',
        '07/02/23',
        '07/03/23',
        '07/04/23',
        '07/05/23',
        '07/06/23',
        '07/07/23',
        '07/08/23',
        '07/09/23',
        '07/10/23',
        '07/11/23',
        '07/12/23',
        '07/13/23',
        '07/14/23',
        '07/15/23',
        '07/16/23',
        '07/17/23',
        '07/18/23',
        '07/19/23',
        '07/20/23',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [10, 18, 30, 20, 14, 6, 8, 17, 20, 23, 16, 28, 34, 31, 36, 18, 46, 59, 78, 83],
        type: 'line',
      },
    ],
  };

  return (
    <div className="col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6">
      <header className="flex flex-wrap items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-700">
        <div className="flex flex-wrap items-center space-x-2">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">{chartName}</h2>
          <div className="inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-center text-xs font-medium text-blue-600 dark:bg-blue-500/30 dark:text-blue-500">
            Version 1
          </div>
        </div>

        {/* Delete button */}
        <EditMenu />
      </header>
      <ReactECharts option={option} style={{ height: 400 }} opts={{ renderer: 'svg' }} />
      <AccordionBasic title="Goal Analysis">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam quis. Ut enim ad minim veniam quis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </AccordionBasic>
      <AccordionBasic title="Data Conslusion">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam quis. Ut enim ad minim veniam quis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </AccordionBasic>
    </div>
  );
}
