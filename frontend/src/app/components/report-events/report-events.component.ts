import { EventsService } from './../../services/events.service';
import { Events } from './../../models/events';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-report-events',
  templateUrl: './report-events.component.html',
  styleUrls: ['./report-events.component.scss']
})
export class ReportEventsComponent implements OnInit {

  events: Events[];

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.getEvents();
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

}
