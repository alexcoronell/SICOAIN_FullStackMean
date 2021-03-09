import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-activate-desactivate',
  templateUrl: './users-activate-desactivate.component.html',
  styleUrls: ['./users-activate-desactivate.component.scss']
})
export class UsersActivateDesactivateComponent implements OnInit {

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

  actDesactUser(form: NgForm){
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
