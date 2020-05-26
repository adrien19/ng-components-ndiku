
import { TableType } from './table-layout-conf.model';

export class TableEntryType {
  private _TABLE_TYPE: TableType;
  dataSource: any[];
  inlineEditable? = false;

  constructor(tableTypeName: string, dataSource: any[], inlineEditable?: boolean) {
    if (tableTypeName === "mat-table") {
      this.tableType = TableType.MatTable;
    }else{
      this.tableType = TableType.DefaultTable;
    }
    this.dataSource = dataSource;
    this.inlineEditable = inlineEditable;
  }


  public get tableType() : any {
    return this._TABLE_TYPE;
  }
  public set tableType(tableType: any) {
    this._TABLE_TYPE = tableType;
  }

}
