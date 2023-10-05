import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming-movie',
  templateUrl: './upcoming-movie.component.html',
  styleUrls: ['./upcoming-movie.component.css'],
})
export class UpcomingMovieComponent {
  constructor(
    private movieService: MovieServiceService,
    private route: Router
  ) {}

  
  imageSize = 'w500';

  upcomingMovie: any[] = [];

  ngOnInit() {
    this.movieService.getUpcomingMovie().subscribe((data) => {
      this.upcomingMovie = data.results;
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
