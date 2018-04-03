import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  book = {cover: 'https://cache.skoob.com.br/local/images//Ug02AqXImxZRJnFf' +
  'tJblff1Tmgw=/100x155/center/top/smart/filters:format(jpeg)/https://skoob.s3' +
  '.amazonaws.com/livros/184669/AS_LUTASN_A_GLORIA_E_O_MARTIRI_1521208512184669SK1521208513B.jpg',
name: 'testebook', publishing: 'Arqueiro'};
  constructor() { }

  ngOnInit() {
  }

}
