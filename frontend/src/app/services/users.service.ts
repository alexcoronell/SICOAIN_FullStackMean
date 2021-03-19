import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  searchItem: Users;
  user: Users;
  newUser: Users;
  users: Users[];
  
  private readonly URL_SERVER = "http://localhost:3000/api/users/";
  private readonly URL_NEW_USER = "newUser";
  private readonly URL_GET_USER = "getUser";
  private readonly URL_UPDATE_USER = "update";
  private readonly URL_PASSWORD_UPDATE_USER = "passwordUpdate";
  private readonly URL_ACT_DESACT_USER = "actDesact";

  constructor(private http: HttpClient) { }

  createUser(newUser: Users) {
    return this.http.post<any>(this.URL_SERVER + this.URL_NEW_USER, newUser);
  }

  getUser(searchItem) {
    return this.http.post<any>(this.URL_SERVER + this.URL_GET_USER, searchItem);
  }

  update(user) {
    return this.http.post<any>(this.URL_SERVER + this.URL_UPDATE_USER, user);
  }

  passwordUpdate(user) {
    return this.http.post<any>(this.URL_SERVER + this.URL_PASSWORD_UPDATE_USER, user);
  }

  actDesact(user) {
    return this.http.post<any>(this.URL_SERVER + this.URL_ACT_DESACT_USER, user);
  }

}
