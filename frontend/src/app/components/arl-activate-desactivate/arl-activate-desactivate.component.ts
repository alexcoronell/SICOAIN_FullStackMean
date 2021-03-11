import { Component, OnInit } from '@angular/core';
import { Arl } from '../../models/arl';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-arl-activate-desactivate',
  templateUrl: './arl-activate-desactivate.component.html',
  styleUrls: ['./arl-activate-desactivate.component.scss']
})
export class ArlActivateDesactivateComponent implements OnInit {

  arl: Arl;
  showForm: boolean = false;
  showSearchForm: boolean = true;

  constructor() {
    this.arl = new Arl;
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
      this.arl = new Arl;
    }
    this.showForm = false;
    this.showSearchForm = true;
  }

}
