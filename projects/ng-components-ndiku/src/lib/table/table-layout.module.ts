import { NgModule } from "@angular/core";
// import { MaterialModule } from 'ng-components-ndiku';
import { TableLayoutComponent } from './table-layout.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormatCellPipe } from './table-format-cell.pipe';
import { StyleCellDirective } from './table-style-cell.directive';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    TableLayoutComponent,
    FormatCellPipe,
    StyleCellDirective
  ],

  imports: [
    CommonModule,
    // MaterialModule
    MatTableModule,
  ],
  exports: [
    TableLayoutComponent,
    FormatCellPipe,
    StyleCellDirective
  ],

  providers: [ CurrencyPipe ]
})

export class TableLayoutModule {}
