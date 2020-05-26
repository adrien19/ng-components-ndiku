import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { TableType } from './table-layout-conf.model';

@Directive({ selector: '[ndikuStyleCell]' })
export class StyleCellDirective implements OnInit {
  @Input() ndikuStyleCell: {
    tableType: TableType;
    contentType: string;
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const types = TableType;
    if (
      this.ndikuStyleCell.contentType === undefined &&
      this.ndikuStyleCell.tableType ===  types.MatTable
    ) {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#dcdcdc');
      // this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
    }
    if (
      this.ndikuStyleCell.contentType === undefined &&
      this.ndikuStyleCell.tableType === types.DefaultTable
    ) {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#dcdcdc');
      this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
    }
    if (
      typeof this.ndikuStyleCell.contentType === 'number' &&
      this.ndikuStyleCell.tableType === types.DefaultTable
    ) {
      this.renderer.setStyle(this.el.nativeElement, 'text-align', 'right');
      this.renderer.setStyle(this.el.nativeElement, 'padding-right', '10%');
    }
  }
}
