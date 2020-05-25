export interface TableMouseEvent {
  rowId: number;
  colId: number;
  cellsType: string;
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

export class SelectedCellsState {
  private _CELLS_STATES: boolean[][];

  constructor(){}

  public set cellsStates(cellsStates: boolean[][]) {
    this._CELLS_STATES = cellsStates;
  }
  public get cellsStates() : boolean[][] {
    return this._CELLS_STATES;
  }
}
