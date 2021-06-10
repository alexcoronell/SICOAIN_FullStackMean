import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Records } from './../../models/records';
import { RecordsService } from './../../services/records.service';

// Servicios y modelos de campos adicionales
import { EmployeesService } from 'src/app/services/employees.service';
import { Employees } from './../../models/employees';
import { Events } from './../../models/events';
import { EventsService } from './../../services/events.service';

declare var M: any;

@Component({
  selector: 'app-records-update',
  templateUrl: './records-update.component.html',
  styleUrls: ['./records-update.component.scss']
})
export class RecordsUpdateComponent implements OnInit {

  record: Records;
  records: Records[];
  searchItem: Records;
  errorMessage:boolean = false;
  searchValidate: boolean = false;

  fileUpload:any;

  employee: Employees;
  employees: Employees[];
  event: Events;
  events: Events[];

  showForm: boolean = false;
  showSearchForm: boolean = true;

  constructor(
    private recordsService: RecordsService,
    private employeesService: EmployeesService,
    private eventsService: EventsService,
    private router: Router
  ) {
    this.record = new Records;
    this.employee = new Employees;
    this.event = new Events;
    this.searchItem = new Records;
  }

  ngOnInit(): void {
    this.getRecords();
    this.getEmployees();
  }

  search(SearchForm: NgForm) {
    this.searchItem.idRecord = this.searchItem.idRecord.trim();
    this.recordsService.getRecord(this.searchItem)
    .subscribe(
      res => {
        this.record = res.recordData;
        this.showForm = true;
        this.showSearchForm = false;
      },
      err => {
        if (err.error == "The record doen't exist") {
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

  getRecords() {
    this.recordsService.getRecords()
      .subscribe(
        res => {
          this.records = res as Records[];
        },
        err => {
          console.error(err.error);
        }
      )
  }

  // Obtener todos los empleados
  getEmployees = () => {
    this.employeesService.getEmployees()
      .subscribe(
        res => {
          this.employees = res as Employees[];
          console.log(this.employees);
        },
        err => {
          console.error(err.error);
        }
      )
  }

    // Obtener empleado seleccionado
    getEmployee = (e) => {
      this.employeesService.getEmployee(e)
        .subscribe(
          res => {
            this.employee = res.employeeData as Employees;
            this.record.employeeName = this.employee.names + ' ' + this.employee.lastNames;
          },
          err => {
            console.error(err.error);
          }
        )
    }

  update(form: NgForm) {
    console.log(form);
    this.clearData();
  }

  clearSearchForm() {
    this.searchItem.idRecord = "";
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
