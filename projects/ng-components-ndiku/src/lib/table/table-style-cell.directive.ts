import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({ selector: '[ndikuStyleCell]' })
export class StyleCellDirective implements OnInit {
  @Input() ndikuStyleCell: {
    tableType: string;
    contentType: string;
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (
      this.ndikuStyleCell.contentType === undefined &&
      this.ndikuStyleCell.tableType === 'mat-table'
    ) {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#dcdcdc');
      // this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
    }
    if (
      this.ndikuStyleCell.contentType === undefined &&
      this.ndikuStyleCell.tableType === 'default'
    ) {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#dcdcdc');
      this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
    }
    if (
      typeof this.ndikuStyleCell.contentType === 'number' &&
      this.ndikuStyleCell.tableType === 'default'
    ) {
      this.renderer.setStyle(this.el.nativeElement, 'text-align', 'right');
      this.renderer.setStyle(this.el.nativeElement, 'padding-right', '10%');
    }
  }
}
