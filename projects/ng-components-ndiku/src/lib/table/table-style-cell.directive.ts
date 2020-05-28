import { Directive, ElementRef, Input, Renderer2, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { TableType } from './table-layout-conf.model';
import { Subscription } from 'rxjs';
import { TableEntryType } from './tableEntryType';
import { TableInlineEditService } from './inline-editable/table-inline-edit.service';

@Directive({ selector: '[ndikuStyleCell]' })
export class StyleCellDirective implements OnInit, OnDestroy, OnChanges {
  @Input() ndikuStyleCell: {
    table: TableEntryType;
    contentType: string;
    selectCell?: {rowId: number, colId: number};
  };
  @Input() directiveCellsStates: boolean[][];

  cellsStatesSub: Subscription;

  constructor(private el: ElementRef, private renderer: Renderer2, private tableInlineEditService: TableInlineEditService ) {}


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {

  }

  ngOnDestroy(): void {
    if (this.cellsStatesSub) {
      this.cellsStatesSub.unsubscribe();
    }
  }

  ngOnInit() {
    this.handlestylingUndefinedValues();
    this.cellsStatesSub = this.tableInlineEditService.updateCellStyle$.subscribe((cellStates) => {
      this.handleStylingSelectedCells();
    });
  }

  handlestylingUndefinedValues(){
    const types = TableType;
    if (
      this.ndikuStyleCell.contentType === undefined &&
      this.ndikuStyleCell.table.tableType ===  types.MatTable
    ) {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#dcdcdc');
      // this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
    }
    if (
      this.ndikuStyleCell.contentType === undefined &&
      this.ndikuStyleCell.table.tableType === types.DefaultTable
    ) {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#dcdcdc');
      this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
    }
    if (
      typeof this.ndikuStyleCell.contentType === 'number' &&
      this.ndikuStyleCell.table.tableType === types.DefaultTable
    ) {
      this.renderer.setStyle(this.el.nativeElement, 'text-align', 'right');
      this.renderer.setStyle(this.el.nativeElement, 'padding-right', '10%');
    }
  }

  handleStylingSelectedCells(){
    if (this.ndikuStyleCell.table.inlineEditable) {

      const rowId = this.ndikuStyleCell.selectCell.rowId;
      const colId = this.ndikuStyleCell.selectCell.colId;
      const tableCells = this.directiveCellsStates;

      if (tableCells[rowId][colId]) {
        console.log(tableCells[rowId][colId]);
        this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #698ad8');

      }else{
        this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
      }

      this.renderer.setStyle(this.el.nativeElement, '-webkit-user-select', 'none'); /* Webkit  */
      this.renderer.setStyle(this.el.nativeElement, '-moz-user-select', 'none'); /* Firefox */
      this.renderer.setStyle(this.el.nativeElement, '-ms-user-select', 'none'); /* IE 10   */
      this.renderer.setStyle(this.el.nativeElement, '-o-user-select', 'none'); /* Currently not supported in Opera but will be soon */
      this.renderer.setStyle(this.el.nativeElement, 'user-select', 'none');
    }
  }
}
