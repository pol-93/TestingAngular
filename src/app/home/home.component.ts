import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  interpolacion = ' interpolacion de strings ';
  url = 'https://www.google.es';
  activo = false;
  
  myfunction(){
    this.interpolacion =  this.interpolacion + ' en EscualIt';
  }

  intercambiar(){
    this.activo = ! this.activo;
  }

  constructor() { }
    
  ngOnInit() {
  }

}
