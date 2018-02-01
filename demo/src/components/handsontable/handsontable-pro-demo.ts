import {AfterViewInit, Component, OnInit} from '@angular/core';


@Component({
  selector: 'pro-demo',
  templateUrl: './handsontable-pro-demo.html',
  styleUrls: []
})
export class HandsontableProDemoComponent implements OnInit, AfterViewInit {
  public data: any[];
  public options: any;

  constructor() {
    this.data = [
      ['', 'Tesla', 'Volvo', 'Toyota', 'Honda'],
      ['2017', 10, 11, 12, 13],
      ['2018', 20, 11, 14, 13],
      ['2019', 30, 15, 12, 13]
    ];

    this.options = {
      colHeaders: true,
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true,
      filters: true,
      dropdownMenu: true
    };
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

}
