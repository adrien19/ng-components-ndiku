import { Component } from '@angular/core';
import { NgComponentsNdikuService } from 'projects/ng-components-ndiku/src/public_api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-components-ndiku-showcase';

  editBaseForm: FormGroup;
  enteredEmail = '';
  enteredPassword = '';
  inputValueSubscription: Subscription;

  constructor(
    fb: FormBuilder,
    private ngComponentsNdikuService: NgComponentsNdikuService
  ) {
    this.editBaseForm = fb.group({
      name: [''],
    });
  }

  onAddItem() {}

  subscribeToInputValue() {
    this.inputValueSubscription = this.ngComponentsNdikuService.inputValueChanged$.subscribe(
      (value) => {
        this.enteredPassword = value;
      }
    );
  }

  createPasswordInputControl() {
    this.ngComponentsNdikuService.createInputControl({
      parentForm: this.editBaseForm,
      required: true,
      notEmpty: true,
      inputType: 'password',
      inputId: 'myPassword',
      inputLabel: 'Password',
      inputPlaceholder: 'Enter Password',
    });
  }

  unSubscribeToInputValue() {
    if (this.inputValueSubscription) {
      this.inputValueSubscription.unsubscribe();
    }
  }
}
