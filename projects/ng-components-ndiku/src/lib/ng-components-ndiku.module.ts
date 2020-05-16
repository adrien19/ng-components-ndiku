import { NgModule } from '@angular/core';
import { NgComponentsNdikuComponent } from './ng-components-ndiku.input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [NgComponentsNdikuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [NgComponentsNdikuComponent]
})
export class NgComponentsNdikuModule { }
