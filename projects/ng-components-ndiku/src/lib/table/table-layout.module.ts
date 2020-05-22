import { NgModule } from "@angular/core";
import { TableLayoutComponent } from './table-layout.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    TableLayoutComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    TableLayoutComponent
  ]
})

export class TableLayoutModule {}
