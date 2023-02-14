import { FC, useState } from 'react';
import { Button } from '../Button';
import { Cell, Column, Row, TableProps } from './types';

export const Table: FC<TableProps> = ({ columns, rows, rowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage * rowsPerPage >= rows.length;

  const pageHandler = (direction: number) => () =>
    setCurrentPage(currentPage + direction);

  const rowsToRender = rows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className={'w-full'}>
      <div className={'flex justify-end pb-4'}>
        <Button disabled={isPrevDisabled} onClick={pageHandler(-1)}>
          Prev
        </Button>
        <Button disabled={isNextDisabled} onClick={pageHandler(1)}>
          Next
        </Button>
      </div>
      <div className={'overflow-hidden rounded-lg border border-blue-400'}>
        <table className={'h-16 w-full table-fixed'}>
          <thead className={'bg-blue-500 text-white'}>
            <tr>
              {columns.map((column: Column) => (
                <th key={column.id} className={'py-2 px-4 text-start'}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowsToRender.map((row: Row) => (
              <tr key={row.id} className={'border-b py-2 last:border-0'}>
                {row.cells.map((cell: Cell, index: number) => (
                  <td key={`${row.id}-${index}`} className={'px-4'}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
