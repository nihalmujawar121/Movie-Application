import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-rated-movie',
  templateUrl: './top-rated-movie.component.html',
  styleUrls: ['./top-rated-movie.component.css'],
})
export class TopRatedMovieComponent {
  constructor(
    private movieService: MovieServiceService,
    private route: Router
  ) {}

  imageSize = 'w500';

  topRated: any[] = [];

  ngOnInit() {
    this.movieService.getTopRatedMovie().subscribe((data) => {
      this.topRated = data.results;
    });
  }

  movie: any;

  addMovieToFavorites(movie: any) {
    const check = localStorage.getItem('Token');
    if (!check) {
      this.route.navigateByUrl('/registration');
      alert('Please register !!');
    }
    this.movieService.addToFavorites(movie).subscribe((data) => {
      this.movie = data;
      alert('Movie added successfully !');
    });
  }
}
