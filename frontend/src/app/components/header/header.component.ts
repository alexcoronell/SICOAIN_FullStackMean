import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userDataService: UserDataService) { }

  userData: any = {};
  showHeader: boolean = false;

  ngOnInit(): void {
    this.userDataService.userDataSend.subscribe(data => {
      this.userData = data.data;
    })
    this.userDataService.showHeader.subscribe(showHeader => {
      this.showHeader = showHeader.showHeader;
    })
  }

}
