import { NgModule } from "@angular/core";
import { TableLayoutComponent } from './table-layout.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormatCellPipe } from './table-format-cell.pipe';
import { StyleCellDirective } from './table-style-cell.directive';


@NgModule({
  declarations: [
    TableLayoutComponent,
    FormatCellPipe,
    StyleCellDirective
  ],

  imports: [
    CommonModule
  ],
  exports: [
    TableLayoutComponent,
    FormatCellPipe,
    StyleCellDirective
  ],

  providers: [ CurrencyPipe ]
})

export class TableLayoutModule {}
