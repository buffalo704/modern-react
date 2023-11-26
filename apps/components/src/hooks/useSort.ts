import {useState} from "react";
import {TableConfig, TableData} from "../pages/TablePage";


export const useSort = (data: TableData[], config: TableConfig[]) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const setSortColumn = (label: string) => {
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

  return {
    sortedData,
    sortBy,
    sortOrder,
    setSortColumn,
  };
};

