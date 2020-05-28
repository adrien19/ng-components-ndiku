import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project, Person } from './fake.model';
import { TableDataService } from './tableDataService';
import { ColumnSetting } from 'projects/ng-components-ndiku/src/public_api';

import { TableInlineEditService } from 'projects/ng-components-ndiku/src/lib/table/inline-editable/table-inline-edit.service';
import { Subscription } from 'rxjs';
import { TableEntryType } from 'projects/ng-components-ndiku/src/lib/table/tableEntryType';

@Component({
  selector: `app-table-demo`,
  template: `
    <div class="container-fluid">
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
      primaryKey: 'name',
      editable: true
    },
    {
      primaryKey: 'YEAR_JOINED',
      header: 'Joined',
      editable: true
    },
    {
      primaryKey: 'missions',
      editable: true
    },
    {
      primaryKey: 'manager',
      editable: true
    },
    {
      primaryKey: 'crewWith',
      header: 'Crew mates',
      editable: true
    },
  ];

  tableConfig: TableEntryType;
  peapleTableConfig: TableEntryType;

  projects: Project[];
  people: Person[];

  inlineTableDataSub: Subscription;

  constructor(private tableDataService: TableDataService, private inlineTableDataService: TableInlineEditService) {}

  ngOnDestroy(): void {
    if (this.inlineTableDataSub) {
      this.inlineTableDataSub.unsubscribe();
    }
  }

  ngOnInit() {
    this.projects = this.tableDataService.getProjects();
    this.people = this.tableDataService.getPersonnel();
    this.tableConfig = new TableEntryType("mat-table", "projectsTable", this.projects, true, 3);
    this.peapleTableConfig = new TableEntryType("default", "peapleTable", this.people, true, 5);

    this.inlineTableDataSub = this.inlineTableDataService.dataSource$.subscribe((data) => {
      if (data) {
        if (data.tableId === this.tableConfig.tableId) {
          this.projects = data.editedData;
        }else{
          this.people = data.editedData;
        }
      }
    });
  }
}
