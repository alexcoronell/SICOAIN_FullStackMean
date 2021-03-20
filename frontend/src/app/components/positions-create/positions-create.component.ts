import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Positions } from '../../models/positions';
import { PositionsService } from '../../services/positions.service';

declare var M: any;

@Component({
  selector: 'app-positions-create',
  templateUrl: './positions-create.component.html',
  styleUrls: ['./positions-create.component.scss']
})
export class PositionsCreateComponent implements OnInit {

  position: Positions;
  errorMessage: boolean = false;

  constructor(
    private positionsService: PositionsService,
    private router: Router
  ) {
    this.position = new Positions;
  }

  ngOnInit(): void {
  }

  create(Form: NgForm) {
    this.positionsService.create(Form.value)
    .subscribe(
      res => {
      this.clearData(Form);
      M.toast({
        html: 'Cargo creado satisfactoriamente',
        displayLength: 1500
      });
      setTimeout (() => {
        this.router.navigate(['/employesAndPositions']);
    }, 1500);
    },
      err => {
        this.errorMessage = true;
        setTimeout (() => {
          this.errorMessage = false;
      }, 1500);
        M.toast({
          html: 'Cargo no se pudo guardar',
          displayLength: 1500
        })
    })
  }

  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
      this.position = new Positions();
    }
  }



}
