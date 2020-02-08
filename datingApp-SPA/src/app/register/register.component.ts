import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/Auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelEvent = new EventEmitter();
  model: any = {};

  constructor(private auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() { }

  register() {
    this.auth.register(this.model).subscribe(
      () => {
        this.alertify.success('registration successful');
      },
      error => {
        this.alertify.error(error);
      }
    );
    // this.alertify.message('registered');
  }

  cancel() {
    this.cancelEvent.emit(false);
    this.alertify.message('cancelled');
  }
}
