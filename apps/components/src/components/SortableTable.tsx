import { Table } from './Table';
import { TableConfig, TableData } from '../pages/TablePage';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { useSort } from '../hooks/useSort';

interface SortableTableProps {
  data: TableData[];
  config: TableConfig[];
  keyFn: <T extends { name?: string }>(fruit: T) => string | undefined;
}

export const SortableTable = (props: SortableTableProps) => {
  const { config, data } = props;
  const { sortedData, sortBy, sortOrder, setSortColumn } = useSort(data, config);

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
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {headerIcons}
            {column.label}
          </div>
        </th>
      ),
    };
  });

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
