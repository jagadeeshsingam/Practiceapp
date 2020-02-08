import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }
  success(message: string) {
    alertify.success(message);
  }
  error(message: string) {
    alertify.success(message);
  }
  warning(message: string) {
    alertify.success(message);
  }
  message(message: string) {
    alertify.success(message);
  }

  confirm(message: string) {
    alertify.confirm(message, function () { alertify.success('Ok'); }
      , function () { alertify.error('Cancel'); });
  }
}
