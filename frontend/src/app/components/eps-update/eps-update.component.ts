import { Component, OnInit } from '@angular/core';
import { Eps } from '../../models/eps';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-eps-update',
  templateUrl: './eps-update.component.html',
  styleUrls: ['./eps-update.component.scss']
})
export class EpsUpdateComponent implements OnInit {

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

  update(form: NgForm) {
    console.log(form);
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
