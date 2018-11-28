import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Moble } from './moble';

@Component({
  selector: 'cpr-mobiliari',
  templateUrl: './mobiliari.component.html',
  styleUrls: ['./mobiliari.component.css']
})
export class MobiliariComponent implements OnInit {

  mobleEntrat: string;
  mobiliari: Moble[] = [];
  categoria: string;

  @Output() notifyMobiliariActualitzat: EventEmitter<Moble[]> = new EventEmitter<Moble[]>(); 

  constructor() { }

  ngOnInit(){
  }
  
  newMoble(nomMoble : string){
      var moble : Moble = {
        nom: nomMoble,
        numero: 1,
        categoria: '',
        primerCategoria: false
      }
  
      this.mobiliari.push(moble);
      this.mobleEntrat = '';
      //optimitzar ; no fer; child 
      this.notifyMobiliariActualitzat.emit(this.mobiliari);
      //posar focus al inputText
  }
  
  borrarMoble(m : Moble){
    let index :  number;
    index = this.mobiliari.indexOf(m);
    this.mobiliari.splice(index, 1);
  }

  estatMostrarInputCategoria(m: Moble){
    m.primerCategoria = true;
  }

  estatMostratTitolCategoria(m: Moble){
      m.categoria = this.categoria;
      this.categoria = '';
      this.notifyMobiliariActualitzat.emit(this.mobiliari);
  }

  ActualitzarNumMobles(m: Moble , numMobles: number){
    let index :  number;
    index = this.mobiliari.indexOf(m);
    this.mobiliari[index].numero = numMobles;
  }


}

