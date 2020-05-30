import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TableLayoutComponent } from './table-layout.component';
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  PercentPipe,
} from '@angular/common';
import { FormatCellPipe } from './table-format-cell.pipe';
import { StyleCellDirective } from './table-style-cell.directive';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TableLayoutComponent, FormatCellPipe, StyleCellDirective],

  imports: [CommonModule, HttpClientModule, MatTableModule, MatButtonModule],
  exports: [
    HttpClientModule,
    TableLayoutComponent,
    FormatCellPipe,
    StyleCellDirective,
    MatSnackBarModule,
    MatButtonModule,
  ],

  providers: [CurrencyPipe, DatePipe, PercentPipe],
})
export class TableLayoutModule {}
