import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  message: string = "";
  
  constructor(private loginService: LoginService, private router: Router) { }

  loginValidate: boolean = true;

  ngOnInit(): void {
  }
  login() {
    this.loginService.login(this.userLogin)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['/main']);
        },
        err => {
          this.loginValidate = false;
          if (err.error == "Inactive user") {
            this.message = "El usuario " + this.userLogin.user + " se encuentra inactivo"
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

}
