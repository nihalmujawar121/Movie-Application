import { Component, Input } from '@angular/core';
import { movie } from '../Model/Movie';
import { MovieServiceService } from '../movie-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.css'],
})

export class AddToFavoritesComponent {
  constructor(
    private movies: MovieServiceService,
    private route:Router
  ) {}

  movie: any;
  imageSize = 'w500';
  movieImage: any[] = [];

  @Input()
  movieObj: movie = {
    "adult":false,
    "backdrop_path":"",
    "genre_ids":[],
    "id":0,
    "original_language":"",
    "original_title":"",
    "overview":"",
    "popularity":0,
    "poster_path":"",
    "release_date":"",
    "title":"",
    "video":false,
    "vote_average":0,
    "vote_count":0,
 };


addMovieToFavorites() {
  const check=localStorage.getItem("Token");
  if(!check){
    this.route.navigateByUrl("/registration")
    alert("Please register !!")
  }
  console.log(this.movieObj);
  this.movies.addToFavorites(this.movieObj).subscribe((data) => {
    this.movie = data;
     alert("Movie Added Successfully!")
  });  
}

  // movieImages() {
  //   this.movies.getAllMovies().subscribe((data) => {
  //     console.log(data);
  //     data.results.map((movie: any) =>
  //       this.movieImage.push(movie.backdrop_path)
  //     );
  //     this.movieImage.forEach((p) => console.log(p));
  //   });

  

}
