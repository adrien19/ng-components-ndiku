import { Component, OnInit } from '@angular/core';
import { Project, Person } from './fake.model';
import { TableDataService } from './tableDataService';
import { ColumnSetting } from 'ng-components-ndiku';
import { Column } from 'projects/ng-components-ndiku/src/lib/table/inline-editable/table-inline-edit-conf.model';

@Component({
  selector: `app-table-demo`,
  template: `
    <div class="container-fluid">
      <ndiku-table-layout
        [table]="'mat-table'"
        [records]="projects"
        [caption]="'NASA Projects'"
        [settings]="projectsTableConfigSettings"
        class=" tableCaption projectsTable"
      >
      </ndiku-table-layout>
      <ndiku-table-layout
        [records]="people"
        [caption]="'NASA Astronauts'"
        [settings]="personnelSettings"
        class=" tableCaption astronautsTable"
      >
      </ndiku-table-layout>

      <ndiku-table-layout
        [records]="dataSource"
        [caption]="'Sample Data'"
        class=" tableCaption sampleDataTable"
      >
      </ndiku-table-layout>
      <!-- [columns]="['position', 'name', 'weight', 'symbol']" -->
      <!-- [dataSource]="dataSource" -->
      <ndiku-inline-table-layout [dataSource]="dataSource" [columns]="testEditableTable">
      </ndiku-inline-table-layout>
    </div>
  `,
  styles: [
    `
      ::ng-deep .tableCaption table caption {
        font-size: 28px;
        font-weight: bold;
        padding-bottom: 20px;
      }

      ::ng-deep .tableCaption table {
        background-color: white;
        margin-top: 30px;
      }
    `,
  ],
})
export class TableDemoComponent implements OnInit {
  projectsTableConfigSettings: ColumnSetting[] = [
    {
      primaryKey: 'name',
      header: 'Name',
    },
    {
      primaryKey: 'first_Launch',
      header: 'First Launch',
      alternativeKeys: ['launch', 'FIRST_FLIGHT'],
    },
    {
      primaryKey: 'cost',
      header: 'Cost',
      format: 'currency',
      alternativeKeys: ['TOTAL_COST'],
    },
  ];

  personnelSettings: ColumnSetting[] = [
    { primaryKey: 'name' },
    { primaryKey: 'YEAR_JOINED', header: 'Joined' },
    { primaryKey: 'missions' },
    { primaryKey: 'manager' },
    { primaryKey: 'crewWith', header: 'Crew mates' },
  ];

  testEditableTable: Column[] = [
    {
      col: 'position',
      label: 'Position',
      editable: false,
    },
    {
      col: 'name',
      label: 'Name',
      editable: true,
    },
    {
      col: 'weight',
      label: 'Weight',
      editable: true,
      sum: 4
    }
  ]

  projects: Project[];
  people: Person[];
  dataSource = ELEMENT_DATA;

  constructor(private tableDataService: TableDataService) {}

  ngOnInit() {
    this.projects = this.tableDataService.getProjects();
    this.people = this.tableDataService.getPersonnel();
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
