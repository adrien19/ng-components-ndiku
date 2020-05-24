import { Injectable } from '@angular/core';
import { TableMouseEvent } from './table-inline-edit-conf.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableInlineEditService {
  tableMouseDown: TableMouseEvent;
  tableMouseUp: TableMouseEvent;
  newCellValue: string = '';
  dataSource$ = new Subject<any[]>();
  snackBarMessage$ = new Subject<{message: string, action: string}>();

  selectedCellsState: boolean[][];

  constructor(public snackBar: MatSnackBar) {}

  /**
   * Update table's dataSource
   * @param text
   */
  updateSelectedCellsValues(
    text: string,
    dataSource: any[],
    displayedColumns: any[]
  ) {
    if (text == null) {
      return;
    }

    if (this.tableMouseDown && this.tableMouseUp) {
      if (this.tableMouseDown.cellsType === this.tableMouseUp.cellsType) {
        const dataCopy: any[] = dataSource.slice(); // copy and mutate
        let startCol: number;
        let endCol: number;
        let startRow: number;
        let endRow: number;

        if (this.tableMouseDown.colId <= this.tableMouseUp.colId) {
          startCol = this.tableMouseDown.colId;
          endCol = this.tableMouseUp.colId;
        } else {
          endCol = this.tableMouseDown.colId;
          startCol = this.tableMouseUp.colId;
        }

        if (this.tableMouseDown.rowId <= this.tableMouseUp.rowId) {
          startRow = this.tableMouseDown.rowId;
          endRow = this.tableMouseUp.rowId;
        } else {
          endRow = this.tableMouseDown.rowId;
          startRow = this.tableMouseUp.rowId;
        }

        //--Edit cells from the same column
        if (startCol === endCol) {
          for (let i = startRow; i <= endRow; i++) {
            dataCopy[i][displayedColumns[startCol]] = text;
          }
        } else {
          //--Edit cells starting and ending not on the same column

          for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
              dataCopy[i][displayedColumns[j]] = text;
            }
          }
        }
        // dataSource = dataCopy;
        this.dataSource$.next(dataCopy);
      } else {
        this.openSnackBar("The selected cells don't have the same type.", "DISMISS");
      }
    }
  }

  /**
   * @param rowId
   * @param colId
   * @param cellsType
   */
  onMouseDownTable(rowId: number, colId: number, cellsType: string, selectedCellsState: boolean[][]) {
    this.tableMouseDown = { rowId: rowId, colId: colId, cellsType: cellsType };
    this.selectedCellsState = selectedCellsState;
  }

  /**
   * @param rowId
   * @param colId
   * @param cellsType
   */
  onMouseUpTable(
    rowId: number,
    colId: number,
    cellsType: string,
    LAST_EDITABLE_COL: number,
    LAST_EDITABLE_ROW: number,
    FIRST_EDITABLE_COL: number,
    FIRST_EDITABLE_ROW: number,
    selectedCellsState: boolean[][]
  ) {
    this.tableMouseUp = { rowId: rowId, colId: colId, cellsType: cellsType };
    this.selectedCellsState = selectedCellsState;

    if (this.tableMouseDown) {
      this.newCellValue = '';
      this.updateSelectedCellsState(
        this.tableMouseDown.colId,
        this.tableMouseUp.colId,
        this.tableMouseDown.rowId,
        this.tableMouseUp.rowId,
        LAST_EDITABLE_COL,
        LAST_EDITABLE_ROW,
        FIRST_EDITABLE_COL,
        FIRST_EDITABLE_ROW
      );
    }
  }

  /**
   * Update selectedCols && selectedRows arrays
   * @param mouseDownColId
   * @param mouseUpColId
   * @param mouseDownRowId
   * @param mouseUpRowId
   */
  private updateSelectedCellsState(
    mouseDownColId: number,
    mouseUpColId: number,
    mouseDownRowId: number,
    mouseUpRowId: number,
    FIRST_EDITABLE_COL: number,
    LAST_EDITABLE_COL: number,
    LAST_EDITABLE_ROW: number,
    FIRST_EDITABLE_ROW: number
  ) {
    // init selected cells
    this.setSelectedCells(
      FIRST_EDITABLE_ROW,
      LAST_EDITABLE_ROW,
      FIRST_EDITABLE_COL,
      LAST_EDITABLE_COL,
      false
    );

    // update selected cells
    let startCol: number;
    let endCol: number;
    let startRow: number;
    let endRow: number;
    if (mouseDownColId <= mouseUpColId) {
      startCol = mouseDownColId;
      endCol = mouseUpColId;
    } else {
      endCol = mouseDownColId;
      startCol = mouseUpColId;
    }

    if (mouseDownRowId <= mouseUpRowId) {
      startRow = mouseDownRowId;
      endRow = mouseUpRowId;
    } else {
      endRow = mouseDownRowId;
      startRow = mouseUpRowId;
    }
    for (let i = startRow; i <= endRow; i++) {
      for (let j = startCol; j <= endCol; j++) {
        this.selectedCellsState[i][j] = true;
      }
    }
    this.setSelectedCells(startRow, endRow, startCol, endCol, true);
  }

  /**
   * @param firstEditableRow
   * @param lastEditableRow
   * @param firstEditableCol
   * @param lastEditableCol
   * @param value
   */
  private setSelectedCells(
    firstEditableRow: number,
    lastEditableRow: number,
    firstEditableCol: number,
    lastEditableCol: number,
    value: boolean
  ) {
    for (let i = firstEditableRow; i <= lastEditableRow; i++) {
      for (let j = firstEditableCol; j <= lastEditableCol; j++) {
        this.selectedCellsState[i][j] = value;
      }
    }
  }

  /**
   * After the user enters a new value, all selected cells must be updated
   * document:onKeyUpTable
   * @param event
   */
  onKeyUpTable(
    event: KeyboardEvent,
    dataSource: any[],
    displayedColumns: any[],
    LAST_EDITABLE_COL: number,
    LAST_EDITABLE_ROW: number,
    FIRST_EDITABLE_COL: number,
    FIRST_EDITABLE_ROW: number
  ): void {
    // If no cell is selected then ignore keyUp event
    if (this.tableMouseDown && this.tableMouseUp) {
      if (event.key === 'Delete') {
        this.newCellValue = '';
        this.updateSelectedCellsValues(
          this.newCellValue,
          dataSource,
          displayedColumns
        );
      } else if (event.key === 'Backspace') {
        // 'delete' key is pressed
        const end: number = this.newCellValue.length - 1;
        this.newCellValue = this.newCellValue.slice(0, end);
        this.updateSelectedCellsValues(
          this.newCellValue,
          dataSource,
          displayedColumns
        );
      } else if (this.isNotSpecialKeys(event)) {
        // key is not specialKeys
        this.newCellValue += event.key;
        this.updateSelectedCellsValues(
          this.newCellValue,
          dataSource,
          displayedColumns
        );
      }
      if (event.key === 'Enter') {
        this.setSelectedCells(
          FIRST_EDITABLE_ROW,
          LAST_EDITABLE_ROW,
          FIRST_EDITABLE_COL,
          LAST_EDITABLE_COL,
          false
        );
      }
    }
  }

  /**
   * @param event
   */
  isNotSpecialKeys(event: KeyboardEvent): boolean {
    let specialKeys: string[] = [
      'Enter',
      'PrintScreen',
      'Escape',
      'cControl',
      'NumLock',
      'PageUp',
      'PageDown',
      'End',
      'Home',
      'Insert',
      'ContextMenu',
      'Control',
      'ControlAltGraph',
      'Alt',
      'Meta',
      'Shift',
      'CapsLock',
      'TabTab',
      'ArrowRight',
      'ArrowLeft',
      'ArrowDown',
      'ArrowUp',
      'Pause',
      'ScrollLock',
      'Dead',
      '',
      'F1',
      'F2',
      'F3',
      'F4',
      'F5',
      'F6',
      'F7',
      'F8',
      'F9',
      'F10',
      'F11',
      'F12',
    ];

    return this.indexOfInArray(event.key, specialKeys) === -1;
  }

  indexOfInArray(item: string, array: string[]): number {
    let index: number = -1;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        index = i;
      }
    }
    return index;
  }

  /**
   * @param message
   * @param action
   */
  openSnackBar(message: string, action: string) {
    console.log(`OPENNIGN SNACKBAR: ${message}`);
    const snackBarMessage = {
      message: message,
      action: action
    }
    this.snackBarMessage$.next(snackBarMessage);
  }
}
