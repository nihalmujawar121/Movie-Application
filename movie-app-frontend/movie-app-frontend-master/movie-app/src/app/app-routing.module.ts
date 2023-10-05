import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieappComponent } from './movieapp/movieapp.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ViewMovieDetailsComponent } from './view-movie-details/view-movie-details.component';
import { NowPlayingMovieComponent } from './now-playing-movie/now-playing-movie.component';
import { TopRatedMovieComponent } from './top-rated-movie/top-rated-movie.component';
import { PopularMovieComponent } from './popular-movie/popular-movie.component';
import { UpcomingMovieComponent } from './upcoming-movie/upcoming-movie.component';
import { ShowFavoritesComponent } from './show-favorites/show-favorites.component';
import { AddToFavoritesComponent } from './add-to-favorites/add-to-favorites.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'movie-app', component: MovieappComponent },
  { path: '', redirectTo: '/movie-app', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'viewMovieDetails', component: ViewMovieDetailsComponent },
  { path: 'viewMovieDetails/:id', component: ViewMovieDetailsComponent },
  { path: 'now-playing-movie', component: NowPlayingMovieComponent },
  { path: 'top-rated-movie', component: TopRatedMovieComponent },
  { path: 'popular-movie', component: PopularMovieComponent },
  { path: 'upcoming-movie', component: UpcomingMovieComponent },
  {path:'show-favorites',component:ShowFavoritesComponent},
  {path:'add-to-favorites',component:AddToFavoritesComponent},
  {path:'cast-details',component:CastDetailsComponent},
  {path:'cast-details/:id',component:CastDetailsComponent},
  {path:'video-player',component:VideoPlayerComponent},
  {path:'video-player/:id',component:VideoPlayerComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
