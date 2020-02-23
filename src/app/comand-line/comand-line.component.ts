import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cf-comand-line',
  templateUrl: './comand-line.component.html',
  styleUrls: ['./comand-line.component.scss']
})
export class ComandLineComponent implements OnInit {
  form = {
    command : ""
  };
  NewChild = false;
  lostText : string;

  @ViewChild('mainInput') private mainInput : ElementRef;

  constructor(private renderer: Renderer2) { 
    this.lostText = ""; 
  }

  ngOnInit() {
  }

  keyPress(event : any){
    console.log("commandlineCopmponent " + event.data);
    if(!this.NewChild && this.mainInput.nativeElement.scrollWidth > this.mainInput.nativeElement.clientWidth){
      var text = this.mainInput.nativeElement.value;
      this.mainInput.nativeElement.value = text.substring(0, text.length - 1);
      console.log("texte: " + text.substring(0, text.length - 1));
  
      this.setLostText(event.data);

      
      this.NewChild = true;
    }
  }

  setFocus(){
    this.mainInput.nativeElement.focus(); 
  }

  setLostTextToInput(text : string){
    this.mainInput.nativeElement.value = text;
  }

  getinputStauts(){
    return this.NewChild;
  }

  getLostText(){
    return this.lostText;
  }

  setLostText(text : string){
    this.lostText = text;
  }

}
