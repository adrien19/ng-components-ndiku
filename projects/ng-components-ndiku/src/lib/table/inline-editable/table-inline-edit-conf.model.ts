export interface TableMouseEvent {
  rowId: number;
  colId: number;
  cellsType: string;
}

// export interface EditedRows {
//   startRow: number;
//   endRow: number;
// }

// export interface EditedCell {
//   rowId: number;
//   colId: number;
//   cellsType: string;
//   newValue: string;
// }

export class TableData {
  private _DATACOPY: any;
  constructor(){}

  public set dataCopy(dataCopy: any[]) {
    this._DATACOPY = dataCopy;
  }
  public get dataCopy() : any[] {
    return this._DATACOPY;
  }
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
