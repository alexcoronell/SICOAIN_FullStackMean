import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Venues } from 'src/app/models/venues';
import { VenuesService} from '../../services/venues.service';
import { Companies} from '../../models/companies';
import { CompaniesService } from '../../services/companies.service';

declare var M: any;

@Component({
  selector: 'app-venues-activate-desactivate',
  templateUrl: './venues-activate-desactivate.component.html',
  styleUrls: ['./venues-activate-desactivate.component.scss']
})
export class VenuesActivateDesactivateComponent implements OnInit {

  campus: any = {};
  searchItem: Venues;
  company: Companies;
  companies: Companies[]
  errorMessage: boolean = false
  showForm: boolean = false;
  showSearchForm: boolean = true;
  searchValidate: boolean = false;

  constructor(
    private venuesService: VenuesService,
    private companiesService: CompaniesService,
    private router: Router
  ) {
    this.campus = new Venues;
    this.company = new Companies;
    this.searchItem = new Venues;
  }

  ngOnInit(): void {
  }

  search() {
    this.searchItem.name = this.searchItem.name.trim();
    this.venuesService.getCampus(this.searchItem)
    .subscribe(
      res => {
        this.getCompanies();
        this.campus = res.campusData;
        this.showForm = true;
        this.showSearchForm = false;
      },
      err => {
        if (err.error == "The Campus doesn't exist") {
          this.searchValidate = true;
        setTimeout (() => {
          this.searchValidate = false;
      }, 1500);
        } else {
          console.log(err.error);
        }
          this.clearSearchForm();
        }
    )
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

  actDesact(Form: NgForm){
    this.venuesService.actDesact(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'Condición actualizada correctamente',
        displayLength: 1500
      });
        setTimeout (() => {
        this.router.navigate(['/venues']);
    }, 1500);
    this.clearData(Form);
    },
      err => {
        console.log(err)
        M.toast({
          html: 'Condición no se pudo actualizar',
          displayLength: 1500
        })
    })
  }

  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
      this.campus = new Venues;
    }
    this.clearSearchForm();
    this.showForm = false;
    this.showSearchForm = true;
  }

  clearSearchForm() {
    this.searchItem.name = "";
  }

}
