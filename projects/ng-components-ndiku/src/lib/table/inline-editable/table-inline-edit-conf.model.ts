export interface TableMouseEvent {
  rowId: number;
  colId: number;
  cellsType: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface EditedRows {
  startRow: number;
  endRow: number;
}

export interface EditedCell {
  rowId: number;
  colId: number;
  cellsType: string;
  newValue: string;
}

export interface Column {
  col: string;
  label: string;
  editable?: boolean;
  sum?: number;
}
