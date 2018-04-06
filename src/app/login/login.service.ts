import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {

  private loginstatusSource = new BehaviorSubject<boolean>(false);
  loginStatus = this.loginstatusSource.asObservable();

  constructor() { }

  changeStatus(status: boolean) {
    this.loginstatusSource.next(status);
  }

}