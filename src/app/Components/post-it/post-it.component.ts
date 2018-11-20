import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cpr-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.css']
})
export class PostItComponent implements OnInit {

  @Input() titol: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
