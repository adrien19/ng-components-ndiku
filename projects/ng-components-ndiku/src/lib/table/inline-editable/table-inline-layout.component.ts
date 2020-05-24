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
            (mousedown)="onMouseDown(i, j, column.col)"
            (mouseup)="onMouseUp(i, j, column.col)"
            *matCellDef="let element; let i = index"
            [ngClass]="{
              selected: selectedCellsState[i][j],
              unselected: !selectedCellsState[i][j]
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
  selectedCellsState: boolean[][];
  LAST_EDITABLE_COL: number;
  LAST_EDITABLE_ROW: number;
  FIRST_EDITABLE_COL = 1;
  FIRST_EDITABLE_ROW = 0;
  dataSourceServiceSub: Subscription;

  constructor(
    public snackBar: MatSnackBar,
    private tableInlineEditService: TableInlineEditService
  ) {}

  ngOnDestroy(): void {
    if (this.dataSourceServiceSub) {
      this.dataSourceServiceSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.dataSourceServiceSub = this.tableInlineEditService.dataSource$.subscribe(
      (newDataSource) => {
        if (newDataSource) {
          this.dataSource = newDataSource;
        }
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns) {
      this.selectedCellsState = this.tableInlineEditService.selectedCellsState;
      this.displayedColumns = this.columns.map((column: Column) => column.col);
      this.LAST_EDITABLE_ROW = this.dataSource.length - 1;
      this.LAST_EDITABLE_COL = this.displayedColumns.length - 1;
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    console.log(`this is the KEYBOARDEVENT--- ${event}`);
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
    this.tableInlineEditService.onMouseDownTable(rowId, colId, cellsType);
  }

  onMouseUp(rowId: number, colId: number, cellsType: string) {
    this.tableInlineEditService.onMouseUpTable(
      rowId,
      colId,
      cellsType,
      this.LAST_EDITABLE_COL,
      this.LAST_EDITABLE_ROW,
      this.FIRST_EDITABLE_COL,
      this.FIRST_EDITABLE_ROW
    );
  }
  //  UP TO HEERE
}
