import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserDataService } from '../../services/user-data.service';

import { Router } from '@angular/router';

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
  userData:any = [];

  message: string = "";
  
  constructor(
    private loginService: LoginService, 
    private router: Router, 
    private userDataService: UserDataService) {}

  loginValidate: boolean = true;

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.userLogin)
      .subscribe(
        res => {
          this.userData = res.userData;
          localStorage.setItem('token', res.token);
          this.userDataService.userDataSend.emit({
            data: this.userData
          });
          this.userDataService.showHeader.emit({
            showHeader: true
          });
          this.router.navigate(['/users/create']);
        },
        err => {
          this.loginValidate = false;
          if (err.error == "Inactive user") {
            this.message = "El usuario " + this.userLogin.user + " se encuentra inactivo";
            this.clearData();
          } else {
            this.message = "Usuario o contraseña incorrectos"
          }
          setTimeout (() => {
            this.loginValidate = true;
        }, 3000); }
      )
  }

  clearData() {
    this.userLogin.user = '';
    this.userLogin.password = '';
  }

  logout() {
    this.userDataService.showHeader.emit({
      showHeader: false
    });
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }


}
