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

    <ndiku-table-layout
      [records]="dataSource"
      [caption]="'Sample Data'"
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
  dataSource = ELEMENT_DATA;

  constructor(private tableDataService: TableDataService) {}

  ngOnInit() {
    this.projects = this.tableDataService.getProjects();
    this.people = this.tableDataService.getPersonnel();
    // console.log(this.projects);
    // console.log(this.people);
  }


}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
