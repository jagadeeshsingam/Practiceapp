import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/Auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public auth: AuthService, private alertify: AlertifyService, private route: Router) { }

  ngOnInit() { }

  login() {
    this.auth.login(this.model).subscribe(
      next => {
        this.alertify.success('successfullll');
      },
      error => {
        this.alertify.error('failed');
      }, () => { this.route.navigate(['\members']); }
    );
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.success('logged out');
    this.route.navigate(['\home']);
  }
}
