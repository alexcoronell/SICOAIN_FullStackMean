import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Events } from '../../models/events';
import { EventsService } from '../../services/events.service';

declare var M: any;

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.scss']
})
export class EventsCreateComponent implements OnInit {

  event: Events;
  errorMessage: boolean = false

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) {
    this.event = new Events;
  }

  ngOnInit(): void {
  }

  create(Form: NgForm) {
    this.eventsService.create(Form.value)
    .subscribe(
      res => {
      this.clearData(Form);
      M.toast({
        html: 'Suceso creado satisfactoriamente',
        displayLength: 1500
      });
      setTimeout (() => {
        this.router.navigate(['/recordsAndEvents']);
    }, 1500);
    },
      err => {
        this.errorMessage = true;
        setTimeout (() => {
          this.errorMessage = false;
      }, 1500);
        M.toast({
          html: 'Suceso no se pudo guardar',
          displayLength: 1500
        })
    })
  }

  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
      this.event = new Events;
    }
  }

}
