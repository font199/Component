import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpr-bens',
  templateUrl: './bens.component.html',
  styleUrls: ['./bens.component.css']
})
export class BensComponent implements OnInit {

  quantitat: number;
  esFragil : boolean;
  detallFragils: string;

  constructor() { }

  ngOnInit() {
    this.esFragil = true;
  }

}
