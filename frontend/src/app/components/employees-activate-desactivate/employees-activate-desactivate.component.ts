import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employees } from '../../models/employees';

declare var M: any;

@Component({
  selector: 'app-employees-activate-desactivate',
  templateUrl: './employees-activate-desactivate.component.html',
  styleUrls: ['./employees-activate-desactivate.component.scss']
})
export class EmployeesActivateDesactivateComponent implements OnInit {

  employee: Employees;
  employees: Employees[];
  searchItem: Employees;
  errorMessage: boolean = false
  showForm: boolean = false;
  showSearchForm: boolean = true;
  searchValidate: boolean = false;

  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) {
    this.employee = new Employees;
    this.searchItem = new Employees;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  // Búsqueda y carga de empleado
  search(SearchForm: NgForm) {
    this.employeesService.getEmployee(this.searchItem)
    .subscribe(
      res => {
        this.employee = res.employeeData;
        this.clearSearchForm();
        this.showForm = true;
        this.showSearchForm = false;
      },
      err => {
        if (err.error == "The employee doen't exist") {
          this.searchValidate = true;
        setTimeout (() => {
          this.searchValidate = false;
      }, 1500);
        } else {
          console.log(err.error);
        }
          this.clearSearchForm();
        }
    )
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

  actDesact(Form: NgForm){
    this.employeesService.actDesact(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'Condición actualizada correctamente',
        displayLength: 1500
      });
        setTimeout (() => {
        this.router.navigate(['/employesAndPositions']);
    }, 1500);
    this.clearData(Form);
    },
      err => {
        console.log(err)
        M.toast({
          html: 'Condición no se pudo actualizar',
          displayLength: 1500
        })
    })
  }

  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
      this.employee = new Employees;
    }
    this.showForm = false;
    this.showSearchForm = true;

  }

  clearSearchForm() {
    this.searchItem.identificationNumber = "";
  }

}
