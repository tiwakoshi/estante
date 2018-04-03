import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'td-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() bookinput;
  constructor() { }

  ngOnInit() {
  }

}
