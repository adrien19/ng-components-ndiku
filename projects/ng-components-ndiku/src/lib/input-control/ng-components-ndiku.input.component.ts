import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from './ng-component-ndiku.errormatcher.service';
import { NgComponentsNdikuService } from './ng-components-ndiku.service';
import { InputControlConfigs } from './inputControlConfigs.model';

@Component({
  selector: 'lib-ng-ndiku-input',
  templateUrl: './ng-components-ndiku.input.component.html',
  styleUrls: ['./ng-components-ndiku.input.component.scss'],
})
export class NgComponentsNdikuComponent implements OnInit, OnDestroy {
  matcher = new MyErrorStateMatcher();

  // private _REQUIRED = false;
  // private _NOTEMPTY = false;
  // get required() {
  //   return this._REQUIRED;
  // }
  // set required(value: any) {
  //   this._REQUIRED = coerceBooleanProperty(value);
  // }

  // get notEmpty() {
  //   return this._NOTEMPTY;
  // }
  // set notEmpty(value: any) {
  //   this._NOTEMPTY = coerceBooleanProperty(value);
  // }

  inputType = 'text';
  inputId = 'input';
  inputLabel: string;
  inputPlaceholder = '';

  inputSub: Subscription;
  serviceSub: Subscription;

  // onComponentReady: provides method to bind to for adding the input control as child
  // to a parent form.
  // @Output() inputComponentReady: EventEmitter<FormGroup> = new EventEmitter<
  //   FormGroup
  // >();

  // @Output() inputChanged: EventEmitter<any> = new EventEmitter();

  componentFormGroup: FormGroup;

  buildInputControl$: Observable<InputControlConfigs>;

  constructor(
    private fb: FormBuilder,
    private ngComponentsNdikuService: NgComponentsNdikuService
  ) {}

  ngOnDestroy(): void {
    if (this.inputSub) {
      this.inputSub.unsubscribe();
    }
    if (this.serviceSub) {
      this.serviceSub.unsubscribe();
    }
  }

  ngOnInit() {
    this.buildInputControl$ = this.ngComponentsNdikuService.inputControl$.pipe(
      tap((inputControlConfigs) => {
        // construct validators based on component input properties
        this.inputLabel = inputControlConfigs.inputLabel;
        this.inputId = inputControlConfigs.inputId;

        const validators = [];
        if (inputControlConfigs.required) {
          // this.required = inputControlConfigs.required;
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
          input: ['', validators],
        });
        this.inputSub = this.componentFormGroup.controls.input.valueChanges.subscribe(
          (value) => {
            this.ngComponentsNdikuService.inputValueChanged$.next(value);
          }
        );
        this.ngComponentsNdikuService.attachInputControl(
          inputControlConfigs.parentForm,
          `${inputControlConfigs.inputType}Group`,
          this.componentFormGroup
        );
      })
    );
  }
}
