import { VenuesService } from './../../services/venues.service';
import { Venues } from './../../models/venues';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-report-venues',
  templateUrl: './report-venues.component.html',
  styleUrls: ['./report-venues.component.scss']
})
export class ReportVenuesComponent implements OnInit {

  venues: Venues[];

  constructor(
    private venuesService: VenuesService
  ) { }

  ngOnInit(): void {
    this.getVenues();
  }
  getVenues() {
    this.venuesService.getVenues()
      .subscribe(
        res => {
          this.venues = res as Venues[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

}
