import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = 'Pol';
  menu = 'My menu'; 
  constructor() { }

  ngOnInit() {
  }

}
