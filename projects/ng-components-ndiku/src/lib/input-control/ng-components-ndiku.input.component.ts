import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from './ng-component-ndiku.errormatcher.service';
import { NgComponentsNdikuService } from './ng-components-ndiku.service';
import { InputControlConfigs } from './inputControlConfigs.model';

@Component({
  selector: 'ndiku-ng-input',
  template: `
    <form
      [formGroup]="componentFormGroup"
      *ngIf="buildInputControl$ | async as buildInputControl"
    >
      <mat-form-field>
        <mat-label *ngIf="buildInputControl.inputLabel">{{
          buildInputControl.inputLabel
        }}</mat-label>
        <input
          matInput
          [type]="buildInputControl.inputType"
          [id]="buildInputControl.inputId"
          [placeholder]="buildInputControl.inputPlaceholder"
          formControlName="input"
          [errorStateMatcher]="matcher"
        />

        <mat-error
          *ngIf="
            buildInputControl.inputType === 'email' &&
            buildInputControl.required &&
            componentFormGroup.controls.input.hasError('required')
          "
        >
          email field is required.
        </mat-error>
        <mat-error
          *ngIf="
            buildInputControl.inputType === 'email' &&
            buildInputControl.required &&
            !componentFormGroup.controls.input.hasError('required') &&
            !componentFormGroup.controls.input.valid
          "
        >
          Please enter valid email.
        </mat-error>
        <mat-error
          *ngIf="
            buildInputControl.inputType === 'email' &&
            !buildInputControl.required &&
            !componentFormGroup.controls.input.valid
          "
        >
          Please enter valid email.
        </mat-error>

        <mat-error
          *ngIf="
            buildInputControl.inputType === 'password' &&
            buildInputControl.required &&
            componentFormGroup.controls.input.hasError('required')
          "
        >
          password field is required.
        </mat-error>

        <mat-error
          *ngIf="
            buildInputControl.inputType !== 'email' &&
            buildInputControl.inputType !== 'password' &&
            buildInputControl.required &&
            componentFormGroup.controls.input.hasError('required')
          "
        >
          Please enter valid input.
        </mat-error>
      </mat-form-field>
    </form>
  `,
  styles:['']
})
export class NgComponentsNdikuComponent implements OnInit, OnDestroy {
  matcher = new MyErrorStateMatcher();

  inputType = 'text';
  inputId = 'input';
  inputLabel: string;
  inputPlaceholder = '';

  inputSub: Subscription;
  serviceSub: Subscription;

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
          `${inputControlConfigs.inputId}Group`,
          this.componentFormGroup
        );
      })
    );
  }
}
