import { Injectable } from '@angular/core';
import { ALBARA } from './mock-albara';

@Injectable({
  providedIn: 'root'
})
export class AlbaraService {

  constructor() { }

  getAlbara(){
    return ALBARA;
  }
}
