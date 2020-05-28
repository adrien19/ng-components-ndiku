import { Component, Input, OnChanges, OnInit, OnDestroy, HostListener, SimpleChanges } from '@angular/core';
import { ColumnSetting, ColumnMap, TableType } from './table-layout-conf.model';
import { Subscription, BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TableInlineEditService } from './inline-editable/table-inline-edit.service';
import { TableEntryType } from './tableEntryType';

@Component({
  selector: 'ndiku-table-layout',
  template: `
  <ng-container [ngSwitch]="table.tableType">
    <table
      class="table"
      [id]="table.tableId"
      *ngSwitchCase="types.DefaultTable"
      (keyup)="onKeyUp($event, table)"
    >
      <caption *ngIf="caption">
        {{
          caption
        }} {{ "(default Table)" }}
      </caption>
      <thead>
        <tr>
          <th *ngFor="let map of columnMaps" style="text-align: left;">
            {{ map.header }}
          </th>
        </tr>
      </thead>
      <tbody>
          <tr *ngFor="let record of table.dataSource; let i = index">
            <ng-container *ngFor="let map of columnMaps; let j = index">
              <td
                *ngIf="!map.editable && !table.inlineEditable"
                [ndikuStyleCell]="{
                  contentType: record[map.access(record)],
                  table: table
                }"
              >
                {{ record[map.access(record)] | formatCell: map.format }}
              </td>

              <td
                *ngIf="map.editable && table.inlineEditable"
                [id]="createCellId(table.tableId, i, j)"
                (mousedown)="onMouseDown($event, table.tableId, i, j, map.header, table)"
                (mouseup)="onMouseUp(i, j, map.header)"
                [ndikuStyleCell]="{
                  contentType: record[map.access(record)],
                  table: table,
                  selectCell: {rowId: i, colId: j}
                }"
                [directiveCellsStates]="table.tableCellStates.tableCellStates"
              >
                {{ record[map.access(record)] | formatCell: map.format }}
              </td>
            </ng-container>
          </tr>
      </tbody>
    </table>

    <table
      mat-table
      *ngSwitchCase="types.MatTable"
      [dataSource]="table.dataSource"
      class="mat-elevation-z0"
      [id]="table.tableId"
      (keyup)="onKeyUp($event, table)"
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
        <ng-container *ngIf="!map.editable && !table.inlineEditable">
          <td
            mat-cell
            class="unselected"
            *matCellDef="let record"
            [ndikuStyleCell]="{
              contentType: record[map.access(record)],
              table: table
            }"
          >
            {{ record[map.access(record)] | formatCell: map.format }}
          </td>
        </ng-container>
        <ng-container *ngIf="map.editable && table.inlineEditable">
          <td
            mat-cell
            *matCellDef="let record; let i = index"
            [id]="createCellId(table.tableId, i, j)"
            (mousedown)="onMouseDown($event, table.tableId, i, j, map.header, table)"
            (mouseup)="onMouseUp(i, j, map.header)"
            [ndikuStyleCell]="{
              contentType: record[map.access(record)],
              table: table,
              selectCell: {rowId: i, colId: j}
            }"
            [directiveCellsStates]="table.tableCellStates.tableCellStates"
          >
            {{ record[map.access(record)] | formatCell: map.format }}
          </td>
        </ng-container>
      </ng-container>

      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
    </table>

  </ng-container>
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
    `,
  ],
})
export class TableLayoutComponent implements OnInit, OnChanges, OnDestroy {
  private _RECORDS: any[];
  private _CAPTION: string;
  private _KEYS: string[];
  private _SETTINGS: ColumnSetting[];
  private _TABLE: TableEntryType;
  types = TableType;

  columnMaps: ColumnMap[];
  displayedColumns: any[];

  snackBarServiceSub: Subscription;


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
  public get table(): TableEntryType {
    return this._TABLE;
  }
  public set table(tableType: TableEntryType) {
      if (tableType.dataSource) {
        this._TABLE = tableType;
        this.records = tableType.dataSource;
      }else{
        console.log(`NO DATA WAS PROVIDED!!`);

        this._TABLE = tableType;
        this.records = [];
      }
  }

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
    if (this.table.inlineEditable) {
      this.tableInlineEditService.table = this.table;
      this.handleUnmatchingCellTypes();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.settings) {
      if (this.settings) {
        // when settings provided
        this.columnMaps = this.settings.map((col) => new ColumnMap(col));
      } else {
        // no settings, create column maps with defaults
        this.columnMaps = Object.keys(this.records[0]).map((key) => {
          return new ColumnMap({ primaryKey: key });
        });
      }
      this.displayedColumns = this.columnMaps.map((col) => col.header);
    }

    // if (changes.table && this.table.inlineEditable) {
    //   this.tableInlineEditService.table = this.table;
    //   this.tableInlineEditService.columnMaps = this.columnMaps;
    // }
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
  onKeyUp(event: KeyboardEvent, table?: TableEntryType) {
    event.stopImmediatePropagation();
    // this.tableInlineEditService.table = table;
    this.tableInlineEditService.onKeyUpTable(
      event
    );
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent, tableId: any, rowId: number, colId: number, cellsType: string, clickedTable: TableEntryType) {


    // this.table = clickedTable;


    event.stopImmediatePropagation();
    const targetElement = event.target as HTMLElement;

    const elId = this.createCellId(tableId, rowId, colId);
    const tableCellElement = document.getElementById(elId) as HTMLElement;

    // Check if the click was outside the element
    if (targetElement === tableCellElement) {
      this.tableInlineEditService.table = clickedTable;
      this.tableInlineEditService.columnMaps = this.columnMaps;
      this.tableInlineEditService.onMouseDownTable(rowId, colId, cellsType);
    }else{
      const keyEventData = { isTrusted: true, key: "Enter" };
      const keyBoardEvent = new KeyboardEvent("keyup", keyEventData);
      keyBoardEvent.stopImmediatePropagation();
      // this.tableInlineEditService.table = clickedTable;

      this.onKeyUp(keyBoardEvent);
    }
  }

  onMouseUp(rowId: number, colId: number, cellsType: string) {
      this.tableInlineEditService.onMouseUpTable(
        rowId,
        colId,
        cellsType,
      );
  }

  createCellId(tableType: any, i:number,j:number): string{
    return `${tableType}${i}${j}`;
  }

}
