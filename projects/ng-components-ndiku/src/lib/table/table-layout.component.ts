import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ColumnSetting, ColumnMap } from './table-layout-conf.model';


@Component({
  selector: 'ndiku-table-layout',
  template: `
    <!-- <table class="table">
      <caption *ngIf="caption">
        {{
          caption
        }}
      </caption>
      <thead>
        <tr>
          <th *ngFor="let map of columnMaps">{{ map.header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let record of records">
          <td
            *ngFor="let map of columnMaps"
            [ndikuStyleCell]="record[map.access(record)]"
          >
            {{ record[map.access(record)] | formatCell: map.format }}
          </td>
        </tr>
      </tbody>
    </table> -->

    <table mat-table [dataSource]="records" class="mat-elevation-z0">
      <ng-container *ngFor="let map of columnMaps" matColumnDef="{{ map.header}}">
        <th mat-header-cell *matHeaderCellDef
          mat-sort-header
        >
          {{ map.header }}
        </th>
        <ng-container>
          <td mat-cell *matCellDef="let record"
            [ndikuStyleCell]="record[ map.access(record) ]"
          >
            {{record[map.access(record)] | formatCell:map.format}}
          </td>
        </ng-container>
      </ng-container>

      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row ; columns: displayedColumns"></mat-row>
    </table>
  `,
  styles: [`
    table {
      width: 100%;
    }

    /* .mat-table-column:first-child {
      border-right: 1px solid #e0e0e0;
    }*/

    /* .mat-column:!last-child {
      border-right: 1px solid #e0e0e0;
    }  */

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
      /* border-bottom-style: solid; */
    }
  `],
})
export class TableLayoutComponent implements OnChanges {
  private _RECORDS: any[];
  private _CAPTION: string;
  private _KEYS: string[];
  private _SETTINGS: ColumnSetting[];
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

  constructor() {}

  ngOnChanges() {
    if (this.settings) {
      // when settings provided
      this.columnMaps = this.settings.map((col) => new ColumnMap(col));
      // this.displayedColumns = this.columnMaps.map(col => col.header);
    } else {
      // no settings, create column maps with defaults
      this.columnMaps = Object.keys(this.records[0]).map((key) => {
        return new ColumnMap({ primaryKey: key });
      });
    }
    this.displayedColumns = this.columnMaps.map(col => col.header);
  }

}
