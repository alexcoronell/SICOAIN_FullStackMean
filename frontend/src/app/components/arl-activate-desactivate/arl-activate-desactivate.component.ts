import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Arl } from '../../models/arl';
import { ArlService } from '../../services/arl.service';

declare var M: any;

@Component({
  selector: 'app-arl-activate-desactivate',
  templateUrl: './arl-activate-desactivate.component.html',
  styleUrls: ['./arl-activate-desactivate.component.scss']
})
export class ArlActivateDesactivateComponent implements OnInit {

  arl: Arl;
  searchItem: Arl;
  showForm: boolean = false;
  showSearchForm: boolean = true;
  searchValidate: boolean = false;

  constructor(
    private arlService: ArlService,
    private router: Router
  ) {
    this.arl = new Arl;
    this.searchItem = new Arl;
  }

  ngOnInit(): void {
  }

  search() {
    this.searchItem.name = this.searchItem.name.trim();
    this.arlService.getArl(this.searchItem)
    .subscribe(
      res => {
        this.arl = res.arlData;
        this.showForm = true;
        this.showSearchForm = false;
      },
      err => {
        if (err.error == "The ARL doen't exist") {
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
    this.arlService.actDesact(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'Condición actualizada correctamente',
        displayLength: 1500
      });
        setTimeout (() => {
        this.router.navigate(['/arl']);
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
      this.arl = new Arl;
    }
    this.clearSearchForm();
    this.showForm = false;
    this.showSearchForm = true;
  }

  clearSearchForm() {
    this.searchItem.name = "";
  }

}
