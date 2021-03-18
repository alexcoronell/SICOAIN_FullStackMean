import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss']
})
export class UsersUpdateComponent implements OnInit {


  user: any = {};
  searchItem: Users;
  showForm: boolean = false;
  showSearchForm: boolean = true;
  searchValidate: boolean = false;

  constructor(
    private userService: UsersService
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
        console.log(res.userData);
        console.log(this.user);
        this.showForm = true;
        this.showSearchForm = false;
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

  update(form: NgForm){
    console.log(form);
    this.showForm = false;
    this.showSearchForm = true;
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.showForm = false;
    this.showSearchForm = true;
    this.clearSearchForm();
  }

  clearSearchForm() {
    this.searchItem.user = "";
  }

}
