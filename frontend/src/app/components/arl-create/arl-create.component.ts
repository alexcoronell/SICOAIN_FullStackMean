import { Component, OnInit } from '@angular/core';
import { Arl } from '../../models/arl';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-arl-create',
  templateUrl: './arl-create.component.html',
  styleUrls: ['./arl-create.component.scss']
})
export class ArlCreateComponent implements OnInit {

  arl: Arl;

  constructor() {
    this.arl = new Arl;
  }

  ngOnInit(): void {
  }

  create(form: NgForm) {
    console.log(form);
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.arl = new Arl;
    }
  }

}
