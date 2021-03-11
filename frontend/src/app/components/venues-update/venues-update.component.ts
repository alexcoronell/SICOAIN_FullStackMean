import { Component, OnInit } from '@angular/core';
import { Venues } from 'src/app/models/venues';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-venues-update',
  templateUrl: './venues-update.component.html',
  styleUrls: ['./venues-update.component.scss']
})
export class VenuesUpdateComponent implements OnInit {

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

  updateVenue(form: NgForm) {
    console.log(form);
    this.clearData()
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
