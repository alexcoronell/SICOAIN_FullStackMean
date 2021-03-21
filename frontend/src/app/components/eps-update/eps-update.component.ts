import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Eps } from '../../models/eps';
import { EpsService } from '../../services/eps.service';

declare var M: any;

@Component({
  selector: 'app-eps-update',
  templateUrl: './eps-update.component.html',
  styleUrls: ['./eps-update.component.scss']
})
export class EpsUpdateComponent implements OnInit {

  eps: any = {};
  showForm: boolean = false;
  showSearchForm: boolean = true;
  searchItem: Eps;
  searchValidate: boolean = false;

  constructor(
    private epsService: EpsService,
    private router: Router
  ) {
    this.eps = new Eps;
    this.searchItem = new Eps;
  }

  ngOnInit(): void {
  }

  search() {
    this.searchItem.name = this.searchItem.name.trim();
    this.epsService.getEps(this.searchItem)
    .subscribe(
      res => {
        this.eps = res.epsData;
        this.showForm = true;
        this.showSearchForm = false;
      },
      err => {
        if (err.error == "The EPS doen't exist") {
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

  update(Form: NgForm){
    this.epsService.update(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'EPS actualizada correctamente',
        displayLength: 1500
      });
        setTimeout (() => {
        this.router.navigate(['/eps']);
    }, 1500);
    this.clearData(Form);
    },
      err => {
        console.log(err)
        M.toast({
          html: 'EPS no se pudo actualizar',
          displayLength: 1500
        })
    })
  }

  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
      this.eps = new Eps;
    }
    this.clearSearchForm();
    this.showForm = false;
    this.showSearchForm = true;
  }

  clearSearchForm() {
    this.searchItem.name = "";
  }
}
