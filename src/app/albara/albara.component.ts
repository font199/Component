import { Component, OnInit } from '@angular/core';
import { AlbaraService } from './shared/albara.service';
import { Albara } from './shared/albara';
import { TranslateService } from '@ngx-translate/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'cpr-albara',
  templateUrl: './albara.component.html',
  styleUrls: ['./albara.component.css']
})
export class AlbaraComponent implements OnInit {

  albara: Albara;
  idiomes: SelectItem[];
  selectedIdioma: any;


  constructor(private albaraService: AlbaraService, private translate: TranslateService) {
    this.idiomes = [
      {label:'Català', value:'ca'},
      {label:'Castellà', value:'cas'}
    ];
   }

  ngOnInit(){
     this.albaraService.getAlbara().subscribe( albara => this.albara = albara );
    //this.albara = this.albaraService.getAlbara();

  }

  changedIdiom(){
      this.translate.use(this.selectedIdioma);
  }
  

}
