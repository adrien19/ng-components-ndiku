import { TestScheduler } from 'rxjs/testing';
import { NgComponentsNdikuService } from './ng-components-ndiku.service';
import { FormBuilder } from '@angular/forms';

describe('NgComponentsNdikuService', () => {
  let service: NgComponentsNdikuService;
  let scheduler: TestScheduler;
  const fb = new FormBuilder();

  beforeEach(() => {
    service = new NgComponentsNdikuService();
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should create an input control of type email', () => {
    const expectedConfig = {
      parentForm: fb.group({
        name: [''],
      }),
      required: false,
      notEmpty: true,
      inputId: 'email',
      inputType: 'email',
      inputLabel: 'Name',
      inputPlaceholder: 'enter email',
    };

    service.createInputControl(expectedConfig);
    scheduler
      .expectObservable(service.inputControl$)
      .toBe('a', { a: expectedConfig });
  });
});
