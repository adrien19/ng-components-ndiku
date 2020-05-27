import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { TableType } from './table-layout-conf.model';

@Directive({ selector: '[ndikuStyleCell]' })
export class StyleCellDirective implements OnInit {
  @Input() ndikuStyleCell: {
    tableType: TableType;
    contentType: string;
    handleSelect?: {selected: boolean, unselected: boolean};
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

    if (this.ndikuStyleCell.handleSelect) {
      const selected = this.ndikuStyleCell.handleSelect.selected;
      const unselected = this.ndikuStyleCell.handleSelect.unselected;
      // console.log(`selected is: ${selected}
      // unselected is: ${unselected}`);

      if (selected) {
        this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #698ad8');
        this.renderer.setStyle(this.el.nativeElement, 'color', '1px solid #698ad8');
      }
      this.renderer.setStyle(this.el.nativeElement, '-webkit-user-select', 'none'); /* Webkit  */
      this.renderer.setStyle(this.el.nativeElement, '-moz-user-select', 'none'); /* Firefox */
      this.renderer.setStyle(this.el.nativeElement, '-ms-user-select', 'none'); /* IE 10   */
      this.renderer.setStyle(this.el.nativeElement, '-o-user-select', 'none'); /* Currently not supported in Opera but will be soon */
      this.renderer.setStyle(this.el.nativeElement, 'user-select', 'none');
    }
  }
}
