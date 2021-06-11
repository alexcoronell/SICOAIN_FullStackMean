import { PositionsService } from './../../services/positions.service';
import { Positions } from './../../models/positions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-positions',
  templateUrl: './report-positions.component.html',
  styleUrls: ['./report-positions.component.scss']
})
export class ReportPositionsComponent implements OnInit {

  positions: Positions[];

  constructor(
    private positionsService: PositionsService
  ) { }

  ngOnInit(): void {
    this.getPositions();
    console.log(this.positions);
  }

  // Obtener todos los cargos
getPositions = () => {
  this.positionsService.getPositions()
    .subscribe(
      res => {
        this.positions = res as Positions[];
      },
      err => {
        console.error(err.error);
      }
    )
}
}
