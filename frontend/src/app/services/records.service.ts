import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Records } from './../models/records';


@Injectable({
  providedIn: 'root'
})

export class RecordsService {

  searchItem: Records;
  record: Records;
  newRecord: Records;
  records: Records[];

  private readonly URL_SERVER = "http://localhost:3000/api/records/";
  private readonly URL_NEW = "createRecords";
  private readonly URL_GET = "getRecord";
  private readonly URL_GET_COUNT = "getRecordNumber";
  private readonly URL_GET_ALL = "getRecords";
  private readonly URL_UPDATE = "updateRecords";
  private readonly URL_ACT_DESACT = "actDesact";

  constructor(
    private http: HttpClient
  ) { }

  getRecords() {
    return this.http.get<Records[]>(this.URL_SERVER + this.URL_GET);
  }

  getRecordNumber() {
    return this.http.get<any>(this.URL_SERVER + this.URL_GET_COUNT);
  }

  create(newRecord: Records) {
    return this.http.post<any>(this.URL_SERVER + this.URL_NEW, newRecord);
  }

  getRecord(searchItem) {
    return this.http.post<any>(this.URL_SERVER + this.URL_GET, searchItem);
  }

  update(record) {
    return this.http.post<any>(this.URL_SERVER + this.URL_UPDATE, record);
  }

  cancel(record) {
    return this.http.post<any>(this.URL_SERVER + this.URL_ACT_DESACT, record);
  }
}
