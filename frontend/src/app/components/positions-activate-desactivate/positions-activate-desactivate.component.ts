import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Positions } from '../../models/positions';

@Component({
  selector: 'app-positions-activate-desactivate',
  templateUrl: './positions-activate-desactivate.component.html',
  styleUrls: ['./positions-activate-desactivate.component.scss']
})
export class PositionsActivateDesactivateComponent implements OnInit {

  position: Positions;
  showForm: boolean = false;
  showSearchForm: boolean = true;

  constructor() {
    this.position = new Positions;
  }

  ngOnInit(): void {
  }

  search() {
    this.showForm = true;
    this.showSearchForm = false;
  }

  activateDesactivate(form: NgForm){
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
