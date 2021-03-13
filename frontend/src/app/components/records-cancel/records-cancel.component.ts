import { Component, OnInit } from '@angular/core';
import { Records } from '../../models/records';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-records-cancel',
  templateUrl: './records-cancel.component.html',
  styleUrls: ['./records-cancel.component.scss']
})
export class RecordsCancelComponent implements OnInit {

  record: Records;

  showForm: boolean = false;
  showSearchForm: boolean = true;

  constructor() {
    this.record = new Records;
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
    this.clearData();
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.record = new Records;
    }
    this.showForm = false;
    this.showSearchForm = true;
  }
}
