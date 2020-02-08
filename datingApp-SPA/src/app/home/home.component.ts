import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registeredMode = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  toggleRegisteredMode() {
    this.registeredMode = true;
  }
  CancelRegister(register: any) {
    console.log(register);
    this.registeredMode = register;
  }
}
