import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'td-book-sale',
  templateUrl: './book-sale.component.html',
  styleUrls: ['./book-sale.component.scss']
})
export class BookSaleComponent implements OnInit {
@Input() bookinput;
  constructor() { }

  ngOnInit() {
  }

}
