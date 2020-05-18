import { NgModule } from '@angular/core';
import { NgComponentsNdikuComponent } from './ng-components-ndiku.input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NgComponentsNdikuComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,

  ],
  exports: [NgComponentsNdikuComponent],
})
export class NgComponentsNdikuModule {}
