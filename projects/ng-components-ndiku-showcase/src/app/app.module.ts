import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgComponentsNdikuModule } from 'projects/ng-components-ndiku/src/lib/input-control';
import { NgComponentsNdikuSelectModule } from 'projects/ng-components-ndiku/src/lib/select-control';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'projects/ng-components-ndiku/src/lib/input-control/material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgComponentsNdikuModule,
    NgComponentsNdikuSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
