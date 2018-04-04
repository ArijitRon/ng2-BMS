import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pwd: string;
  user: Object;
  userDetails: {}[];
  constructor( private router:Router,) {
   
   }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('user'));
  }

  onLogIn() {
    this.user = {
      username: this.email,
      password: this.pwd
    }
    this.userDetails = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < this.userDetails.length; i++) {
     if( JSON.stringify(this.userDetails[i]) == JSON.stringify(this.user)){
       window.alert(this.email+' you are logged in');
       this.router.navigateByUrl('/home');
       return;
     }
    }
     window.alert('Need to Sign Up');
  }
}
