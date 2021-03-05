import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin = {
    user: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.userLogin);
  }

  clearData() {
    this.userLogin.user = '';
    this.userLogin.password = '';
  }

}
