import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Positions } from '../models/positions';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  searchItem: Positions;
  position: Positions;
  newCompany: Positions;
  positions: Positions[];

  private readonly URL_SERVER = "http://localhost:3000/api/positions/";
  private readonly URL_NEW = "create";
  private readonly URL_GET = "getPosition";
  private readonly URL_GET_ALL = "getPositions";
  private readonly URL_UPDATE = "update";
  private readonly URL_ACT_DESACT = "actDesact";

  constructor(private http: HttpClient) { }

  getPositions() {
    return this.http.get<Positions[]>(this.URL_SERVER + this.URL_GET_ALL);
  }

  getPosition(searchItem) {
    return this.http.post<any>(this.URL_SERVER + this.URL_GET, searchItem);
  }

  create(newPosition: Positions) {
    return this.http.post<any>(this.URL_SERVER + this.URL_NEW, newPosition);
  }

  update(position) {
    return this.http.post<any>(this.URL_SERVER + this.URL_UPDATE, position);
  }

  actDesact(position) {
    return this.http.post<any>(this.URL_SERVER + this.URL_ACT_DESACT, position);
  }

}
