import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project, Person } from './fake.model';
import { TableDataService } from './tableDataService';
// import { ColumnSetting } from 'ng-components-ndiku';
import { ColumnSetting } from 'projects/ng-components-ndiku/src/public_api';

import { TableInlineEditService } from 'projects/ng-components-ndiku/src/lib/table/inline-editable/table-inline-edit.service';
import { Subscription } from 'rxjs';
import { SelectedCellsState } from 'projects/ng-components-ndiku/src/lib/table/inline-editable/table-inline-edit-conf.model';
import { TableEntryType } from 'projects/ng-components-ndiku/src/lib/table/tableEntryType';

@Component({
  selector: `app-table-demo`,
  template: `
    <div class="container-fluid">
      <ndiku-table-layout
        [table]="tableConfig"
        [caption]="'NASA Projects'"
        [settings]="projectsTableConfigSettings"
        [selectedCellsState]="selectedCellsState"
        class=" tableCaption projectsTable"
      >
      </ndiku-table-layout>
      <ndiku-table-layout
        [table]="peapleTableConfig"
        [caption]="'NASA Astronauts'"
        [settings]="personnelSettings"
        class=" tableCaption astronautsTable"
      >
      </ndiku-table-layout>
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
export class TableDemoComponent implements OnInit, OnDestroy {

  projectsTableConfigSettings: ColumnSetting[] = [
    {
      primaryKey: 'name',
      header: 'Name',
      editable: true,
    },
    {
      primaryKey: 'first_Launch',
      header: 'First Launch',
      alternativeKeys: ['launch', 'FIRST_FLIGHT'],
      editable: true,
    },
    {
      primaryKey: 'cost',
      header: 'Cost',
      format: 'currency',
      alternativeKeys: ['TOTAL_COST'],
      editable: true,
    },
  ];

  personnelSettings: ColumnSetting[] = [
    {
      primaryKey: 'name'
    },
    {
      primaryKey: 'YEAR_JOINED',
      header: 'Joined'
    },
    {
      primaryKey: 'missions'
    },
    {
      primaryKey: 'manager'
    },
    {
      primaryKey: 'crewWith',
      header: 'Crew mates'
    },
  ];

  tableConfig: TableEntryType;
  peapleTableConfig: TableEntryType;

  projects: Project[];
  people: Person[];

  inlineTableDataSub: Subscription;
  selectedCellsState = new SelectedCellsState();
  cellsStates: boolean[][] = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]

  constructor(private tableDataService: TableDataService, private inlineTableDataService: TableInlineEditService) {}

  ngOnDestroy(): void {
    if (this.inlineTableDataSub) {
      this.inlineTableDataSub.unsubscribe();
    }
  }

  ngOnInit() {
    this.projects = this.tableDataService.getProjects();
    this.people = this.tableDataService.getPersonnel();
    this.tableConfig = new TableEntryType("mat-table", this.projects, true);
    this.peapleTableConfig = new TableEntryType("mat-table", this.people, false);

    const rowsLength = this.projects.length - 1;
    const colsLength = 5;
    this.selectedCellsState.cellsStates = this.cellsStates;

    this.inlineTableDataSub = this.inlineTableDataService.dataSource$.subscribe((returnedSourceData) => {
      if (returnedSourceData) {
        // this.projects = returnedSourceData;
        // returnedSourceData.map(data => {
        //   console.log(`returned data: ${Object.entries(data)}`);
        // });
        // console.log(`returned data: ${Object.entries(returnedSourceData)}`);
      }
    });
  }
}
