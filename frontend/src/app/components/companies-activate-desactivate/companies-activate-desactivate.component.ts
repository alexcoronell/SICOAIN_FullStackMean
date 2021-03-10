import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Companies } from '../../models/companies';


@Component({
  selector: 'app-companies-activate-desactivate',
  templateUrl: './companies-activate-desactivate.component.html',
  styleUrls: ['./companies-activate-desactivate.component.scss']
})
export class CompaniesActivateDesactivateComponent implements OnInit {

  company: Companies;
  showForm: boolean = false;
  showSearchForm: boolean = true;

  constructor() {
    this.company = new Companies;
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
      this.company = new Companies();
    }
    this.showForm = false;
    this.showSearchForm = true;
  }

}
