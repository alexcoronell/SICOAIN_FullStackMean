import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  searchItem: Employees;
  employee: Employees;
  newEmployee: Employees;
  employees: Employees[];

  private readonly URL_SERVER = "http://localhost:3000/api/employees/";
  private readonly URL_NEW = "create";
  private readonly URL_GET = "getEmployee/";
  private readonly URL_GET_ALL = "getEmployees";
  private readonly URL_GET_ACTIVE = "getActiveEmployees";
  private readonly URL_UPDATE = "update";
  private readonly URL_ACT_DESACT = "actDesact";

  constructor(
    private http: HttpClient
  ) { }

  getEmployees() {
    return this.http.get<Employees[]>(this.URL_SERVER + this.URL_GET_ALL);
  }

  getActiveEmployees() {
    return this.http.get<Employees[]>(this.URL_SERVER + this.URL_GET_ACTIVE);
  }

  create(newEmployee: Employees) {
    return this.http.post<any>(this.URL_SERVER + this.URL_NEW, newEmployee);
  }

  getEmployee(searchItem) {
    return this.http.get<any>(this.URL_SERVER + this.URL_GET + searchItem);
  }

  update(employee) {
    return this.http.post<any>(this.URL_SERVER + this.URL_UPDATE, employee);
  }

  actDesact(employee) {
    return this.http.post<any>(this.URL_SERVER + this.URL_ACT_DESACT, employee);
  }

}
