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
  errorMessage:boolean = false;

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
  }

  ngOnInit(): void {
    this.getRecords();
  }

  search() {
    this.showForm = true;
    this.showSearchForm = false;
  }

  getRecords() {
    console.log('getRecords');
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

  update(form: NgForm) {
    console.log(form);
    this.clearData();
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
