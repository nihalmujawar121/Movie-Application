import { Component, Input } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { movie } from '../Model/Movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-now-playing-movie',
  templateUrl: './now-playing-movie.component.html',
  styleUrls: ['./now-playing-movie.component.css'],
})
export class NowPlayingMovieComponent {
  constructor(
    private movieService: MovieServiceService,
    private route: Router
  ) {}

 
  imageSize = 'w500';

  nowPlaying: any[] = [];

  ngOnInit() {
    this.movieService.getNowPlayingMovie().subscribe((data) => {
      this.nowPlaying = data.results;
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

