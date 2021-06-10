import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Events } from '../../models/events';
import { EventsService } from '../../services/events.service';

declare var M: any;

@Component({
  selector: 'app-events-activate-desactivate',
  templateUrl: './events-activate-desactivate.component.html',
  styleUrls: ['./events-activate-desactivate.component.scss']
})
export class EventsActivateDesactivateComponent implements OnInit {

  event: Events;
  events: Events[];
  searchItem: Events;
  showForm: boolean = false;
  showSearchForm: boolean = true;
  searchValidate: boolean = false;

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) {
    this.event = new Events;
    this.searchItem = new Events;
  }

  ngOnInit(): void {
    this.getEvents();
  }

  search() {
    this.searchItem.name = this.searchItem.name.trim();
    this.eventsService.getEvent(this.searchItem)
    .subscribe(
      res => {
        this.event = res.eventData;
        this.showForm = true;
        this.showSearchForm = false;
      },
      err => {
        if (err.error == "The Event doesn't exist") {
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

  actDesact(Form: NgForm){
    this.eventsService.actDesact(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'Condición actualizada correctamente',
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
          html: 'Condición no se pudo actualizar',
          displayLength: 1500
        })
    })
  }

  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
      this.event = new Events;
    }
    this.clearSearchForm();
    this.showForm = false;
    this.showSearchForm = true;
  }

  clearSearchForm() {
    this.searchItem.name = "";
  }

}
