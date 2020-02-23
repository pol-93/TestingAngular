import { Component, ViewChildren, QueryList, Renderer2, AfterViewInit, ɵConsole } from '@angular/core';
import { TerminalTestChildComponent } from '../terminal-test-child/terminal-test-child.component';


@Component({
  selector: 'cf-terminal-test-parent',
  templateUrl: './terminal-test-parent.component.html',
  styleUrls: ['./terminal-test-parent.component.scss']
})
export class TerminalTestParentComponent implements AfterViewInit {

  arr = [0];

  @ViewChildren(TerminalTestChildComponent) 
  inputTest : QueryList<TerminalTestChildComponent>;


  constructor(private renderer: Renderer2) { }
  
  ngAfterViewInit(): void{
    this.inputTest.changes.subscribe((componentes: QueryList<TerminalTestChildComponent>) =>{
        componentes.forEach(componente => {
            console.log(componente);
        });
    });   
  }

  keyPress(event : any){
    console.log(event.key);
    var index = this.arr[this.arr.length - 1];
    var componente = this.inputTest.toArray()[index]; 
    if(componente.getinputStauts()){
      this.arr.push(this.arr.length);
      console.log("Array" + this.arr);
     
      setTimeout(() => {
        index = this.arr[this.arr.length - 1];
        console.log(index);
        var newNode = this.inputTest.toArray()[index];
        console.log(newNode);
        newNode.setFocus();
    }, 1);
      
    }
  }

 

}
