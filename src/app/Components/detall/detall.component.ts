import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cpr-detall',
  templateUrl: './detall.component.html',
  styleUrls: ['./detall.component.css']
})
export class DetallComponent implements OnInit {

  @Input() titol: string;
  detallFragils: string;

  constructor() { }

  ngOnInit() {
  }

}
