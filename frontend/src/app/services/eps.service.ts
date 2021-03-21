import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eps } from '../models/eps';

@Injectable({
  providedIn: 'root'
})
export class EpsService {

  searchItem: Eps;
  eps: Eps;
  newEps: Eps;
  epss: Eps[];

  private readonly URL_SERVER = "http://localhost:3000/api/epss/";
  private readonly URL_NEW = "create";
  private readonly URL_GET = "getEps";
  private readonly URL_GET_ALL = "getEpss";
  private readonly URL_UPDATE = "update";
  private readonly URL_ACT_DESACT = "actDesact";

  constructor(private http: HttpClient) { }


  create(newEps: Eps) {
    return this.http.post<any>(this.URL_SERVER + this.URL_NEW, newEps);
  }

  getEps(searchItem) {
    return this.http.post<any>(this.URL_SERVER + this.URL_GET, searchItem);
  }

  update(eps) {
    return this.http.post<any>(this.URL_SERVER + this.URL_UPDATE, eps);
  }

  actDesact(eps) {
    return this.http.post<any>(this.URL_SERVER + this.URL_ACT_DESACT, eps);
  }
}
