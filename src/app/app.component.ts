import { Component, OnInit  } from '@angular/core';
import { LoginService } from "./login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loginStatus: boolean;
constructor( private loginStatusService: LoginService){}

ngOnInit() {
    this.loginStatusService.loginStatus.subscribe(data => this.loginStatus = data);
  }
}