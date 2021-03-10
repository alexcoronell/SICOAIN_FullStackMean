import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Positions } from '../../models/positions';

@Component({
  selector: 'app-positions-create',
  templateUrl: './positions-create.component.html',
  styleUrls: ['./positions-create.component.scss']
})
export class PositionsCreateComponent implements OnInit {

  position: Positions;

  constructor() {
    this.position = new Positions;
  }

  ngOnInit(): void {
  }

  createPosition(form?: NgForm) {
    alert('Funciono');
    console.log(form);
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.position = new Positions();
    }
  }



}
