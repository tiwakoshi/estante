import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalPaginas = 1.351;
  constructor() { }

  ngOnInit() {
  }

}
