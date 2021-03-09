import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  updatePasswordUser(form: NgForm){
    console.log(form);
  }

  cancel(form?: NgForm) {
    this.router.navigate(['/main']);
  }

}
