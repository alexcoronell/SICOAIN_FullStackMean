import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  @Output() userDataSend: EventEmitter<any> = new EventEmitter();
  @Output() showHeader: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
