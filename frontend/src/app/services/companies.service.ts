import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Companies } from '../models/companies';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  searchItem: Companies;
  company: Companies;
  newCompany: Companies;
  companies: Companies[];

  private readonly URL_SERVER = "http://localhost:3000/api/companies/";
  private readonly URL_NEW = "create";
  private readonly URL_GET = "getCompany";
  private readonly URL_GET_ALL = "getCompanies";
  private readonly URL_UPDATE = "update";
  private readonly URL_ACT_DESACT = "actDesact";

  constructor(private http: HttpClient) { }

  getCompanies() {
    return this.http.get<Companies[]>(this.URL_SERVER + this.URL_GET_ALL);
  }

  create(newCompany: Companies) {
    return this.http.post<any>(this.URL_SERVER + this.URL_NEW, newCompany);
  }

  getCompany(searchItem) {
    return this.http.post<any>(this.URL_SERVER + this.URL_GET, searchItem);
  }

  update(company) {
    return this.http.post<any>(this.URL_SERVER + this.URL_UPDATE, company);
  }

  actDesact(company) {
    return this.http.post<any>(this.URL_SERVER + this.URL_ACT_DESACT, company);
  }
}
