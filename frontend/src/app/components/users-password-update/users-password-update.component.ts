import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-password-update',
  templateUrl: './users-password-update.component.html',
  styleUrls: ['./users-password-update.component.scss']
})
export class UsersPasswordUpdateComponent implements OnInit {

  showForm: boolean = false;
  showSearchForm: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  searchUser() {
    console.log('Funciono');
    this.showForm = true;
    this.showSearchForm = false;
  }

  updatePasswordUser(form: NgForm){
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
  }

}
