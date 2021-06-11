import { RecordsService } from './../../services/records.service';
import { Records } from './../../models/records';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-records',
  templateUrl: './report-records.component.html',
  styleUrls: ['./report-records.component.scss']
})
export class ReportRecordsComponent implements OnInit {

  records: Records[];

  constructor(
    private recordsService: RecordsService
  ) { }

  ngOnInit(): void {
    this.getRecords();
  }

// Obtener todos los registros activos
getRecords() {
  this.recordsService.getRecords()
    .subscribe(
      res => {
        this.records = res as Records[];
      },
      err => {
        console.error(err.error);
      }
    )
}

}
