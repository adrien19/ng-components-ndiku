import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { InputControlConfigs } from './inputControlConfigs.model';

@Injectable({
  providedIn: 'root',
})
export class NgComponentsNdikuService {
  public inputControl$ = new Subject<InputControlConfigs>();
  public inputValueChanged$ = new Subject<any>();

  public createInputControl(configs: {
    parentForm: FormGroup;
    required: boolean;
    notEmpty: boolean;
    inputType: string;
    inputId?: string;
    inputLabel?: string;
    inputPlaceholder?: string;
  }): void {
    this.inputControl$.next(
      this.createInputControlConfigs(
        configs.parentForm,
        configs.required,
        configs.notEmpty,
        configs.inputId,
        configs.inputType,
        configs.inputLabel,
        configs.inputPlaceholder
      )
    );
  }

  public attachInputControl(
    parentGroup: FormGroup,
    childName: string,
    childGroup: FormGroup
  ) {
    parentGroup.addControl(childName, childGroup);
  }

  private createInputControlConfigs(
    parentForm: FormGroup,
    required: boolean,
    notEmpty: boolean,
    inputId?: string,
    inputType?: string,
    inputLabel?: string,
    inputPlaceholder?: string
  ): InputControlConfigs {
    return {
      parentForm,
      required,
      notEmpty,
      inputId,
      inputType,
      inputLabel,
      inputPlaceholder,
    };
  }
}
