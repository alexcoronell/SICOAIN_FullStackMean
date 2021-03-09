import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  newUser: Users;
  users: Users[];
  
  private readonly URL_SERVER = "http://localhost:3000/api/users/";
  private readonly URL_NEW_USER = "newUser";
  private readonly URL_UPDATE_USER = "update";

  constructor(private http: HttpClient) { }

  createUser(newUser: Users) {
    return this.http.post<any>(this.URL_SERVER + this.URL_NEW_USER, newUser)
  }
}
