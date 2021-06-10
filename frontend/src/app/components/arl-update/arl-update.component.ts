import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Arl } from '../../models/arl';
import { ArlService } from '../../services/arl.service'

declare var M: any;

@Component({
  selector: 'app-arl-update',
  templateUrl: './arl-update.component.html',
  styleUrls: ['./arl-update.component.scss']
})
export class ArlUpdateComponent implements OnInit {

  arl: Arl;
  arls: Arl[];
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
    this.getArls();
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

  update(Form: NgForm){
    this.arlService.update(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'ARL actualizada correctamente',
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
          html: 'ARL no se pudo actualizar',
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
