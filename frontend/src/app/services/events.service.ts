import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  searchItem: Events;
  event: Events;
  newEvent: Events;
  events: Events[];

  private readonly URL_SERVER = "http://localhost:3000/api/events/";
  private readonly URL_NEW = "create";
  private readonly URL_GET = "getEvent/";
  private readonly URL_GET_ALL = "getEvents";
  private readonly URL_GET_ACTIVE = "getActiveEvents";
  private readonly URL_UPDATE = "update";
  private readonly URL_ACT_DESACT = "actDesact";


  constructor(
    private http: HttpClient
  ) { }

  create(newEvent: Events) {
    return this.http.post<any>(this.URL_SERVER + this.URL_NEW, newEvent);
  }

  getEvent(searchItem) {
    return this.http.get<any>(this.URL_SERVER + this.URL_GET + searchItem);
  }

  getEvents() {
    return this.http.get<Events[]>(this.URL_SERVER + this.URL_GET_ALL);
  }

  getActiveEvents() {
    return this.http.get<Events[]>(this.URL_SERVER + this.URL_GET_ACTIVE);
  }


  update(event) {
    return this.http.post<any>(this.URL_SERVER + this.URL_UPDATE, event);
  }

  actDesact(event) {
    return this.http.post<any>(this.URL_SERVER + this.URL_ACT_DESACT, event);
  }
}
