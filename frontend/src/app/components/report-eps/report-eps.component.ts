import { EpsService } from './../../services/eps.service';
import { Eps } from './../../models/eps';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-eps',
  templateUrl: './report-eps.component.html',
  styleUrls: ['./report-eps.component.scss']
})
export class ReportEpsComponent implements OnInit {

  epss: Eps[];

  constructor(
    private epsService: EpsService
  ) { }

  ngOnInit(): void {
    this.getEpss();
  }

  getEpss() {
    this.epsService.getEpss()
      .subscribe(
        res => {
          this.epss = res as Eps[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

}
