import { TestBed } from '@angular/core/testing';

import { NgComponentsNdikuService } from './ng-components-ndiku.service';

describe('NgComponentsNdikuService', () => {
  let service: NgComponentsNdikuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgComponentsNdikuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
