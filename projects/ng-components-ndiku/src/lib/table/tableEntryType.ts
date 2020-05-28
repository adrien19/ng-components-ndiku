
import { TableType } from './table-layout-conf.model';

export class TableEntryType {
  private _TABLE_TYPE: TableType;
  private _TABLE_ID: string;
  private _CELLS_STATES: boolean[][];
  private _ALL_TABLES_STATES: {
    tableCellStates: boolean[][],
    tableId: string,
    FIRST_EDITABLE_ROW?: number,
    LAST_EDITABLE_ROW?: number,
    FIRST_EDITABLE_COL?: number,
    LAST_EDITABLE_COL?: number,
  }[] = [];

  dataSource: any[];
  inlineEditable? = false;
  nEditableCols?: number;
  nRows: number = 0;
  FIRST_EDITABLE_ROW?: number;
  LAST_EDITABLE_ROW?: number;
  FIRST_EDITABLE_COL?: number;
  LAST_EDITABLE_COL?: number;


  constructor(tableTypeName: string, tableId: string, dataSource: any[], inlineEditable?: boolean, nEditableCols?: number, firstEditableRow?: number, firstEditableCol?: number) {
    if (tableTypeName === "mat-table") {
      this.tableType = TableType.MatTable;
    }else{
      this.tableType = TableType.DefaultTable;
    }
    this.tableId = tableId;
    this.dataSource = dataSource;
    this.nRows = this.dataSource.length - 1;
    this.nEditableCols = nEditableCols;
    this.inlineEditable = inlineEditable;
    this.FIRST_EDITABLE_ROW = firstEditableRow? firstEditableRow : 0;
    this.FIRST_EDITABLE_COL = firstEditableCol? firstEditableCol : 0;
    this.LAST_EDITABLE_ROW = this.nRows;
    this.LAST_EDITABLE_COL = nEditableCols? nEditableCols : 0;

    this.createCellsStates(tableId);

  }


  public get tableType() : any {
    return this._TABLE_TYPE;
  }
  public set tableType(tableType: any) {
    this._TABLE_TYPE = tableType;
  }

  public get tableId() : string {
    return this._TABLE_ID;
  }
  public set tableId(tableId: string) {
    this._TABLE_ID = tableId;
  }

  public set cellsStates(cellsStates: boolean[][]) {
    this._CELLS_STATES = cellsStates;
  }
  public get cellsStates() : boolean[][] {
    return this._CELLS_STATES;
  }

  private createCellsStates(tableId: string){
    if (this.inlineEditable && this.nEditableCols) {
      let temp: boolean[][]=[];
      for (let iIndex = 0; iIndex <= this.nRows; iIndex++) {
        temp[iIndex]=[]
        for (let jIndex = 0; jIndex <= this.nEditableCols; jIndex++) {
          temp[iIndex][jIndex] = false;
        }
      }
      this.cellsStates = temp;
      this.tableCellStates = {
        tableCellStates: temp,
        tableId: tableId,
        FIRST_EDITABLE_ROW: this.FIRST_EDITABLE_ROW,
        LAST_EDITABLE_ROW: this.LAST_EDITABLE_ROW,
        FIRST_EDITABLE_COL: this.FIRST_EDITABLE_COL,
        LAST_EDITABLE_COL: this.LAST_EDITABLE_COL,
      }
    }else if(this.inlineEditable){
      throw "You need to supply number of editable columns for inline editable table.";
    }else{
      return
    }
  }

  public set tableCellStates(tableCellStates: {
    tableCellStates: boolean[][],
    tableId: string,
    FIRST_EDITABLE_ROW?: number,
    LAST_EDITABLE_ROW?: number,
    FIRST_EDITABLE_COL?: number,
    LAST_EDITABLE_COL?: number,
  }) {
    this._ALL_TABLES_STATES.push(tableCellStates);
  }
  public get tableCellStates() : {
    tableCellStates: boolean[][],
    tableId: string,
    FIRST_EDITABLE_ROW?: number,
    LAST_EDITABLE_ROW?: number,
    FIRST_EDITABLE_COL?: number,
    LAST_EDITABLE_COL?: number,
  }{

    const tableCellStates = this._ALL_TABLES_STATES.filter((el) => {
      return el.tableId === this.tableId;
    });
    return tableCellStates[0];
  }
}
