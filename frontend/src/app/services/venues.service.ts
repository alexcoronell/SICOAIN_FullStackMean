import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venues } from '../models/venues';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {

  searchItem: Venues;
  campus: Venues;
  newCampus: Venues;
  venues: Venues[];

  private readonly URL_SERVER = "http://localhost:3000/api/venues/";
  private readonly URL_NEW = "create";
  private readonly URL_GET = "getCampus";
  private readonly URL_GET_ALL = "getVenues";
  private readonly URL_UPDATE = "update";
  private readonly URL_ACT_DESACT = "actDesact";

  constructor(
    private http: HttpClient
  ) { }

  create(newCampus: Venues) {
    return this.http.post<any>(this.URL_SERVER + this.URL_NEW, newCampus);
  }

  getCampus(searchItem) {
    return this.http.post<any>(this.URL_SERVER + this.URL_GET, searchItem);
  }

  update(campus) {
    return this.http.post<any>(this.URL_SERVER + this.URL_UPDATE, campus);
  }

  actDesact(campus) {
    return this.http.post<any>(this.URL_SERVER + this.URL_ACT_DESACT, campus);
  }

}
