import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Records } from './../../models/records';
import { RecordsService } from './../../services/records.service';

// Servicios y modelos de campos adicionales
import { EmployeesService } from 'src/app/services/employees.service';
import { Employees } from './../../models/employees';
import { Events } from './../../models/events';
import { EventsService } from './../../services/events.service';


@Component({
  selector: 'app-records-create',
  templateUrl: './records-create.component.html',
  styleUrls: ['./records-create.component.scss']
})
export class RecordsCreateComponent implements OnInit {

  record: Records;
  currentRecord: Number;
  errorMessage:boolean = false;

  employees: Employees[];
  employee: Employees;
  events: Events[];
  event: Events;

  constructor(
    private recordsService: RecordsService,
    private employeesService: EmployeesService,
    private eventsService: EventsService
  ) {
    this.record = new Records;
    this.employee = new Employees;
    this.event = new Events;
  }

  ngOnInit(): void {
    this.getRecordNumber();
    this.getEmployees();
    this.getEvents();
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

  getRecordNumber () {
    this.recordsService.getRecordNumber()
      .subscribe(
        res => {
          this.currentRecord = res + 1;
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

  // Obtener todos los sucesos
  getEvents = () => {
    this.eventsService.getEvents()
      .subscribe(
        res => {
          this.events = res as Events[];
        },
        err => {
          console.error(err.error);
        }
      )
  }

  // Obtener empleado seleccionado
  getEvent = (e) => {
    this.eventsService.getEvent(e)
      .subscribe(
        res => {
          this.event = res.eventData as Events;
          this.record.employeeName = this.employee.names + ' ' + this.employee.lastNames;
        },
        err => {
          console.error(err.error);
        }
      )
  }

}
