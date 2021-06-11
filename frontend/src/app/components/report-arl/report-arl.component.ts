import { ArlService } from './../../services/arl.service';
import { Arl } from './../../models/arl';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-report-arl',
  templateUrl: './report-arl.component.html',
  styleUrls: ['./report-arl.component.scss']
})
export class ReportArlComponent implements OnInit {

  arls: Arl[];

  constructor(
    private arlService: ArlService
  ) { }

  ngOnInit(): void {
    this.getArls();
  }

  getArls() {
    this.arlService.getArls()
      .subscribe(
        res => {
          this.arls = res as Arl[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

}
