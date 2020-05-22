import { NgModule } from "@angular/core";
import { TableLayoutComponent } from './table-layout.component';
import { CommonModule } from '@angular/common';
import { FormatCellPipe } from './table-format-cell.pipe';


@NgModule({
  declarations: [
    TableLayoutComponent,
    FormatCellPipe
  ],
  imports: [
    CommonModule
  ],

  exports: [
    TableLayoutComponent,
    FormatCellPipe
  ]
})

export class TableLayoutModule {}
