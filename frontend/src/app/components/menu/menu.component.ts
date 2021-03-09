import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private userDataService: UserDataService, private router: Router) { }

  userData: any = {};

  ngOnInit(): void {
    this.userDataService.userDataSend.subscribe(data => {
      this.userData = data.data;
    })
  }

  logOut(): void {
    //this.loginComponent.logout();
    this.userDataService.showHeader.emit({
      showHeader: false
    });
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
