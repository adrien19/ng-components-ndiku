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
  // private _CELLS_STATES: boolean[][];

  // constructor(){}

  // public set cellsStates(cellsStates: boolean[][]) {
  //   this._CELLS_STATES = cellsStates;
  // }
  // public get cellsStates() : boolean[][] {
  //   return this._CELLS_STATES;
  // }

  // public createCellsStates(nRows: number, nColumns: number){
  //   if (nRows && nColumns) {
  //     let temp: boolean[][]=[];
  //     for (let iIndex = 0; iIndex <= nRows; iIndex++) {
  //       temp[iIndex]=[]
  //       for (let jIndex = 0; jIndex <= nColumns; jIndex++) {
  //         temp[iIndex][jIndex] = false;
  //       }
  //     }
  //     this.cellsStates = temp;
  //   }else{
  //     throw "You need to supply number of rows and number of editable columns.";
  //   }
  // }
}
