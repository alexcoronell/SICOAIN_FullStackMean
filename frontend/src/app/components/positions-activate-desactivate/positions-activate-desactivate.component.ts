import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Positions } from '../../models/positions';
import { PositionsService } from '../../services/positions.service';

declare var M: any;

@Component({
  selector: 'app-positions-activate-desactivate',
  templateUrl: './positions-activate-desactivate.component.html',
  styleUrls: ['./positions-activate-desactivate.component.scss']
})
export class PositionsActivateDesactivateComponent implements OnInit {

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

  actDesact(Form: NgForm){
    this.poitionsService.actDesact(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'Condición actualizada correctamente',
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
          html: 'Condición no se pudo actualizar',
          displayLength: 1500
        })
    })
  }


  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
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
