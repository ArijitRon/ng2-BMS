import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieListService } from './home/home.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{ LoginService} from './login/login.service';
import { HalldescriptionComponent } from './halldescription/halldescription.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HalldescriptionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'signup', component: SignupComponent
      }, {
        path: 'home', component: HomeComponent
      },{
         path: 'description', component: HalldescriptionComponent
      }])
  ],
  providers: [MovieListService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
