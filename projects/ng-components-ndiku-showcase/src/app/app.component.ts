import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgComponentsNdikuService } from 'projects/ng-components-ndiku/src/public-api';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-components-ndiku-showcase';

  editBaseForm: FormGroup;
  enteredEmail = '';

  constructor(
    fb: FormBuilder,
    private ngComponentsNdikuService: NgComponentsNdikuService
  ) {
    this.editBaseForm = fb.group({
      name: [''],
    });
  }

  onAddItem() {}

  createEmailInputControl() {
    this.ngComponentsNdikuService.createEmailInput(
      true,
      false,
      'email',
      'email',
      'enter email'
    );
  }

  public addChild(childName: string, childGroup: FormGroup) {
    this.editBaseForm.addControl(childName, childGroup);
  }

  public showenteredEmail(value: any) {
    this.enteredEmail = value;
  }
}
