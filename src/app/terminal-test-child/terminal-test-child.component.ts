import { Component, OnInit, ViewChild, Renderer2, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'cf-terminal-test-child',
  templateUrl: './terminal-test-child.component.html',
  styleUrls: ['./terminal-test-child.component.scss']
})
export class TerminalTestChildComponent implements OnInit {

  form = {
    command : ""
  };
  NewChild = false;
  
  @ViewChild('abcd') private abcd: ElementRef;
  @ViewChild('mainInput') private mainInput : ElementRef;
  @ViewChild('parent') private parent: ElementRef;	
  
  constructor(private renderer: Renderer2) { }
  
  ngOnInit() {
  }


  keyPress(event : any){
    console.log(event.data);
    console.log(`command ${this.form.command}`);
    if(this.mainInput.nativeElement.scrollWidth > this.mainInput.nativeElement.clientWidth){
      this.mainInput.nativeElement
      var text = this.mainInput.nativeElement.value;
      this.mainInput.nativeElement.value = text.substring(0, text.length - 1);
      console.log("texte: " + text.substring(0, text.length - 1));
      
      /*
      var div = this.renderer.createElement('div');
      var input = this.renderer.createElement('input');
      this.renderer.appendChild(div, input);
      var text2 = this.renderer.createText(event.data);
      this.renderer.appendChild(input, text2);
      this.renderer.appendChild(this.parent.nativeElement, div);
      */
      this.NewChild = true;
    }

  }

  setFocus(){
    this.mainInput.nativeElement.focus();
  }
  
/*
  
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.key = event.key;
    console.log(event.key);
  }

  onClick() {
    const li = this.renderer.createElement('li');
    const text = this.renderer.createElement('Click here to add li');
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.abcd.nativeElement, li);
  }
  */
 getinputStauts(){
   return this.NewChild;
 }
}


