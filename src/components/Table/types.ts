export type Cell = string | number | React.ReactNode;

export interface Column {
  id: string | number;
  label: Cell;
}

export interface Row {
  id: string | number;
  cells: Cell[];
}

export interface TableProps {
  columns: Column[];
  rows: Row[];
  rowsPerPage?: number;
}
