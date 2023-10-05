import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent {

  constructor(private activateRoute:ActivatedRoute,private movieService:MovieServiceService ){}

  MovieId: string | undefined | null;
  movieDetail:any[]=[];
  image:any[]=[]
  imageSize = 'w500';
  Id:any[]=[];


  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      this.MovieId = params.get('id');
      if (this.MovieId) {
        this.movieService.getCastDetails(this.MovieId).subscribe(data => {
          this.movieDetail = data.cast;

          this.movieDetail.forEach((castMember)=>
          console.log('Cast Details:', castMember.original_name)
          )
          console.log('Cast Details:', this.movieDetail); 
        });
      }
    });
   this. images();
   this.movieId();
  }

  images(): void {
    this.activateRoute.paramMap.subscribe(params => {
      this.MovieId = params.get('id');
      if (this.MovieId) {
        this.movieService.getCastDetails(this.MovieId).subscribe(data => {
          this.image = data.cast;
          
          this.image.forEach((castMember)=>
          console.log('Cast Details:', castMember.profile_path)
          )
          console.log('Cast Details:', this.image); 
        });
      }
    });
  }

  movieId(): void {
    this.activateRoute.paramMap.subscribe(params => {
      this.MovieId = params.get('id');
      if (this.MovieId) {
        this.movieService.getCastDetails(this.MovieId).subscribe(data => {
          this.Id = data.cast;
        
          this.Id.forEach((castMember)=>
          console.log('Cast Details:', castMember.id)
          )
          console.log('Cast Details:', this.image); 
        });
      }
    });
  }


}
