// ./project-center/project.service.ts
import { Injectable } from '@angular/core';
import { Project, Person } from './fake.model';
import { PROJECTS, PERSONNEL } from './fake-data';

@Injectable({ providedIn: 'root'})
export class TableDataService {
    getProjects(): Project[] {
        // actual implementation would use async method
        return PROJECTS;
    }
    getPersonnel(): Person[] {
        return PERSONNEL;
    }
}
