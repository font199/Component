import { Component, OnInit } from '@angular/core';
import { Tarea } from './shared/tarea';
import { TareasService } from './shared/tareas.service';
import {SelectItem} from 'primeng/api';
 

@Component({ 
  selector: 'cpr-llistat',
  templateUrl: './llistat.component.html',
  styleUrls: ['./llistat.component.css']
})
export class LlistatComponent implements OnInit {

  tareas: Tarea[];
  cols: any[];
  selectedTareas: Tarea[];
  tipus: string;

  numero: SelectItem;
  numeros: SelectItem[];

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
    this.numero = {label:'10' , value:10};
    this.numeros = [
      {label:'5' , value:5},
      {label:'10' , value:10},
      {label:'15' , value:15}
    ];

    this.tareasService.getTareas().subscribe(tareas => this.tareas = tareas);

    //El field te de correspondre amb els camps de la Tarea.
    this.cols = [
        { field: 'nom', header: 'Nom', width: '10%', sort: true},
        { field: 'descripcio', header: 'Descripció', width: '20%', sort: false},
        { field: 'dataCreacio', header: 'Data creació', width: '10%', sort: true},
        { field: 'tipus', header: 'Tipus' , width: '10%', sort: true},
        { field: 'etiqueta', header: 'Etiqueta' , width: '15%', sort: true},
        { field: 'periodicitat', header: 'Periodicitat', width: '10%', sort: true},
        { field: 'accions', header: 'Accions', width: '20%', sort: false}
    ];
  }

}
