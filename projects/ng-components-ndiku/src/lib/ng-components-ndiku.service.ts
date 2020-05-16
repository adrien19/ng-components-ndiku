import { Injectable } from '@angular/core';


export interface SelectInputConfigs {
  required: string;
  notEmpty: string;
  type: string;
  id: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class NgComponentsNdikuService {

  constructor() { }
}
