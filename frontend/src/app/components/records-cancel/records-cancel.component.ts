import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Records } from '../../models/records';
import { RecordsService } from './../../services/records.service';

// Servicios y modelos de campos adicionales
import { EmployeesService } from 'src/app/services/employees.service';
import { Employees } from './../../models/employees';
import { Events } from './../../models/events';
import { EventsService } from './../../services/events.service';

declare var M: any;

@Component({
  selector: 'app-records-cancel',
  templateUrl: './records-cancel.component.html',
  styleUrls: ['./records-cancel.component.scss']
})
export class RecordsCancelComponent implements OnInit {

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
    this.getActiveRecords();
    this.getEmployees();
    this.getEvents();
  }

   // Búsqueda y carga de registro
   search(SearchForm: NgForm) {
    this.searchItem.idRecord = this.searchItem.idRecord.trim();
    this.recordsService.getRecord(this.searchItem)
    .subscribe(
      res => {
        this.record = res.recordData;
        this.clearSearchForm();
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

  // Obtener todos los registros activos
  getActiveRecords() {
    this.recordsService.getActiveRecords()
      .subscribe(
        res => {
          this.records = res as Records[];
        },
        err => {
          console.error(err.error);
        }
      )
  }

  // Anulación de registro
  cancel(Form: NgForm){
    console.log(Form.value);
    this.recordsService.cancel(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'Registro anulado correctamente',
        displayLength: 1500
      });
        setTimeout (() => {
        this.router.navigate(['/recordsAndEvents']);
    }, 1500);
    this.clearData(Form);
    },
      err => {
        console.log(err)
        M.toast({
          html: 'Registro no se pudo anular',
          displayLength: 1500
        })
    })
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

  // Obtener suceso seleccionado
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

  // Limpieza de formulario de búsqueda
  clearSearchForm() {
    this.searchItem.idRecord = "";
  }

  // Limpieza de formulario principal
  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.record = new Records;
    }
    this.clearSearchForm()
    this.showForm = false;
    this.showSearchForm = true;
  }
}
