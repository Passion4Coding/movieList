import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css'],
})
export class ContentBodyComponent implements OnInit {
  constructor(private _service: MoviesService) {}

  searchingMovie = '';
  movie = '';
  showMovies: any;
  keyPressed: boolean = false;

  ngOnInit(): void {}

  searchMovie(event: any) {
    console.log('Movie Name searched => ', event.target.value);
    this.movie = event.target.value;

    this._service.getMovie(this.movie).subscribe((res) => {
      console.log('This is movie list on keyPress => ', res);
      this.showMovies = res;
      this.keyPressed = true;
      console.log('This is movie list this.showMovies => ', this.showMovies);
    });
  }
}
