import { Component, OnInit } from "@angular/core";
import { Project, Person } from './fake.model';
import { TableDataService } from './tableDataService';

@Component({
  selector: `app-table-demo`,
  template: `
    <ndiku-table-layout [records]="projects"
          [caption]="'NASA Projects'">
    </ndiku-table-layout>
    <ndiku-table-layout [records]="people"
          [caption]="'NASA Astronauts'">
    </ndiku-table-layout>
  `,
  styles: [``]
})

export class TableDemoComponent implements OnInit {

  projects: Project[];
  people: Person[];

  constructor(private tableDataService: TableDataService,){}

  ngOnInit(){
    this.projects = this.tableDataService.getProjects();
    this.people =   this.tableDataService.getPersonnel();
    console.log(this.projects);
    console.log(this.people);
  }
}
