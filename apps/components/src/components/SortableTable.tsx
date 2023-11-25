import { Table } from './Table';
import { TableConfig, TableData } from '../pages/TablePage';
import { useState } from 'react';
import { GoArrowBoth, GoArrowDown, GoArrowUp } from 'react-icons/go';

interface SortableTableProps {
  data: TableData[];
  config: TableConfig[];
  keyFn: <T extends { name?: string }>(fruit: T) => string | undefined;
}

export const SortableTable = (props: SortableTableProps) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const { config, data } = props;

  const handleClick = (label: string) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    switch (sortOrder) {
      case 'asc':
        setSortOrder('desc');
        setSortBy(label);
        break;
      case 'desc':
        setSortOrder(null);
        setSortBy(null);
        break;
      default:
        setSortOrder('asc');
        setSortBy(label);
        break;
    }
  };

  const updatedConfig = config.map((column: TableConfig) => {
    if (!column.sortValue) {
      return column;
    }

    const headerIcons = getIcons(column.label, sortBy, sortOrder);

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {headerIcons}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const column = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = column?.sortValue && column?.sortValue(a);
      const valueB = column?.sortValue && column?.sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      return typeof valueA === 'string' && typeof valueB === 'string'
        ? valueA.localeCompare(valueB) * reverseOrder
        : typeof valueA === 'number' && typeof valueB === 'number'
        ? (valueA - valueB) * reverseOrder
        : 0;
    });
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

const getIcons = (
  label: string,
  sortBy: string | null,
  sortOrder: string | null
) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  }

  switch (sortOrder) {
    case 'asc':
      return (
        <div>
          <GoArrowUp />
        </div>
      );
    case 'desc':
      return (
        <div>
          <GoArrowDown />
        </div>
      );
    default:
      return (
        <div>
          <GoArrowUp />
          <GoArrowDown />
        </div>
      );
  }

  return <span>⬇️</span>;
};
