import { Component, Input, OnChanges, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ColumnSetting, ColumnMap, TableType } from './table-layout-conf.model';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TableInlineEditService } from './inline-editable/table-inline-edit.service';
import { SelectedCellsState } from './inline-editable/table-inline-edit-conf.model';

@Component({
  selector: 'ndiku-table-layout',
  template: `
    <table class="table" *ngIf="table === defaultTableType">
      <caption *ngIf="caption">
        {{
          caption
        }}
      </caption>
      <thead>
        <tr>
          <th *ngFor="let map of columnMaps" style="text-align: left;">
            {{ map.header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let record of records">
          <td
            *ngFor="let map of columnMaps"
            [ndikuStyleCell]="{
              contentType: record[map.access(record)],
              tableType: 'default'
            }"
          >
            {{ record[map.access(record)] | formatCell: map.format }}
          </td>
        </tr>
      </tbody>
    </table>

    <table
      mat-table
      [dataSource]="records"
      class="mat-elevation-z0"
      *ngIf="table === matTableType"
      (keyup)="onKeyUp($event)"
    >
      <caption *ngIf="caption">
        {{
          caption
        }}
      </caption>
      <ng-container
        *ngFor="let map of columnMaps; let j = index"
        matColumnDef="{{ map.header }}"
      >
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          {{ map.header }}
        </th>
        <ng-container *ngIf="!map.editable">
          <td
            mat-cell
            *matCellDef="let record"
            [ndikuStyleCell]="{
              contentType: record[map.access(record)],
              tableType: 'mat-table'
            }"
          >
            {{ record[map.access(record)] | formatCell: map.format }}
          </td>
        </ng-container>
        <ng-container *ngIf="map.editable">
          <td
            mat-cell
            *matCellDef="let record; let i = index"
            [ndikuStyleCell]="{
              contentType: record[map.access(record)],
              tableType: 'mat-table'
            }"
            [id]="createCellId(i,j)"

            (mousedown)="onMouseDown($event, i, j, map.header)"
            (mouseup)="onMouseUp(i, j, map.header)"
            [ngClass]="{
              selected: cellsStates[i][j],
              unselected: !cellsStates[i][j]
            }"
          >
            {{ record[map.access(record)] | formatCell: map.format }}
          </td>
        </ng-container>
      </ng-container>

      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
    </table>
  `,
  styles: [
    `
      table {
        width: 100%;
      }
      .mat-row,
      .mat-header-row {
        display: flex;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        align-items: center;
        min-height: 48px;
        padding: 0 24px;
      }

      .mat-cell,
      .mat-header-cell {
        flex: 1;
        overflow: hidden;
        word-wrap: break-word;
        border-bottom: none;
      }

      /*--------  Editable Cells  --------*/
      .selected {
        border: 1px solid #698ad8;
      }
      .unselected {
        /* border-bottom-color: rgba(0, 0, 0, 0.12); */
        /* border-bottom-width: 1px; */
        /* border-bottom-style: solid; */
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
export class TableLayoutComponent implements OnInit, OnChanges, OnDestroy {
  private _RECORDS: any[];
  private _CAPTION: string;
  private _KEYS: string[];
  private _SETTINGS: ColumnSetting[];
  private _TABLE_TYPE = TableType.DefaultTable;
  defaultTableType = TableType.DefaultTable;
  matTableType = TableType.MatTable;
  columnMaps: ColumnMap[];
  displayedColumns: any[];

  @Input()
  public get records(): any[] {
    return this._RECORDS;
  }
  public set records(value: any[]) {
    this._RECORDS = value;
  }

  @Input()
  public get caption(): string {
    return this._CAPTION;
  }
  public set caption(value: string) {
    this._CAPTION = value;
  }

  public get keys(): string[] {
    return this._KEYS;
  }
  public set keys(value: string[]) {
    this._KEYS = value;
  }

  @Input()
  public get settings(): ColumnSetting[] {
    return this._SETTINGS;
  }
  public set settings(value: ColumnSetting[]) {
    this._SETTINGS = value;
  }

  @Input()
  public get table(): any {
    return this._TABLE_TYPE;
  }
  public set table(value: any) {
    if (value === "mat-table") {
      this._TABLE_TYPE = TableType.MatTable;
    } else {
      this._TABLE_TYPE = TableType.DefaultTable;
    }
  }

  // For inline editing
  @Input() selectedCellsState: SelectedCellsState;
  cellsStates: boolean[][];

  LAST_EDITABLE_COL: number;
  LAST_EDITABLE_ROW: number;
  FIRST_EDITABLE_COL = 0; // to skip first column, assign to 1.
  FIRST_EDITABLE_ROW = 0;
  snackBarServiceSub: Subscription;


  constructor(
    public snackBar: MatSnackBar,
    private tableInlineEditService: TableInlineEditService
  ) {}


  ngOnDestroy(): void {
    if (this.snackBarServiceSub) {
      this.snackBarServiceSub.unsubscribe();
    }
  }

  ngOnInit(){
    this.handleUnmatchingCellTypes();
  }

  ngOnChanges() {
    if (this.settings) {
      // when settings provided
      this.columnMaps = this.settings.map((col) => new ColumnMap(col));
    } else {
      // no settings, create column maps with defaults
      this.columnMaps = Object.keys(this.records[0]).map((key) => {
        return new ColumnMap({ primaryKey: key });
      });
    }
    if (this.selectedCellsState){
      this.cellsStates = this.selectedCellsState.cellsStates;
    }else{
      console.log("selectedCellsState is empty");
      this.cellsStates = [];
    }

    this.displayedColumns = this.columnMaps.map((col) => col.header);
    this.LAST_EDITABLE_ROW = this.records.length - 1;
    this.LAST_EDITABLE_COL = this.displayedColumns.length - 1;

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

  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    this.tableInlineEditService.onKeyUpTable(
      event,
      this.records,
      this.columnMaps,
      this.LAST_EDITABLE_COL,
      this.LAST_EDITABLE_ROW,
      this.FIRST_EDITABLE_COL,
      this.FIRST_EDITABLE_ROW
    );
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent, rowId: number, colId: number, cellsType: string) {

    const targetElement = event.target as HTMLElement;

    const elId = this.createCellId(rowId, colId);
    const tableCellElement = document.getElementById(elId) as HTMLElement;

    // Check if the click was outside the element
    if (targetElement === tableCellElement) {
      this.tableInlineEditService.onMouseDownTable(rowId, colId, cellsType, this.selectedCellsState);
    }else{
      const keyEventData = { isTrusted: true, key: "Enter" };
      const keyBoardEvent = new KeyboardEvent("keyup", keyEventData);
      this.onKeyUp(keyBoardEvent);
    }
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

  createCellId(i:number,j:number): string{
    return `${i}${j}`;
  }

}
