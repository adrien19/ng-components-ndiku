import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MaterialModule,
  NgComponentsNdikuModule,
  NgComponentsNdikuSelectModule,
  TableLayoutModule,

} from 'ng-components-ndiku';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableDemoComponent } from './table-data/table-demo.component';

@NgModule({
  declarations: [AppComponent, TableDemoComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgComponentsNdikuModule,
    NgComponentsNdikuSelectModule,
    TableLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent, TableDemoComponent],
})
export class AppModule {}
