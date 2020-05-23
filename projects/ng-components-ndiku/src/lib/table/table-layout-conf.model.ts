export enum TableType {
  MatTable,
  DefaultTable,
}

export class ColumnSetting {
  primaryKey: string;
  header?: string;
  format?: string;
  alternativeKeys?: string[];
}

export class ColumnMap {
  primaryKey: string;
  private _HEADER: string;
  private _FORMAT: string;
  alternativeKeys?: string[];

  constructor(settings: ColumnSetting) {
    this.primaryKey = settings.primaryKey;
    this.header = settings.header;
    this.format = settings.format;
    this.alternativeKeys = settings.alternativeKeys;
  }
  set header(setting: string) {
    this._HEADER = setting
      ? setting
      : this.primaryKey.slice(0, 1).toUpperCase() +
        this.primaryKey.replace(/_/g, ' ').slice(1);
  }
  get header() {
    return this._HEADER;
  }
  set format(setting: string) {
    this._FORMAT = setting ? setting : 'default';
  }
  get format() {
    return this._FORMAT;
  }
  access = function(object: any) {
    if (object[this.primaryKey] || !this.alternativeKeys) {
      return this.primaryKey;
    }
    for (const key of this.alternativeKeys) {
      if (object[key]) {
        return key;
      }
    }
    return this.primaryKey;
  };
}
