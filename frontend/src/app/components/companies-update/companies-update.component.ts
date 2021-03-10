import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Companies } from '../../models/companies';

@Component({
  selector: 'app-companies-update',
  templateUrl: './companies-update.component.html',
  styleUrls: ['./companies-update.component.scss']
})
export class CompaniesUpdateComponent implements OnInit {

  company: Companies;
  showForm: boolean = false;
  showSearchForm: boolean = true;

  constructor() {
    this.company = new Companies;
  }

  ngOnInit(): void {
  }

  search() {
    console.log('Funciono');
    this.showForm = true;
    this.showSearchForm = false;
  }

  updateCompany(form: NgForm) {
    console.log(form);
    this.clearData(form);
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.company = new Companies();
    }
    this.showForm = false;
    this.showSearchForm = true;
  }

}
