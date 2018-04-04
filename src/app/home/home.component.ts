import { Component, OnInit } from '@angular/core';
import { MovieListService } from './home.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
movielist=[];
  constructor(private _movielist:MovieListService) { }

  ngOnInit() {
    this._movielist.getMovieList().subscribe((data) => {
      this.movielist = data;
      console.log(this.movielist);
      
    });
  }

}
