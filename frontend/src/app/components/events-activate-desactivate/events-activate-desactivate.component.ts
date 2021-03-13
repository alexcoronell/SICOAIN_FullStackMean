import { Component, OnInit } from '@angular/core';
import { Events } from '../../models/events';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-events-activate-desactivate',
  templateUrl: './events-activate-desactivate.component.html',
  styleUrls: ['./events-activate-desactivate.component.scss']
})
export class EventsActivateDesactivateComponent implements OnInit {

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

  activateDesactivate(form: NgForm) {
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
