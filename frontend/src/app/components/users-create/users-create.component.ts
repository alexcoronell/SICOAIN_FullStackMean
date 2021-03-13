import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  newUser: Users;

  constructor(
    private userService: UsersService,
    private router: Router
    ) {
    this.newUser = new Users();
  }

  ngOnInit(): void {
  }

  create(form: NgForm) {
    console.log(form.value);
    this.userService.createUser(form.value)
    .subscribe(
      res => {
      this.clearData(form);
      M.toast({
        html: 'Usuario creado satisfactoriamente',
        displayLength: 1500
      });
      setTimeout (() => {
        this.router.navigate(['/users']);
    }, 1500);
    },
      err => {
        M.toast({
          html: 'Usuario no se pudo guardar',
          displayLength: 1500
        })
    })
  }


  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.newUser = new Users();
    }
  }

}
