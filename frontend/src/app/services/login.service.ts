import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUser: Users;
  readonly URL_API = "http://localhost:3000/api/users";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.URL_API);
  }
}
