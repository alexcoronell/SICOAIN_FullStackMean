import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-users-activate-desactivate',
  templateUrl: './users-activate-desactivate.component.html',
  styleUrls: ['./users-activate-desactivate.component.scss']
})
export class UsersActivateDesactivateComponent implements OnInit {

  user: Users;
  users: Users[];
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
    this.getUsers();
  }

  // Obtener todos los empleados
  getUsers = () => {
    this.userService.getUsers()
      .subscribe(
        res => {
          this.users = res as Users[];
        },
        err => {
          console.error(err.error);
        }
      )
  }

  search() {
    this.userService.getUser(this.searchItem)
    .subscribe(
      res => {
        this.user = res.userData;
        this.showForm = true;
        this.showSearchForm = false;
      },
      err => {
        console.log(err.error)
        console.log(this.searchItem);
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

  actDesact(Form: NgForm){
    this.userService.actDesact(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'Condición actualizada correctamente',
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
          html: 'Condición no se pudo actualizar',
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
