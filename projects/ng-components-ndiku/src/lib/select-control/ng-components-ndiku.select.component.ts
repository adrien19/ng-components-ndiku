import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-select-ndiku',
  template: `<h1>Hello {{ name }}, this is just a test.</h1>`,
})
export class NgComponentsNdikuSelectComponent {
  @Input() name: string;
}
