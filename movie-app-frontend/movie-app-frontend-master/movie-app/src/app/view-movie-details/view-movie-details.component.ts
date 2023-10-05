import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from '../Model/Movie';
import { CastDetails } from '../Model/CastDetails';

@Component({
  selector: 'app-view-movie-details',
  templateUrl: './view-movie-details.component.html',
  styleUrls: ['./view-movie-details.component.css'],
})

export class ViewMovieDetailsComponent {
  constructor(
    private movieService: MovieServiceService,
    private activateRoute: ActivatedRoute,
    private route:Router
  ) {}

  Id: string | undefined | null;
  movieDetails: movie = new movie();
  movieImage: any[] = [];
  baseUrl = 'https://image.tmdb.org/t/p/';
  imageSize = 'w500';
  getMovieId:any[]=[];
  castDetails:any[] | undefined;
  movieDetail:any[]=[];

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.Id = params.get('id');
      if (this.Id) {
        this.movieService.getDetails(this.Id).subscribe((movieData) => {
          this.movieDetails = movieData;
          console.log(movieData);
          this. getMovieReview();
          this.movieGenre();
        
        });
      }      
    });  
   }
  
  movieId() {
    this. movieService.getAllMovies().subscribe((data) => {
      console.log(data);
      data.results.map((movie: any) => this.getMovieId.push(movie.id));
    });
    this.getMovieId.forEach((p) => console.log(p)); 
  }

  review:any[]=[];

  getMovieReview(){ 
    this.movieService.getReview(this.Id).subscribe((data)=>{
   data.results.map((movie:any)=>this.review.push(movie))
   console.log(this.review);
    })
  }

  MovieId: string | undefined | null;
  movieGenres:any[]=[];
  
  movieGenre(){
    this.movieService.getGenre().subscribe((data)=>{
      data.genres.map((genre:any)=>this.movieGenres.push(genre.name));
      this.movieGenres.forEach((p)=>console.log(p));    
    })
  }

}
