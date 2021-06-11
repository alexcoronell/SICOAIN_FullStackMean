import { EmployeesService } from 'src/app/services/employees.service';
import { Employees } from './../../models/employees';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-employees',
  templateUrl: './report-employees.component.html',
  styleUrls: ['./report-employees.component.scss']
})
export class ReportEmployeesComponent implements OnInit {

  employees: Employees[];

  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  // Obtener todos los empleados
  getEmployees = () => {
    this.employeesService.getEmployees()
      .subscribe(
        res => {
          this.employees = res as Employees[];
        },
        err => {
          console.error(err.error);
        }
      )
  }

}
