import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Arl } from '../models/arl';

@Injectable({
  providedIn: 'root'
})

export class ArlService {

  searchItem: Arl;
  arl: Arl;
  newArl: Arl;
  arls: Arl[];

  private readonly URL_SERVER = "http://localhost:3000/api/arls/";
  private readonly URL_NEW = "create";
  private readonly URL_GET = "getArl";
  private readonly URL_GET_ALL = "getArls";
  private readonly URL_GET_ACTIVE = "getActiveArls";
  private readonly URL_UPDATE = "update";
  private readonly URL_ACT_DESACT = "actDesact";

  constructor(
    private http: HttpClient
  ) { }

  getArls() {
    return this.http.get<Arl[]>(this.URL_SERVER + this.URL_GET_ALL);
  }

  getActiveArls() {
    return this.http.get<Arl[]>(this.URL_SERVER + this.URL_GET_ACTIVE);
  }

  getArl(searchItem) {
    return this.http.post<any>(this.URL_SERVER + this.URL_GET, searchItem);
  }

  create(newArl: Arl) {
    return this.http.post<any>(this.URL_SERVER + this.URL_NEW, newArl);
  }

  update(arl) {
    return this.http.post<any>(this.URL_SERVER + this.URL_UPDATE, arl);
  }

  actDesact(arl) {
    return this.http.post<any>(this.URL_SERVER + this.URL_ACT_DESACT, arl);
  }

}
