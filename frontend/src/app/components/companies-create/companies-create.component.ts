import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Companies } from '../../models/companies';
import { CompaniesService } from '../../services/companies.service';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-companies-create',
  templateUrl: './companies-create.component.html',
  styleUrls: ['./companies-create.component.scss']
})
export class CompaniesCreateComponent implements OnInit {

  company: Companies;

  errorMessage: boolean = false;

  constructor(
    private companiesService: CompaniesService,
    private router: Router
    ) {
    this.company = new Companies;
  }

  ngOnInit(): void {
  }

  create(Form: NgForm) {
    this.companiesService.create(Form.value)
    .subscribe(
      res => {
      this.clearData(Form);
      M.toast({
        html: 'Compañía creada satisfactoriamente',
        displayLength: 1500
      });
      setTimeout (() => {
        this.router.navigate(['/companies']);
    }, 1500);
    },
      err => {
        this.errorMessage = true;
        setTimeout (() => {
          this.errorMessage = false;
      }, 1500);
        M.toast({
          html: 'Compañía no se pudo guardar',
          displayLength: 1500
        })
    })
  }

  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
      this.company = new Companies();
    }
  }

}
