// import { Table } from '../components/Table';
import { ReactElement } from 'react';
import { SortableTable } from '../components/SortableTable';

export interface TableData {
  name: string;
  color: string;
  score: number;
}

export interface TableConfig {
  label: string;
  render: <T extends TableData>(
    fruit: T
  ) => TableData[keyof TableData] | ReactElement;
  sortValue?: <T extends TableData>(fruit: T) => TableData[keyof TableData];
  header?: () => ReactElement;
}

export const TablePage = () => {
  const data: TableData[] = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 2 },
    { name: 'Grape', color: 'bg-purple-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
  ];

  const config: TableConfig[] = [
    {
      label: 'Name',
      render: (fruit: TableData) => fruit.name,
      sortValue: (fruit: TableData) => fruit.name.toLowerCase(),
    },
    {
      label: 'Color',
      render: (fruit: TableData) => (
        <div className={`p-3 m-2 ${fruit.color}`} />
      ),
    },
    {
      label: 'Score',
      render: (fruit: TableData) => fruit.score,
      sortValue: (fruit: TableData) => fruit.score,
    },
  ];

  const keyFn = <T extends { name?: string }>(fruit: T) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};
