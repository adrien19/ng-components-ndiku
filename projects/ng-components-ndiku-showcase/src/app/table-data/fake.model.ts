export class Project {
  id: number;
  name: string;
  cost?: number;
  TOTAL_COST?: number;
  FIRST_FLIGHT?: string;
  launch?: string;
  status: string;
}
export class Person {
  id: number;
  name: string;
  YEAR_JOINED: number;
  job: string;
  missions: string[];
  crewWith?: {
    id: number;
    name: string;
  }[];
  manager?: any;
}
