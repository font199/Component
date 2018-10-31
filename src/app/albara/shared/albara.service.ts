import { Injectable } from '@angular/core';
import { ALBARA } from './mock-albara';
import { Http } from '@angular/http';
import { Albara } from './albara';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AlbaraService {

  constructor() { }

  getAlbara(){
     return  Observable.of(ALBARA); 
     //return this.http.get('uri');
  }
 
}