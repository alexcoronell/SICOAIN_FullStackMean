import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
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
  
  constructor(private loginService: LoginService, private router: Router) { }

  loginValidate: boolean = true;
  showHeader: boolean = false;
  showFooter: boolean = false;

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
          this.loginValidate = false, 
          console.log(err, this.loginValidate), 
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
