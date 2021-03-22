import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Venues } from 'src/app/models/venues';
import { VenuesService} from '../../services/venues.service';
import { Companies} from '../../models/companies';
import { CompaniesService } from '../../services/companies.service';

declare var M: any;

@Component({
  selector: 'app-venues-create',
  templateUrl: './venues-create.component.html',
  styleUrls: ['./venues-create.component.scss']
})
export class VenuesCreateComponent implements OnInit {

  campus: Venues;
  company: Companies;
  companies: Companies[]
  errorMessage: boolean = false
  tempVar: string = ""

  constructor(
    private venuesService: VenuesService,
    private companiesService: CompaniesService,
    private router: Router
  ) {
    this.campus = new Venues;
    this.company = new Companies;
  }

  ngOnInit(): void {
    this.getCompanies()
  }

  getCompanies() {
    this.companiesService.getCompanies()
      .subscribe(
        res => {
          this.companies = res as Companies[];
          console.log(this.companies);
        },
        err => {
          console.log(err.error);
          }
      )
  }

  create(Form: NgForm) {
    this.venuesService.create(Form.value)
    .subscribe(
      res => {
      this.clearData(Form);
      M.toast({
        html: 'Sede creada satisfactoriamente',
        displayLength: 1500
      });
      setTimeout (() => {
        this.router.navigate(['/venues']);
    }, 1500);
    },
      err => {
        this.errorMessage = true;
        setTimeout (() => {
          this.errorMessage = false;
      }, 1500);
        M.toast({
          html: 'Sede no se pudo guardar',
          displayLength: 1500
        })
    })
  }

  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
      this.campus = new Venues;
    }
  }

}
