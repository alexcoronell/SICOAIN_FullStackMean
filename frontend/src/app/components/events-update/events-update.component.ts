import { Component, OnInit } from '@angular/core';
import { Events } from '../../models/events';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-events-update',
  templateUrl: './events-update.component.html',
  styleUrls: ['./events-update.component.scss']
})
export class EventsUpdateComponent implements OnInit {

  events: Events;

  showForm: boolean = false;
  showSearchForm: boolean = true;

  constructor() {
    this.events = new Events;
  }

  ngOnInit(): void {
  }

  search() {
    console.log('Funciono');
    this.showForm = true;
    this.showSearchForm = false;
  }

  create(form: NgForm) {
    console.log(form);
    this.clearData();
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.events = new Events;
    }
    this.showForm = false;
    this.showSearchForm = true;
  }

}
