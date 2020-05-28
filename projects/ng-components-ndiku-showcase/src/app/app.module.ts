import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import {
//   MaterialModule,
//   NgComponentsNdikuModule,
//   NgComponentsNdikuSelectModule,
//   TableLayoutModule,
// } from 'ng-components-ndiku';

import {
  MaterialModule,
  NgComponentsNdikuModule,
  NgComponentsNdikuSelectModule,
  TableLayoutModule,
} from 'projects/ng-components-ndiku/src/public_api';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableDemoComponent } from './table-data/table-demo.component';
// import { TableInlineLayoutModule } from 'projects/ng-components-ndiku/src/lib/table/inline-editable/table-inline-layout.module';

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
    // TableInlineLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent, TableDemoComponent],
})
export class AppModule {}
