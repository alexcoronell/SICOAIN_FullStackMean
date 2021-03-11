import { Component, OnInit } from '@angular/core';
import { Eps } from '../../models/eps';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-eps-create',
  templateUrl: './eps-create.component.html',
  styleUrls: ['./eps-create.component.scss']
})
export class EpsCreateComponent implements OnInit {

  eps: Eps;

  constructor() {
    this.eps = new Eps;
  }

  ngOnInit(): void {
  }

  create(form: NgForm) {
    console.log(form);
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.eps = new Eps;
    }
  }

}
