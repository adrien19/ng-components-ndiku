import { FormGroup } from '@angular/forms';

export interface InputControlConfigs {
  parentForm: FormGroup;
  required: boolean;
  notEmpty: boolean;
  inputId?: string;
  inputType?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
}
