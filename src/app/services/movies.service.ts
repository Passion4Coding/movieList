import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  url: any = 'https://www.omdbapi.com';
  apikey = 'bce55a7a';

  getMovie(movieName: any): Observable<any> {
    return this.http.get(
      this.url + `?s=${movieName}&` + `apikey=${this.apikey}`
    );
  }
}
