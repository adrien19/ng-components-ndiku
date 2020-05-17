import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface InputControlConfigs {
  required: boolean;
  notEmpty: boolean;
  inputId?: string;
  inputType?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NgComponentsNdikuService {
  public inputControl$ = new Subject<InputControlConfigs>();

  public createEmailInput(
    required: boolean,
    notEmpty: boolean,
    inputId?: string,
    inputLabel?: string,
    inputPlaceholder?: string
  ) {
    console.log('I AM BEING CALLED!');

    this.inputControl$.next(
      this.createInputControl(
        required,
        notEmpty,
        inputId,
        'email',
        inputLabel,
        inputPlaceholder
      )
    );
  }

  private createInputControl(
    required: boolean,
    notEmpty: boolean,
    inputId?: string,
    inputType?: string,
    inputLabel?: string,
    inputPlaceholder?: string
  ): InputControlConfigs {
    return {
      required,
      notEmpty,
      inputId,
      inputType,
      inputLabel,
      inputPlaceholder,
    };
  }
}
