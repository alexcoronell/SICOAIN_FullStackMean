import { Component, OnInit } from '@angular/core';
import { Eps } from '../../models/eps';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-eps-activate-desactivate',
  templateUrl: './eps-activate-desactivate.component.html',
  styleUrls: ['./eps-activate-desactivate.component.scss']
})
export class EpsActivateDesactivateComponent implements OnInit {

  eps: Eps;
  showForm: boolean = false;
  showSearchForm: boolean = true;

  constructor() {
    this.eps = new Eps;
  }

  ngOnInit(): void {
  }

  search() {
    console.log('Funciono');
    this.showForm = true;
    this.showSearchForm = false;
  }

  activateDesactivate(form: NgForm) {
    console.log(form);
    this.clearData();
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.eps = new Eps;
    }
    this.showForm = false;
    this.showSearchForm = true;
  }


}
