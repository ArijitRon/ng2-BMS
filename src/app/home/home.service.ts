import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxJs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieListService {
    _url: string = 'assets/data/movie.json';
    constructor(private _http: Http) { }
    getMovieList(): Observable<any> {
        return this._http.get(this._url)
            .map((response: Response) => { return response.json() });
    }
}