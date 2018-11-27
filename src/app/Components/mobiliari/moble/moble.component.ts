import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cpr-moble',
  templateUrl: './moble.component.html',
  styleUrls: ['./moble.component.css']
})
export class MobleComponent implements OnInit {

  @Input() nomMoble: string;
  @Input() numMobles: number;
  @Output() notifyBorrarMoble: EventEmitter<string> = new EventEmitter<string>(); 
  @Output() notifyActualitzatNum: EventEmitter<number> = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit() {
  }

  borrar(){
    this.notifyBorrarMoble.emit(this.nomMoble);
  }

   canviatNum(){
     this.notifyActualitzatNum.emit(this.numMobles);
   }

} 
