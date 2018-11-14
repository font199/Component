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
        { field: 'nom', header: 'Nom' },
        { field: 'descripcio', header: 'Descripció' },
        { field: 'dataCreacio', header: 'Data creació' },
        { field: 'tipus', header: 'Tipus' },
        { field: 'etiqueta', header: 'Etiqueta'},
        { field: 'periodicitat', header: 'Periodicitat'},
        { field: 'accions', header: 'Accions'}

    ];
  }

}
