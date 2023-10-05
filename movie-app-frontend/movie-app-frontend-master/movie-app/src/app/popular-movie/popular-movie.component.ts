import { Component, Input } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { movie } from '../Model/Movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css'],
})
export class PopularMovieComponent {
  constructor(
    private movieService: MovieServiceService,
    private route: Router
  ) {}

  imageSize = 'w500';

  popularMovies: any[] = [];

  ngOnInit() {
    this.movieService.getPopularMovie().subscribe((data) => {
      this.popularMovies = data.results;
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
