import React, {Fragment} from 'react';
import { TableConfig, TableData } from '../pages/TablePage';

interface TableProps {
  data: TableData[];
  config: TableConfig[];
  keyFn: <T extends { name?: string }>(fruit: T) => string | undefined;
}

export const Table = ({ data, config, keyFn }: TableProps) => {
  const headers = config.map(({ label, header }) => {
    if (header) {
      return <Fragment key={label}>{header()}</Fragment>;
    }

    return <th key={label}>{label}</th>;
  });

  const rows = data.map((rowData) => {
    const cells = config.map((column: TableConfig) => (
      <td key={column.label} className="p-3">
        {column.render(rowData)}
      </td>
    ));
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {cells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
