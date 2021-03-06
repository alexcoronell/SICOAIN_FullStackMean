import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUser: Users;
  private readonly URL_API = "http://localhost:3000/api/users/login";

  constructor(private http: HttpClient) { }

  login(loginUser) {
    return this.http.post<any>(this.URL_API, loginUser)
  }
}
