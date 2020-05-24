import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Column, EditedRows } from './table-inline-edit-conf.model';
import { TableInlineEditService } from './table-inline-edit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ndiku-inline-table-layout',
  template: `
    <table
      mat-table
      [dataSource]="dataSource"
      class="mat-elevation-z8"
      (keyup)="onKeyUp($event)"
    >
      <!-- Table's Columns -->
      <ng-container
        *ngFor="let column of columns; let j = index"
        matColumnDef="{{ column.col }}"
      >
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          {{ column.label }}
        </th>
        <ng-container *ngIf="!column.editable">
          <td
            mat-cell
            *matCellDef="let element; let i = index"
            class="unselected"
          >
            {{ element[column.col] }}
          </td>
        </ng-container>
        <ng-container *ngIf="column.editable">
          <td
            mat-cell
            [id]="createCellId(i,j)"
            (click) = "onDocumentClick($event, i, j)"
            (mousedown)="onMouseDown(i, j, column.col)"
            (mouseup)="onMouseUp(i, j, column.col)"
            *matCellDef="let element; let i = index"
            [ngClass]="{
              selected: this.selectedCellsState[i][j],
              unselected: !this.selectedCellsState[i][j]
            }"
          >
            {{ element[column.col] }}
          </td>
        </ng-container>
      </ng-container>
      <!-- / Table's Columns -->

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `,
  styles: [
    `
      table {
        width: 100%;
      }

      /*--------  Editable Cells  --------*/
      .selected {
        border: 1px solid #698ad8;
      }
      .unselected {
        border-bottom-color: rgba(0, 0, 0, 0.12);
        border-bottom-width: 1px;
        border-bottom-style: solid;
      }
      /*---- Remove default browser behaviour after selecting cells ----*/
      .selected,
      .unselected {
        -webkit-user-select: none; /* Webkit  */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE 10   */
        -o-user-select: none; /* Currently not supported in Opera but will be soon */
        user-select: none;
      }
      /*--------End Editable Cells--------*/
    `,
  ],
})
export class TableInlineLayoutComponent
  implements OnInit, OnChanges, OnDestroy {
  @Input() dataSource: any[];
  @Input() columns: Column[];

  @Output() updateWidgetState = new EventEmitter<void>();
  @Output() updateDependingColumns = new EventEmitter<EditedRows>();
  @Output() afterDelete = new EventEmitter<void>();
  displayedColumns: string[];
  LAST_EDITABLE_COL: number;
  LAST_EDITABLE_ROW: number;
  FIRST_EDITABLE_COL = 1;
  FIRST_EDITABLE_ROW = 0;
  snackBarServiceSub: Subscription;

  selectedCellsState: boolean[][] = [ ];

  constructor(
    public snackBar: MatSnackBar,
    private tableInlineEditService: TableInlineEditService
  ) {}


  ngOnDestroy(): void {
    if (this.snackBarServiceSub) {
      this.snackBarServiceSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.selectedCellsState = this.createSelectedCellsStates();
    this.handleUnmatchingCellTypes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.LAST_EDITABLE_ROW = this.dataSource.length - 1;
    if (changes.columns) {
      this.displayedColumns = this.columns.map((column: Column) => column.col);
      this.LAST_EDITABLE_COL = this.displayedColumns.length - 1;
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    this.tableInlineEditService.onKeyUpTable(
      event,
      this.dataSource,
      this.displayedColumns,
      this.LAST_EDITABLE_COL,
      this.LAST_EDITABLE_ROW,
      this.FIRST_EDITABLE_COL,
      this.FIRST_EDITABLE_ROW
    );
  }

  onMouseDown(rowId: number, colId: number, cellsType: string) {
    this.tableInlineEditService.onMouseDownTable(rowId, colId, cellsType, this.selectedCellsState);
  }

  onMouseUp(rowId: number, colId: number, cellsType: string) {
    this.tableInlineEditService.onMouseUpTable(
      rowId,
      colId,
      cellsType,
      this.LAST_EDITABLE_COL,
      this.LAST_EDITABLE_ROW,
      this.FIRST_EDITABLE_COL,
      this.FIRST_EDITABLE_ROW,
      this.selectedCellsState
    );
  }

  handleUnmatchingCellTypes(){
    this.snackBarServiceSub = this.tableInlineEditService.snackBarMessage$.subscribe(
      (receivedSnackBarMessage) => {
        if (receivedSnackBarMessage) {
          let snackBarRef = this.snackBar.open(receivedSnackBarMessage.message, receivedSnackBarMessage.action, { duration: 3000 });
          if (receivedSnackBarMessage.action === "DISMISS") {
            snackBarRef.afterDismissed().subscribe(() => {
              const keyEventData = { isTrusted: true, key: "Enter" };
              const keyBoardEvent = new KeyboardEvent("keyup", keyEventData);
              this.onKeyUp(keyBoardEvent);

            });
            snackBarRef.onAction().subscribe(() => {
              const keyEventData = { isTrusted: true, key: "Enter" };
              const keyBoardEvent = new KeyboardEvent("keyup", keyEventData);
              console.log(keyBoardEvent.key);
              this.onKeyUp(keyBoardEvent);
            })

          }
        }
      }
    );
  }

  createCellId(i:number,j:number): string{
    return `${i}${j}`;
  }

  @HostListener('document:mousedown', ['$event'])
  public onDocumentClick(event: MouseEvent, i: number, j: number): void {
    const targetElement = event.target as HTMLElement;

      const elId = this.createCellId(i,j);
      const tableCellElement = document.getElementById(elId) as HTMLElement;

      // Check if the click was outside the element
      if (targetElement !== tableCellElement) {
        const keyEventData = { isTrusted: true, key: "Enter" };
        const keyBoardEvent = new KeyboardEvent("keyup", keyEventData);
        this.onKeyUp(keyBoardEvent);
      }
  }

  createSelectedCellsStates(): boolean[][]{
    const cols = this.columns.length;
    const rows = this.dataSource.length;
    let selactableCellsState: boolean [][] = [];

    for (let iIndex = 0; iIndex < rows; iIndex++) {
      selactableCellsState[iIndex] = [];
      for (let jindex = 0; jindex < cols; jindex++) {
        selactableCellsState[iIndex][jindex] = false;
      }
    }
    return selactableCellsState;
  }

}
