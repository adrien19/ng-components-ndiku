import { Component, OnInit } from '@angular/core';
import { Project, Person } from './fake.model';
import { TableDataService } from './tableDataService';
import { ColumnSetting } from 'projects/ng-components-ndiku/src/lib/table/table-layout-conf.model';

@Component({
  selector: `app-table-demo`,
  template: `
    <ndiku-table-layout
      [records]="projects"
      [caption]="'NASA Projects'"
      [settings]="projectsTableConfigSettings"
    >
    </ndiku-table-layout>
    <ndiku-table-layout
      [records]="people"
      [caption]="'NASA Astronauts'"
      [settings]="personnelSettings"
    >
    </ndiku-table-layout>
  `,
  styles: [``],
})
export class TableDemoComponent implements OnInit {
  projectsTableConfigSettings: ColumnSetting[] = [
    {
      primaryKey: 'name',
      header: 'Name',
    },
    {
      primaryKey: 'first_launch',
      header: 'First Launch',
      alternativeKeys: ['launch', 'first_flight'],
    },
    {
      primaryKey: 'cost',
      header: 'Cost',
      format: 'currency',
      alternativeKeys: ['total_cost'],
    },
  ];

  personnelSettings: ColumnSetting[] = [
    { primaryKey: 'name' },
    { primaryKey: 'year_joined', header: 'Joined' },
    { primaryKey: 'missions' },
    { primaryKey: 'manager' },
    { primaryKey: 'crewWith', header: 'Crew mates' },
  ];

  projects: Project[];
  people: Person[];

  constructor(private tableDataService: TableDataService) {}

  ngOnInit() {
    this.projects = this.tableDataService.getProjects();
    this.people = this.tableDataService.getPersonnel();
    console.log(this.projects);
    console.log(this.people);
  }
}
