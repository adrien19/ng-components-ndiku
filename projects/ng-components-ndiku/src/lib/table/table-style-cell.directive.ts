import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({ selector: '[ndikuStyleCell]' })
export class StyleCellDirective implements OnInit {

  @Input() ndikuStyleCell: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.ndikuStyleCell === undefined) {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#dcdcdc');
      this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
    }
    if (typeof this.ndikuStyleCell === 'number') {
      this.renderer.setStyle(this.el.nativeElement, 'text-align', 'right');
    }
  }
}
