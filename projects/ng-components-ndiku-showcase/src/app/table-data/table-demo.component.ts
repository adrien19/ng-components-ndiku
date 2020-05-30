import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project, Person } from './fake.model';
import { TableDataService } from './tableDataService';
import { ColumnSetting, TableInlineEditService, TableEntryType } from 'projects/ng-components-ndiku/src/public_api';
import { Subscription } from 'rxjs';

@Component({
  selector: `app-table-demo`,
  template: `
    <div class="container-fluid">
      <ng-container>
        <button
          mat-flat-button
          color="primary"
          (click)="clearEditedTableData()"
        >
          Clear Edited Table data
        </button>
      </ng-container>

      <ndiku-table-layout
        [table]="tableConfig"
        [caption]="'NASA Projects'"
        [settings]="projectsTableConfigSettings"
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
      format: { formatType: 'date', dateFormat: 'short' },
      alternativeKeys: ['launch', 'FIRST_FLIGHT'],
      editable: true,
    },
    {
      primaryKey: 'cost',
      header: 'Cost',
      format: { formatType: 'currency', currencyCode: 'USD' },
      alternativeKeys: ['TOTAL_COST'],
      editable: true,
    },
  ];

  personnelSettings: ColumnSetting[] = [
    {
      primaryKey: 'name',
      editable: true,
    },
    {
      primaryKey: 'YEAR_JOINED',
      header: 'Joined',
      format: { formatType: 'date', dateFormat: 'yyyy' },
      editable: true,
    },
    {
      primaryKey: 'missions',
      editable: true,
    },
    {
      primaryKey: 'manager',
      editable: true,
    },
    {
      primaryKey: 'crewWith',
      header: 'Crew mates',
      editable: true,
    },
  ];

  tableConfig: TableEntryType;
  peapleTableConfig: TableEntryType;

  projects: Project[];
  people: Person[];

  inlineTableDataSub: Subscription;

  constructor(
    private tableDataService: TableDataService,
    private inlineTableDataService: TableInlineEditService
  ) {}

  ngOnDestroy(): void {
    if (this.inlineTableDataSub) {
      this.inlineTableDataSub.unsubscribe();
    }
  }

  ngOnInit() {
    this.projects = this.tableDataService.getProjects();
    this.people = this.tableDataService.getPersonnel();
    this.tableConfig = new TableEntryType(
      'mat-table',
      'projectsTable',
      this.projects,
      true,
      3
    );
    this.peapleTableConfig = new TableEntryType(
      'default',
      'peapleTable',
      this.people,
      true,
      5
    );

    this.inlineTableDataSub = this.inlineTableDataService.dataSource$.subscribe(
      (data) => {
        if (data) {
          if (data.table.tableId === this.tableConfig.tableId) {
            this.tableConfig = data.table;
            this.projects = data.table.dataSource;
            console.log(`THESE ARE RETURNED: ${data.table.dataSource[0].cost}`);
          } else {
            this.peapleTableConfig = data.table;
            this.people = data.table.dataSource;
          }
        }
      }
    );
  }

  clearEditedTableData() {
    if (this.tableConfig.hasBeenEdited(this.tableConfig.tableId)) {
      this.tableConfig.clearEditedCells(this.tableConfig.tableId);
    }
    if (this.peapleTableConfig.hasBeenEdited(this.peapleTableConfig.tableId)) {
      this.peapleTableConfig.clearEditedCells(this.peapleTableConfig.tableId);
    }
    this.inlineTableDataService.clearSavedDataInitiated$.next(); // send an event to clear colored edited data
  }
}
