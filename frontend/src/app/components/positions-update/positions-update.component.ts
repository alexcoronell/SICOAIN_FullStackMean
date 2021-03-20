import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Positions } from '../../models/positions';
import { PositionsService } from '../../services/positions.service';

declare var M: any;

@Component({
  selector: 'app-positions-update',
  templateUrl: './positions-update.component.html',
  styleUrls: ['./positions-update.component.scss']
})
export class PositionsUpdateComponent implements OnInit {

  position: any = {};
  searchItem: Positions;
  showForm: boolean = false;
  showSearchForm: boolean = true;
  searchValidate: boolean = false;

  constructor(
    private poitionsService: PositionsService,
    private router: Router
  ) {
    this.position = new Positions;
    this.searchItem = new Positions;
  }

  ngOnInit(): void {
  }

  search() {
    this.searchItem.name = this.searchItem.name.trim();
    this.poitionsService.getPosition(this.searchItem)
    .subscribe(
      res => {
        this.position = res.positionData;
        this.showForm = true;
        this.showSearchForm = false;
      },
      err => {
        if (err.error == "The position doen't exist") {
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
    this.poitionsService.update(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'Cargo actualizado correctamente',
        displayLength: 1500
      });
        setTimeout (() => {
        this.router.navigate(['/employesAndPositions']);
    }, 1500);
    this.clearData(Form);
    },
      err => {
        console.log(err)
        M.toast({
          html: 'Cargo no se pudo actualizar',
          displayLength: 1500
        })
    })
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.position = new Positions();
    }
    this.clearSearchForm();
    this.showForm = false;
    this.showSearchForm = true;
  }

  clearSearchForm() {
    this.searchItem.name = "";
  }

}
