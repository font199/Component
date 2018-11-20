import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cpr-switch-combo',
  templateUrl: './switch-combo.component.html',
  styleUrls: ['./switch-combo.component.css']
})
export class SwitchComboComponent implements OnInit {

  @Input() titol: string;
  @Input() switchVisible: boolean;
  @Input() checked: boolean;
  @Input() listRadioButton: string[];
  
  listPlena: boolean;
  valCombo: string ;

  constructor() { }

  ngOnInit() {
      this.listPlena =  typeof this.listRadioButton !== 'undefined' && this.listRadioButton.length > 0;
  }

}
