import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Eps } from '../../models/eps';
import { EpsService } from '../../services/eps.service';

declare var M: any;

@Component({
  selector: 'app-eps-create',
  templateUrl: './eps-create.component.html',
  styleUrls: ['./eps-create.component.scss']
})
export class EpsCreateComponent implements OnInit {

  eps: Eps;
  errorMessage: boolean = false;

  constructor(
    private epsService: EpsService,
    private router: Router
  ) {
    this.eps = new Eps;
  }

  ngOnInit(): void {
  }

  create(Form: NgForm) {
    this.epsService.create(Form.value)
    .subscribe(
      res => {
      this.clearData(Form);
      M.toast({
        html: 'EPS creada satisfactoriamente',
        displayLength: 1500
      });
      setTimeout (() => {
        this.router.navigate(['/eps']);
    }, 1500);
    },
      err => {
        this.errorMessage = true;
        setTimeout (() => {
          this.errorMessage = false;
      }, 1500);
        M.toast({
          html: 'EPS no se pudo guardar',
          displayLength: 1500
        })
    })
  }

  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
      this.eps = new Eps;
    }
  }

}
