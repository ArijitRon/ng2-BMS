import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pwd: string;
  user: Object;
  loginStatus: boolean;
  userDetails: {}[];
  constructor(private router: Router, private loginStatusService: LoginService) {

  }
  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('user'));
    this.loginStatus = false;
  }

  onLogIn() {
    this.user = {
      username: this.email,
      password: this.pwd
    }
    this.userDetails = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < this.userDetails.length; i++) {
      if (JSON.stringify(this.userDetails[i]) == JSON.stringify(this.user)) {
        window.alert(this.email + ' you are logged in');
        this.loginStatusService.changeStatus(true);
        this.router.navigateByUrl('/home');
        return;
      }
    }
    if (window.confirm('Need to Sign Up')) {
      this.router.navigateByUrl('/signup');
    }
  }


}
