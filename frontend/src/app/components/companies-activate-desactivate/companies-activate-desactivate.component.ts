import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Companies } from '../../models/companies';
import { CompaniesService } from '../../services/companies.service';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-companies-activate-desactivate',
  templateUrl: './companies-activate-desactivate.component.html',
  styleUrls: ['./companies-activate-desactivate.component.scss']
})
export class CompaniesActivateDesactivateComponent implements OnInit {

  company: any = {};
  showForm: boolean = false;
  showSearchForm: boolean = true;
  searchItem: Companies;
  searchValidate: boolean = false;

  constructor(
    private companiesService: CompaniesService,
    private router: Router
  ) {
    this.company = new Companies;
    this.searchItem = new Companies;
  }

  ngOnInit(): void {
  }

  search() {
    this.searchItem.name = this.searchItem.name.trim();
    this.companiesService.getCompany(this.searchItem)
    .subscribe(
      res => {
        this.company = res.companyData;
        this.showForm = true;
        this.showSearchForm = false;
      },
      err => {
        if (err.error == "The company doen't exist") {
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

  actDesact(Form: NgForm){
    this.companiesService.actDesact(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'Condición actualizada correctamente',
        displayLength: 1500
      });
        setTimeout (() => {
        this.router.navigate(['/companies']);
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

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.company = new Companies();
    }
    this.clearSearchForm();
    this.showForm = false;
    this.showSearchForm = true;
  }

  clearSearchForm() {
    this.searchItem.name = "";
  }

}
