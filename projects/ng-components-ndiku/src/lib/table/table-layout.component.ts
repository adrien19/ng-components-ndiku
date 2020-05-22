import { Component, OnInit, Input, OnChanges } from "@angular/core";


@Component({
  selector: 'ndiku-table-layout',
  template: `
  <table class="table">
    <caption *ngIf="caption">{{ caption }}</caption>
    <thead>
        <tr>
            <th *ngFor="let key of keys">{{ key }}</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let record of records">
            <td *ngFor="let key of keys">{{ record[key] }}</td>
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



  constructor(){}

  ngOnChanges() {
    this.keys = Object.keys(this.records[0]);
    console.log(this.keys);
  }


}
