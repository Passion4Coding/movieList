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
  showMovies :any = [];
  keyPressed: boolean = false;

  constructor(private _service: MoviesService) {}

  ngOnInit(): void {}

  searchMovie(event: any) {
    this.movie = event.target.value;
    if(this.movie.length >= 2) { // if searched movie name is greater than 2
      this._service.getMovie(this.movie).subscribe((data) => {
          this.showMovies = data.Search;
          this.keyPressed = true;      
      });
    }

    
  }
}
