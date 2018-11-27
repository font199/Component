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
  
  newMobleEnter(event){
    if(event.keyCode == 13){ // apretat ENTER
      this.newMoble();
    }
  }

  newMoble(){
      var moble : Moble = {
        nom: this.mobleEntrat,
        numero: 1,
        categoria: '',
        primerCategoria: false
      }
  
      this.mobiliari.push(moble);
      this.mobleEntrat = "";
  
      this.notifyMobiliariActualitzat.emit(this.mobiliari);
      //posar focus al inputText
  }
    
  
      //fer proves per si borrem hi es primerCat etc
  borrarMoble(nom : string){
    let i: number = 0;
    let trovat: boolean = false;
    while((i < this.mobiliari.length ) && !trovat){
      if(this.mobiliari[i].nom == nom){
        this.mobiliari.splice(i, 1);
        trovat = true;
      }
      i++;
    }
  }

  canviEstat(m: Moble){
    m.primerCategoria = true;
  }

  canviEstat2(event, m: Moble){
    if(event.keyCode == 13){ // apretat ENTER
      m.categoria = this.categoria;
      this.incloureCategoria(this.categoria);
      this.categoria = '';
      this.notifyMobiliariActualitzat.emit(this.mobiliari);
    }
  }

  incloureCategoria(categoria: string){
    let i: number;
    let trovat: boolean = false;
    for( i=0; i < this.mobiliari.length; i++){ //trovat el primer de la categoria
      if (trovat == false && this.mobiliari[i].categoria == categoria){
        trovat = true;
      }
      if(trovat === true){ //posarem el nom de la categoria a tots els que presedeixen el primer de la categoria
        if(this.mobiliari[i].categoria === ''){
          this.mobiliari[i].categoria = categoria;
        }
      }
    }
  }

  ActualitzarNumMobles(numMobles: number){
    
  }

  imprimeix(){
    let i: number;
    for( i=0; i < this.mobiliari.length; i++){
      console.log('nom = '+this.mobiliari[i].nom);
      console.log('categoria = '+this.mobiliari[i].categoria);
      console.log('Prim categoria = '+this.mobiliari[i].primerCategoria);
    }
  }


}

