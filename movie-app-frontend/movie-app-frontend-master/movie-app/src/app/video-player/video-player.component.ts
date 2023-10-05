import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  
})
export class VideoPlayerComponent {


  constructor(private movieService:MovieServiceService,private ActiveRoute:ActivatedRoute,private sanitizer: DomSanitizer){}

  movieKey:any[]=[];
  Id: string | undefined | null;
  url:string='https://www.youtube.com/embed/';

ngOnInit(){
this.ActiveRoute.paramMap.subscribe((params)=>{
  this.Id=params.get('id');
  if(this.Id){
  this.movieService.getVideo(this.Id).subscribe((movie)=>{
    this.movieKey = movie.results[0]?.key;
  },(e)=>alert("Network issue")) 
  }
  this.getVideoUrl();
})}



getVideoUrl(): SafeResourceUrl {
  if (this.movieKey) {
    const fullUrl = this.url + this.movieKey;
    return this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
  }
  return '';
}

}
