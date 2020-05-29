import { Injectable, HostListener } from '@angular/core';
import { TableMouseEvent, EditedTableCell } from './table-inline-edit-conf.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
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
  updateCellStyle$ = new Subject<any>();
  // saveButtonWasClicked$ = new Subject<any>();

  table: TableEntryType;
  columnMaps: ColumnMap[];


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
    console.log(`mousedown and mouseup In UpdateValues : ${this.tableMouseDown.colId} && tableMouse up = ${this.tableMouseUp.colId}`);

    if (this.tableMouseDown && this.tableMouseUp) {
      if (this.tableMouseDown.cellsType === this.tableMouseUp.cellsType) {
        const dataCopy = this.table.dataSource.slice();
        console.log(`got dataCopy ${this.table.tableId}`);

        let startCol: number;
        let endCol: number;
        let startRow: number;
        let endRow: number;

        if (this.tableMouseDown.colId <= this.tableMouseUp.colId) {
          endCol = this.tableMouseUp.colId;
          startCol = this.tableMouseDown.colId;
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
        console.log(`mousedown and mouseup In PART 2 : ${this.tableMouseDown.colId} && tableMouse up = ${this.tableMouseUp.colId}`);

        console.log(`
        startRow = ${startRow}
        endRow = ${endRow}
        startCol = ${startCol}
        endCol = ${endCol}`);


        //--Edit cells from the same column
        if (startCol === endCol) {
          for (let i = startRow; i <= endRow; i++) {
            const record = dataCopy[i];
            if (record) {
              dataCopy[i][this.columnMaps[startCol].access(record)] = text;
              const editedCell: EditedTableCell = {
                rowId: i,
                colId: startCol,
                header: this.columnMaps[startCol].header,
                newCellValue: text,
                tableId: this.table.tableId,
                editedTimestamp: + new Date()
              }
              this.table.saveEditedCell(editedCell);
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
                const editedCell: EditedTableCell = {
                  rowId: i,
                  colId: j,
                  header: this.columnMaps[j].header,
                  newCellValue: text,
                  tableId: this.table.tableId,
                  editedTimestamp: + new Date()
                }
                this.table.saveEditedCell(editedCell);
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
    console.log(this.tableMouseDown);

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
      this.table.tableCellStates.FIRST_EDITABLE_ROW,
      this.table.tableCellStates.LAST_EDITABLE_ROW,
      this.table.tableCellStates.FIRST_EDITABLE_COL,
      this.table.tableCellStates.LAST_EDITABLE_COL,
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
        this.table.tableCellStates.tableCellStates[i][j] = true;
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
        this.table.tableCellStates.tableCellStates[i][j] = value;
      }
    }
    this.updateCellStyle$.next(); // sending an event to update the selected cells in directive
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
    console.log(`${this.tableMouseDown.cellsType}, ${this.tableMouseUp.cellsType}`);

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
        this.updateSelectedCellsValues(
          this.newCellValue,
        );
      }
      if (event.key === 'Enter') {
        this.setSelectedCells(
          this.table.tableCellStates.FIRST_EDITABLE_ROW,
          this.table.tableCellStates.LAST_EDITABLE_ROW,
          this.table.tableCellStates.FIRST_EDITABLE_COL,
          this.table.tableCellStates.LAST_EDITABLE_COL,
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
