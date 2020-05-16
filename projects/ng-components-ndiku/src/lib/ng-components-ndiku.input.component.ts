import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgComponentsNdikuService, InputControlConfigs } from './ng-components-ndiku.service';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ErrorStateMatcher } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'ng-ndiku-input',
  templateUrl: './ng-components-ndiku.input.component.html',
  styleUrls: ['./ng-components-ndiku.input.component.scss']
})
export class NgComponentsNdikuComponent implements OnInit, OnDestroy {

  matcher = new MyErrorStateMatcher();

  private _required: boolean = false;
  private _notEmpty: boolean = false;
  get required() { return this._required; }
  set required(value: any) { this._required = coerceBooleanProperty(value); }

  get notEmpty() { return this._notEmpty; }
  set notEmpty(value: any) { this._notEmpty = coerceBooleanProperty(value); }

  inputType: string='text';
  inputId: string='input';
  inputLabel: string='inputLabel was EMPTY';
  inputPlaceholder: string='inputPlaceholder was EMPTY';
  
  inputSub: Subscription;
  serviceSub: Subscription;

  // onComponentReady: Subject<FormGroup> = new Subject<FormGroup>();
  @Output() onComponentReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  // inputChanged: Subject<any> = new Subject();
  @Output() inputChanged: EventEmitter<any> = new EventEmitter();

  componentFormGroup: FormGroup;

  buildInputControl$: Observable<InputControlConfigs>;

  constructor(
    private fb: FormBuilder, 
    private ngComponentsNdikuService: NgComponentsNdikuService,
    ) { }

  ngOnDestroy(): void {
    if (this.inputSub) {
      this.inputSub.unsubscribe();
    }
    if (this.serviceSub) {
      this.serviceSub.unsubscribe();
    }
  }

  ngOnInit() {

    console.log(`[2] We are in ng-components-ndiku.input ${this.ngComponentsNdikuService.inputControl$}`);

    this.buildInputControl$ = this.ngComponentsNdikuService.inputControl$.pipe(
      tap( (inputControlConfigs) => {
        // construct validators based on component input properties
      this.inputLabel = inputControlConfigs.inputLabel;
      this.inputId = inputControlConfigs.inputId;
      console.log(`This are the configs: ${inputControlConfigs}`);
      
      const validators = [];
      if (inputControlConfigs.required) {
        this.required = inputControlConfigs.required;
        validators.push(Validators.required);
      }
      if (inputControlConfigs.inputType === 'email') {
        this.inputType = inputControlConfigs.inputType;
        validators.push(Validators.email);
      }
      if (inputControlConfigs.inputType === 'password') {
        this.inputType = inputControlConfigs.inputType;
        validators.push(Validators.minLength(6));
      }
      this.componentFormGroup = this.fb.group({
        input: ['', validators]
      });
      this.inputSub = this.componentFormGroup.controls.input.valueChanges.subscribe( (value) => {
          // this.inputChanged.next(value);
          this.inputChanged.emit(value);
        } 
      );
      // this.onComponentReady.next(this.componentFormGroup);
      this.onComponentReady.emit(this.componentFormGroup);
      }));


  }


  closeAlert(){

  }

}
