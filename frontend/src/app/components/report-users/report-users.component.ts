import { UsersService } from './../../services/users.service';
import { Users } from './../../models/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-users',
  templateUrl: './report-users.component.html',
  styleUrls: ['./report-users.component.scss']
})
export class ReportUsersComponent implements OnInit {

  users: Users[]

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers = () => {
    this.usersService.getUsers()
      .subscribe(
        res => {
          this.users = res as Users[];
        },
        err => {
          console.error(err.error);
        }
      )
  }

}
