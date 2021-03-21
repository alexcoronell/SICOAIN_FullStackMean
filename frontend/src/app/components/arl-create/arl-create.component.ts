import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Arl } from '../../models/arl';
import { ArlService } from '../../services/arl.service'

declare var M: any;

@Component({
  selector: 'app-arl-create',
  templateUrl: './arl-create.component.html',
  styleUrls: ['./arl-create.component.scss']
})
export class ArlCreateComponent implements OnInit {

  arl: Arl;
  errorMessage: boolean = false

  constructor(
    private arlService: ArlService,
    private router: Router
  ) {
    this.arl = new Arl;
  }

  ngOnInit(): void {
  }

  create(Form: NgForm) {
    this.arlService.create(Form.value)
    .subscribe(
      res => {
      this.clearData(Form);
      M.toast({
        html: 'ARL creada satisfactoriamente',
        displayLength: 1500
      });
      setTimeout (() => {
        this.router.navigate(['/arl']);
    }, 1500);
    },
      err => {
        this.errorMessage = true;
        setTimeout (() => {
          this.errorMessage = false;
      }, 1500);
        M.toast({
          html: 'ARL no se pudo guardar',
          displayLength: 1500
        })
    })
  }

  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
      this.arl = new Arl;
    }
  }

}
