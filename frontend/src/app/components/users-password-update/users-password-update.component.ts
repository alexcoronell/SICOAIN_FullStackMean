import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-users-password-update',
  templateUrl: './users-password-update.component.html',
  styleUrls: ['./users-password-update.component.scss']
})
export class UsersPasswordUpdateComponent implements OnInit {

  user: any = {};
  searchItem: Users;
  showForm: boolean = false;
  showSearchForm: boolean = true;
  searchValidate: boolean = false;

  constructor(
    private userService: UsersService,
    private router: Router
  ) {
    this.user = new Users;
    this.searchItem = new Users;
  }

  ngOnInit(): void {
  }

  search() {
    this.searchItem.user = this.searchItem.user.trim();
    this.userService.getUser(this.searchItem)
    .subscribe(
      res => {
        this.user = res.userData;
        this.showForm = true;
        this.showSearchForm = false;
        this.user.password = ''; 
      },
      err => {
        console.log(err.error)
        console.log(this.searchItem);
        console.log("Falló");
        if (err.error == "The user doen't exist") {
          this.searchValidate = true;
        setTimeout (() => {
          this.searchValidate = false;
      }, 1500);
        }
          this.clearSearchForm();
        }
    )
  }

  passwordUpdate(Form: NgForm){
    this.userService.passwordUpdate(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'Contraseña actualizada correctamente',
        displayLength: 1500
      });
        setTimeout (() => {
        this.router.navigate(['/users']);
    }, 1500);
    this.clearData(Form);
    },
      err => {
        console.log(err)
        M.toast({
          html: 'Contraseña no se pudo actualizar, debe colocar una nueva contraseña',
          displayLength: 1500
        })
    })
  }

  
  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
    }
    this.showForm = false;
    this.showSearchForm = true;
    this.user = new Users;
    this.clearSearchForm();
  }

  clearSearchForm() {
    this.searchItem.user = "";
  }
  }


