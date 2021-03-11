import { Component, OnInit } from '@angular/core';
import { Venues } from 'src/app/models/venues';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-venues-activate-desactivate',
  templateUrl: './venues-activate-desactivate.component.html',
  styleUrls: ['./venues-activate-desactivate.component.scss']
})
export class VenuesActivateDesactivateComponent implements OnInit {

  venue: Venues;
  showForm: boolean = false;
  showSearchForm: boolean = true;

  constructor() {
    this.venue = new Venues;
  }

  ngOnInit(): void {
  }

  search() {
    console.log('Funciono');
    this.showForm = true;
    this.showSearchForm = false;
  }

  activateDesactivateVenue(form: NgForm) {
    console.log(form);
    this.clearData();
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.venue = new Venues;
    }
    this.showForm = false;
    this.showSearchForm = true;
  }

}
