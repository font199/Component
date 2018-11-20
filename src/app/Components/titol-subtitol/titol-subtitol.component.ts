import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cpr-titol-subtitol',
  templateUrl: './titol-subtitol.component.html',
  styleUrls: ['./titol-subtitol.component.css']
})
export class TitolSubtitolComponent implements OnInit {

  @Input() titol: string;
  @Input() subTitol: string;

  constructor() { }

  ngOnInit() {
  }

}
