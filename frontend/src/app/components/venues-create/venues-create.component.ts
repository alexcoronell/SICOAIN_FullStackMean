import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Venues } from 'src/app/models/venues';

@Component({
  selector: 'app-venues-create',
  templateUrl: './venues-create.component.html',
  styleUrls: ['./venues-create.component.scss']
})
export class VenuesCreateComponent implements OnInit {

  venue: Venues;

  constructor() {
    this.venue = new Venues;
  }

  ngOnInit(): void {
  }

  createVenue(form: NgForm) {
    console.log(form);
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.venue = new Venues;
    }
  }

}
