import { Component, OnInit } from '@angular/core';
import { Moble } from '../Components/mobiliari/moble';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';

@Component({
  selector: 'cpr-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css'],
  providers: [ConfirmationService]
})
export class SolicitudComponent implements OnInit {

  mobiliari : Moble[] = [];
  msgs: Message[] = [];
  missatge: string;

  constructor(private cs: ConfirmationService ){ }

  ngOnInit() {
  }

  ActualitzaMobiliari(mobiliari : Moble[]){
    this.mobiliari = mobiliari;
  }

  showAllData(){

    this.missatge = '*Mobiliari:* <br/>';

    let i:number;
    for( i=0; i < this.mobiliari.length; i++){
     this.missatge += '['+this.mobiliari[i].nom+' , '+this.mobiliari[i].numero+' , '+this.mobiliari[i].categoria+' , '+this.mobiliari[i].primerCategoria+' </br>';      
    }

    this.cs.confirm({
      message: this.missatge,
      header: 'Confirmació',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.msgs = [{severity:'info', summary:'Confirmed', detail:'Info enviada'}];
      },
      reject: () => {
          this.msgs = [{severity:'info', summary:'Rejected', detail:'Info no enviada'}];
      }
  });
  }
}
