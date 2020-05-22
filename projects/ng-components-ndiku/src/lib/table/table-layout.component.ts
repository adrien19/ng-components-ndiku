import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ColumnSetting } from './table-layout-conf.model';


@Component({
  selector: 'ndiku-table-layout',
  template: `
  <table class="table">
    <caption *ngIf="caption">{{ caption }}</caption>
    <thead>
        <tr>
            <th *ngFor="let map of columnMaps">{{ map.header }}</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let record of records">
            <td *ngFor="let map of columnMaps"
              [ndikuStyleCell]="record[map.primaryKey]">
              {{ record[ map.primaryKey] | formatCell:map.format }}
            </td>
        </tr>
    </tbody>
  </table>
  `,
  styles: [``]
})

export class TableLayoutComponent implements OnChanges {

  private _RECORDS: any[];
  private _CAPTION: string;
  private _KEYS: string[];
  private _SETTINGS: ColumnSetting[];
  columnMaps: ColumnSetting[];

  @Input()
  public get records() : any[] {
    return this._RECORDS;
  }
  public set records(value : any[]) {
    this._RECORDS = value;
  }

  @Input()
  public get caption() : string {
    return this._CAPTION
  }
  public set caption(value : string) {
    this._CAPTION = value;
  }

  public get keys() : string[] {
    return this._KEYS;
  }
  public set keys(value : string[]) {
    this._KEYS = value;
  }

  @Input()
  public get settings() : ColumnSetting[] {
    return this._SETTINGS;
  }
  public set settings(value : ColumnSetting[]) {
    this._SETTINGS = value;
  }


  constructor(){}

  ngOnChanges() {
    if (this.settings) { // when settings provided
      this.columnMaps = this.settings;// TODO
      // if no format provided - initialize to 'default'

    } else { // no settings, create column maps with defaults
        this.columnMaps = Object.keys(this.records[0])
            .map( key => {
                return {
                    primaryKey: key,
                    header: key.slice(0, 1).toUpperCase() +
                      key.replace(/_/g, ' ' ).slice(1),
                    format: 'default'
            }
        });
    }
  }


}
