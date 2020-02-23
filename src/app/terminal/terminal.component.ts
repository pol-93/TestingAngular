import { Component, OnInit, Renderer2, HostListener, ViewChildren, QueryList, } from '@angular/core';
import { ComandLineComponent } from '../comand-line/comand-line.component';


@Component({
  selector: 'cf-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  arr = [0];
 
  @ViewChildren(ComandLineComponent) 
  inputTest : QueryList<ComandLineComponent>;


  constructor(private renderer: Renderer2) { }
  
  ngOnInit() {
  }

  @HostListener('document:input', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    var index = this.arr[this.arr.length - 1];
    var componente = this.inputTest.toArray()[index]; 
    if(componente.getinputStauts()){
      var recoverdText =  componente.getLostText();
      this.arr.push(this.arr.length);
      setTimeout(() => {
        index = this.arr[this.arr.length - 1];
        var newNode = this.inputTest.toArray()[index];
        newNode.setFocus();
        newNode.setLostTextToInput(recoverdText);
      }, 1);
      
    }
  }  

}
