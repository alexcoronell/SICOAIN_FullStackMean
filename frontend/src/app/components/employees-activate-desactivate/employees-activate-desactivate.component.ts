import { Component, OnInit } from '@angular/core';
import { Employees } from '../../models/employees';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employees-activate-desactivate',
  templateUrl: './employees-activate-desactivate.component.html',
  styleUrls: ['./employees-activate-desactivate.component.scss']
})
export class EmployeesActivateDesactivateComponent implements OnInit {

  employee: Employees;

  showForm: boolean = false;
  showSearchForm: boolean = true;

  constructor() {
    this.employee = new Employees;
  }

  ngOnInit(): void {
  }

  searchEmployee() {
    console.log('Funciono');
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
    }
    this.showForm = false;
    this.showSearchForm = true;
  }

}
