import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css'],
})
export class ContentBodyComponent implements OnInit {
  searchingMovie = '';
  movie = '';
  showMovies: any;
  keyPressed: boolean = false;

  constructor(private _service: MoviesService) {}

  ngOnInit(): void {}

  searchMovie(event: any) {
    this.movie = event.target.value;
    this._service.getMovie(this.movie).subscribe((res) => {
      this.showMovies = res;
      this.keyPressed = true;
    });
  }
}
