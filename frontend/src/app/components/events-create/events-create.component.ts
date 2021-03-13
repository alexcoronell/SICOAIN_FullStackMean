import { Component, OnInit } from '@angular/core';
import { Events } from '../../models/events';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.scss']
})
export class EventsCreateComponent implements OnInit {

  events: Events;

  constructor() {
    this.events = new Events;
  }

  ngOnInit(): void {
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
  }

}
