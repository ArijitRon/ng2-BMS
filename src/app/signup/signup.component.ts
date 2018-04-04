import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  pwd: string;
  user: {
    username: string,
    password: string
  };
  constructor() { }

  ngOnInit() {
  }
  onSignUp() {
    this.user = {
      username: this.email,
      password: this.pwd
    }
    let userDetails = JSON.parse(localStorage.getItem('users'));
    if (userDetails == null) {
      userDetails = [];
      userDetails.push(this.user);
      localStorage.setItem('users', JSON.stringify(userDetails));
    }
    else {
      for (let i = 0; i < userDetails.length; i++) {
        if (userDetails[i].username === this.user.username) {
          window.alert("Username Already Exist");
          return;
        }
      }
      userDetails.push(this.user);
      localStorage.setItem('users', JSON.stringify(userDetails));
    }

  }
}
