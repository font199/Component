import { Injectable } from '@angular/core';
import {TAREAS} from './mock-albara';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  getTareas(){
    return  Observable.of(TAREAS); 
    //return this.http.get('uri');
 }
}
