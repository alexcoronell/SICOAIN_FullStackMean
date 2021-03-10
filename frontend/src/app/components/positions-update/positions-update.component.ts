import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Positions } from '../../models/positions';



@Component({
  selector: 'app-positions-update',
  templateUrl: './positions-update.component.html',
  styleUrls: ['./positions-update.component.scss']
})
export class PositionsUpdateComponent implements OnInit {

  position: Positions;
  showForm: boolean = false;
  showSearchForm: boolean = true;

  constructor() {
    this.position = new Positions;
  }

  ngOnInit(): void {
  }

  search() {
    alert('Funciono');
    this.showForm = true;
    this.showSearchForm = false;
  }

  updatePosition(form?: NgForm) {
    alert('Funciono');
    console.log(form);
    this.showForm = false;
    this.showSearchForm = true;
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.position = new Positions();
      this.showForm = false;
    this.showSearchForm = true;
    }
  }

}
