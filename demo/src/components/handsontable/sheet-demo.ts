// tslint:disable:no-any no-magic-numbers
import {Component} from '@angular/core';
import * as Handsontable from 'handsontable-pro';

@Component({
  selector: 'sheet-demo',
  template: require('./sheet-demo.html')
})
export class SheetDemoComponent {
  private data: any[];
  private options: any;

  constructor() {
    this.data = Handsontable.helper['createSpreadsheetData'](100, 12); // tslint:disable-line:no-string-literal
    this.options = {
      height: 396,
      colHeaders: true,
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true
    };
  }
}
