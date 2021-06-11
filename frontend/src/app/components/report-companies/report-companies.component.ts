import { CompaniesService } from './../../services/companies.service';
import { Companies } from './../../models/companies';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-report-companies',
  templateUrl: './report-companies.component.html',
  styleUrls: ['./report-companies.component.scss']
})
export class ReportCompaniesComponent implements OnInit {

  companies: Companies[];

  constructor(
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companiesService.getCompanies()
    .subscribe(
      res => {
        this.companies = res as Companies[];
      },
      err => {
        console.error(err.error);
      }
    )
  }

}
