import { Component, OnInit } from '@angular/core';
import { Employees } from '../../models/employees';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.scss']
})
export class EmployeesCreateComponent implements OnInit {

  employee: Employees;

  constructor() {
    this.employee = new Employees;
  }

  ngOnInit(): void {
  }

  createEmployee(form: NgForm) {
    console.log(form)
  }

  clearData(form: NgForm) {
    console.log("funciono");
  }

}
