
import { TableType } from './table-layout-conf.model';
import { EditedTableCell, TableMouseEvent } from './inline-editable/table-inline-edit-conf.model';

export class TableEntryType {
  private _TABLE_TYPE: TableType;
  private _TABLE_ID: string;
  private _ALL_TABLES_STATES: {
    tableCellStates: boolean[][],
    tableId: string,
    FIRST_EDITABLE_ROW?: number,
    LAST_EDITABLE_ROW?: number,
    FIRST_EDITABLE_COL?: number,
    LAST_EDITABLE_COL?: number,
  }[] = [];

  private _EDITED_CELLS: EditedTableCell[] = [];

  dataSource: any[];
  inlineEditable? = false;
  enableEditingMode? = false;
  nEditableCols?: number;
  nRows: number = 0;

  // tableMouseDown?: TableMouseEvent = {rowId: 0, colId: 0, cellsType: ""};
  // tableMouseUp?: TableMouseEvent = {rowId: 0, colId: 0, cellsType: ""};
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

  private createCellsStates(tableId: string){
    if (this.inlineEditable && this.nEditableCols) {
      let temp: boolean[][]=[];
      for (let iIndex = 0; iIndex <= this.nRows; iIndex++) {
        temp[iIndex]=[]
        for (let jIndex = 0; jIndex <= this.nEditableCols; jIndex++) {
          temp[iIndex][jIndex] = false;
        }
      }
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

  resetCellsStates(){
    if (this.tableCellStates.tableCellStates) {
      let temp: boolean[][]=[];
      for (let iIndex = 0; iIndex <= this.nRows; iIndex++) {
        temp[iIndex]=[]
        for (let jIndex = 0; jIndex <= this.nEditableCols; jIndex++) {
          temp[iIndex][jIndex] = false;
        }
      }
      this.tableCellStates.tableCellStates = temp;
      this.tableCellStates.FIRST_EDITABLE_ROW = 0;
      this.tableCellStates.LAST_EDITABLE_ROW =  this.nRows;
      this.tableCellStates.FIRST_EDITABLE_COL = 0;
      this.tableCellStates.LAST_EDITABLE_COL = this.nEditableCols;
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

  getEditedCellsByTableId(tableId?: string): EditedTableCell[] {
    const editedCells = this._EDITED_CELLS.filter((el) => {
      if (tableId) {
        return el.tableId === tableId;
      }else{
        return el.tableId === this.tableId;
      }
    });
    return editedCells;
  }

  saveEditedCell(editedCell:EditedTableCell) {
    if (this.hasBeenEdited) {
      const foundEdited = this._EDITED_CELLS.find( (cell, index) => {
        if (cell.colId === editedCell.colId && cell.colId === editedCell.colId && cell.tableId === editedCell.tableId) {
          return this._EDITED_CELLS[index] = editedCell;
        }
      });
      if (!foundEdited) {
        this._EDITED_CELLS.push(editedCell);
      }
    } else {
      this._EDITED_CELLS.push(editedCell);
    }
  }

  getEditedCellsByHeader(header: string): EditedTableCell[] {
    const editedCells = this._EDITED_CELLS.filter((el) => {
      return el.header === header;
    });
    return editedCells;
  }

  getEditedCellsByrowCol(rowNumber?: number, colNumber?: number): EditedTableCell[] {
    let editedCells: EditedTableCell[] = [];
    if (rowNumber && colNumber) {
      editedCells = this._EDITED_CELLS.filter((el) => {
        return el.rowId === rowNumber && el.colId === colNumber;
      });
    } else if(rowNumber && !colNumber){
      editedCells = this._EDITED_CELLS.filter((el) => {
        return el.rowId === rowNumber;
      });
    } else if(colNumber && !rowNumber){
      editedCells = this._EDITED_CELLS.filter((el) => {
        return el.colId === colNumber;
      });
    } else{
      throw "You must provide either a row number or column number";
    }

    return editedCells;
  }

  hasBeenEdited(tableId: string): boolean {
    let hasBeenEdited = false;
    let tableCells: EditedTableCell[] = []
    if (tableId) {
      tableCells = this.getEditedCellsByTableId(tableId);
    } else {
      tableCells = this.getEditedCellsByTableId();
    }
    if(tableCells.length !== 0){
      hasBeenEdited = true;
    }
    return hasBeenEdited;
  }

  clearEditedCells(tableId?: string): void {
    const editedCells = this._EDITED_CELLS.filter((el) => {
      if (tableId) {
        return el.tableId !== tableId;
      } else {
        return el.tableId !== this.tableId;
      }
    });
    this._EDITED_CELLS = editedCells;
  }
}
