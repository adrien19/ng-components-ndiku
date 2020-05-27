import { Injectable } from '@angular/core';
import { TableMouseEvent, SelectedCellsState, TableData } from './table-inline-edit-conf.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, BehaviorSubject } from 'rxjs';
import { ColumnMap } from '../table-layout-conf.model';
import { TableEntryType } from '../tableEntryType';

@Injectable({
  providedIn: 'root',
})
export class TableInlineEditService {
  tableMouseDown: TableMouseEvent;
  tableMouseUp: TableMouseEvent;
  newCellValue: string = '';
  dataSource$ = new Subject<{editedData: any[], tableId: string}>();
  snackBarMessage$ = new Subject<{message: string, action: string}>();
  updateCellStyle$ = new Subject<{
    cellStateValues: boolean[][],
    tableId: string
  }>();

  // tableData = new TableData();
  // tableId: string;
  // cellsStates: boolean[][];
  table: TableEntryType;

  columnMaps: ColumnMap[];
  // FIRST_EDITABLE_ROW: number = 0;
  // LAST_EDITABLE_ROW: number = 0;
  // FIRST_EDITABLE_COL: number = 0;
  // LAST_EDITABLE_COL: number = 0;


  constructor(public snackBar: MatSnackBar) { }

  /**
   * Update table's dataSource
   * @param text
   */
  updateSelectedCellsValues(
    text: string,
  ) {
    if (text == null) {
      return;
    }

    if (this.tableMouseDown && this.tableMouseUp) {
      if (this.tableMouseDown.cellsType === this.tableMouseUp.cellsType) {
        // const dataCopy = this.tableData.dataCopy;
        const dataCopy = this.table.dataSource.slice();
        let startCol: number;
        let endCol: number;
        let startRow: number;
        let endRow: number;

        if (this.tableMouseDown.colId <= this.tableMouseUp.colId) {
          startCol = this.tableMouseDown.colId;
          endCol = this.tableMouseUp.colId;
          // record = this.tableMouseDown.object;

          console.log(`SAME column ${startCol}, ${endCol}`);
        } else {
          endCol = this.tableMouseDown.colId;
          startCol = this.tableMouseUp.colId;
        }

        if (this.tableMouseDown.rowId <= this.tableMouseUp.rowId) {
          startRow = this.tableMouseDown.rowId;
          endRow = this.tableMouseUp.rowId;
          console.log(`SAME row ${startRow}, ${endRow}`);

        } else {
          endRow = this.tableMouseDown.rowId;
          startRow = this.tableMouseUp.rowId;
        }

        //--Edit cells from the same column
        if (startCol === endCol) {
          for (let i = startRow; i <= endRow; i++) {
            const record = dataCopy[i];
            if (record) {
              dataCopy[i][this.columnMaps[startCol].access(record)] = text;
            }else{
              console.log("THE VALUE IS NULL");
            }
          }
        } else {
          //--Edit cells starting and ending not on the same column
          for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
              const record = dataCopy[i];
              if (record) {
                dataCopy[i][this.columnMaps[j].access(record)] = text;
              }else{
                console.log("THE VALUE IS NULL");
              }
            }
          }
        }
        // dataSource = dataCopy;
        this.dataSource$.next({editedData: dataCopy, tableId: this.table.tableId});
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
  onMouseDownTable(rowId: number, colId: number, cellsType: string) {
    this.tableMouseDown = {rowId: rowId, colId: colId, cellsType: cellsType };
    console.log(`this is the mouseDownTable cellsType: ${cellsType}`);
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
  ) {
    this.tableMouseUp = {rowId: rowId, colId: colId, cellsType: cellsType };
    if (this.tableMouseDown) {
      this.newCellValue = '';
      this.updateSelectedCellsState(
        this.tableMouseDown.colId,
        this.tableMouseUp.colId,
        this.tableMouseDown.rowId,
        this.tableMouseUp.rowId,
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
  ) {
    // init selected cells
    this.setSelectedCells(
      this.table.FIRST_EDITABLE_ROW,
      this.table.LAST_EDITABLE_ROW,
      this.table.FIRST_EDITABLE_COL,
      this.table.LAST_EDITABLE_COL,
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
        this.table.cellsStates[i][j] = true;
        // cellsStatesCopy[i][j] = true;
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
    // let cellsStatesCopy = this.table.cellsStates.slice();

    for (let i = firstEditableRow; i <= lastEditableRow; i++) {
      for (let j = firstEditableCol; j <= lastEditableCol; j++) {
        this.table.cellsStates[i][j] = value;
        // cellsStatesCopy[i][j] = value;
      }
    }
    console.log("SHOULD BE UPDATING THE CELLS ON CLICK");

    // const cellId = "";
    this.updateCellStyle$.next({ cellStateValues: this.table.cellsStates, tableId: this.table.tableId});
  }

  /**
   * After the user enters a new value, all selected cells must be updated
   * document:onKeyUpTable
   * @param event
   */
  onKeyUpTable(
    event: KeyboardEvent,
  ): void {
    // If no cell is selected then ignore keyUp event
    if (this.tableMouseDown && this.tableMouseUp) {
      if (event.key === 'Delete') {
        this.newCellValue = '';
        this.updateSelectedCellsValues(
          this.newCellValue,
        );
      } else if (event.key === 'Backspace') {
        // 'delete' key is pressed
        const end: number = this.newCellValue.length - 1;
        this.newCellValue = this.newCellValue.slice(0, end);
        this.updateSelectedCellsValues(
          this.newCellValue,
        );
      } else if (this.isNotSpecialKeys(event)) {
        // key is not specialKeys
        this.newCellValue += event.key;
        console.log(`KEY NOT SPECIAL, SO: ${this.newCellValue}`);
        this.updateSelectedCellsValues(
          this.newCellValue,
        );
      }
      if (event.key === 'Enter') {
        this.setSelectedCells(
          this.table.FIRST_EDITABLE_ROW,
          this.table.LAST_EDITABLE_ROW,
          this.table.FIRST_EDITABLE_COL,
          this.table.LAST_EDITABLE_COL,
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
