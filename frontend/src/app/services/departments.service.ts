import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departments } from '../models/departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  department: Departments;
  departments: Departments[];

  private readonly URL_SERVER = "http://localhost:3000/api/departments/";

  constructor(private http: HttpClient) { }

  getCompanies() {
    return this.http.get<Departments[]>(this.URL_SERVER);
  }

}
