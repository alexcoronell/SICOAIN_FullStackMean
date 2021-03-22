import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Municipalities } from '../models/municipalities';

@Injectable({
  providedIn: 'root'
})
export class MunicipalitiesService {

  municipality: Municipalities;
  municipalities: Municipalities[]

  private readonly URL_SERVER = "http://localhost:3000/api/municipalities/";

  constructor(private http: HttpClient) { }

  getMunicipalities() {
    return this.http.get<Municipalities[]>(this.URL_SERVER);
  }

  getMunicipalitiesDepartment(department) {
    return this.http.post<Municipalities[]>(this.URL_SERVER, department);
  }
}
