import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Companies } from '../../models/companies';

@Component({
  selector: 'app-companies-create',
  templateUrl: './companies-create.component.html',
  styleUrls: ['./companies-create.component.scss']
})
export class CompaniesCreateComponent implements OnInit {

  company: Companies;

  constructor() {
    this.company = new Companies;
  }

  ngOnInit(): void {
  }

  createCompany(form: NgForm) {
    console.log(form);
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.company = new Companies();
    }
  }

}
