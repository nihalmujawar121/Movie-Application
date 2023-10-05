import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { movie, movies } from '../Model/Movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-favorites',
  templateUrl: './show-favorites.component.html',
  styleUrls: ['./show-favorites.component.css']
})

export class ShowFavoritesComponent {
  constructor(private movieService:MovieServiceService,private router:Router){}


movies:any;
imageSize = 'w500';
movieImage: any[] = [];
Id: string | undefined | null;
movieDetails: movie = new movie();
movieId:any;
id:any[]=[];

allData:any[]=[];

ngOnInit(){
  // this.movieService.viewFavorites().subscribe((data)=>this.allData=data)
  // console.log(this.allData)
  const check=localStorage.getItem("Token");
  if(!check){
    this.router.navigateByUrl("/registration")
    alert("Please register !!")
  }
  this.movieService.viewFavorites().subscribe((data) => {
    this.allData = data;
    console.log(this.allData); 
     this.getRecommendationDetails();
    
  });
}

deleteFromFavorites(movieTitle:any){
  this.movieService.deleteFromFavorites(movieTitle).subscribe((data)=>{
    this.movies=data;
    alert("Movie deleted successfully ")
    console.log(this.movies)
    this.router.navigateByUrl("/home")
  },
  (e)=>("Network issue")
  )
}

moviesId:any[]=[];

getMovieId(){
  this.movieService.viewFavorites().subscribe((data)=>{
    this.moviesId=data.map((movie:any)=>movie.id)
    console.log(this.moviesId);
  })
}


recommendationData:any[]=[]

  getRecommendationDetails() {
    this.movieService.viewFavorites().subscribe((data) => {
      this.moviesId = data.map((movie: any) => movie.id);
      console.log(this.moviesId);
      for (const movieId of this.moviesId) {
        console.log('Inside loop for movieId:', movieId); 
        this.movieService.getRecommendation(movieId).subscribe((data) => {
          data.results.map((movie:any)=>this.recommendationData.push(movie))
          console.log(this.recommendationData);
        },(e)=>alert("error"));
      }
    });
  }
  
}
