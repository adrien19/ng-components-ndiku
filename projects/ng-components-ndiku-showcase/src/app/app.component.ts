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
  emailValueSubscription: Subscription;
  passwordValueSubscription: Subscription;

  constructor(
    fb: FormBuilder,
    private ngComponentsNdikuService: NgComponentsNdikuService
  ) {
    this.editBaseForm = fb.group({
      name: [''],
    });
  }

  onAddItem() {}

  subscribeToEmailValue() {
    this.emailValueSubscription = this.ngComponentsNdikuService.inputValueChanged$.subscribe(
      (value) => {
        this.enteredEmail = value;
      }
    );
  }

  subscribeToPasswordValue() {
    this.passwordValueSubscription = this.ngComponentsNdikuService.inputValueChanged$.subscribe(
      (value) => {
        this.enteredPassword = value;
      }
    );
  }

  unSubscribeToInputValue() {
    if (this.emailValueSubscription) {
      this.emailValueSubscription.unsubscribe();
    }

    if (this.passwordValueSubscription) {
      this.passwordValueSubscription.unsubscribe();
    }
  }

  addChild(childName: string, childGroup: FormGroup) {
    this.editBaseForm.addControl(childName, childGroup);
  }
}
