import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cpr-list-steps',
  templateUrl: './list-steps.component.html',
  styleUrls: ['./list-steps.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListStepsComponent implements OnInit {

  @Input() titol: string;
  @Input() steps: string[];

  constructor() { }

  ngOnInit() {

  }

}
