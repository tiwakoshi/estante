import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isCollapsed: boolean;

  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

}
