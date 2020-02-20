import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = 'Pol';
  menu = 'My menu'; 
  operation = ' Generate Task ';
  notfound = ' Go to notfound ';
  terminal = ' Go to Terminal Version'

  constructor() { }

  ngOnInit() {
  }

}
