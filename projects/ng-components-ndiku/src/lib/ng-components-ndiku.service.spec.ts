import { TestScheduler } from 'rxjs/testing';
import { NgComponentsNdikuService } from './ng-components-ndiku.service';

describe('NgComponentsNdikuService', () => {
  let service: NgComponentsNdikuService;
  let scheduler: TestScheduler;

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

    const inputType = 'email'

    const expectedConfig = {
      required: false, 
      notEmpty: true, 
      inputId: 'email',
      inputType: inputType, 
      inputLabel: 'Name', 
      inputPlaceholder: 'enter email'
    };

    service.createEmailInput(
      expectedConfig.required,
      expectedConfig.notEmpty,
      expectedConfig.inputId,
      expectedConfig.inputLabel,
      expectedConfig.inputPlaceholder
    );
    scheduler.expectObservable(service.inputControl$).toBe('a', { a: expectedConfig });
  });

});