import { Component, OnInit } from '@angular/core';
import { Records } from '../../models/records';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-records-create',
  templateUrl: './records-create.component.html',
  styleUrls: ['./records-create.component.scss']
})
export class RecordsCreateComponent implements OnInit {

  record: Records;

  constructor() {
    this.record = new Records;
  }

  ngOnInit(): void {
  }

  create(form: NgForm) {
    console.log(form);
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.record = new Records;
    }
  }

}
