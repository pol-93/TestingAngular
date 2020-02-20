import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-interruptor',
  templateUrl: './interruptor.component.html',
  styleUrls: ['./interruptor.component.scss']
})
export class InterruptorComponent implements OnInit {
 
  activo= true;
  intercambiar(){
    this.activo = ! this.activo;
  } 
  constructor() { }

  ngOnInit() {
  }

}
