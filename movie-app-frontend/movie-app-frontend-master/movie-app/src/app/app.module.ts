import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MovieappComponent } from './movieapp/movieapp.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ViewMovieDetailsComponent } from './view-movie-details/view-movie-details.component';
import { NowPlayingMovieComponent } from './now-playing-movie/now-playing-movie.component';
import { TopRatedMovieComponent } from './top-rated-movie/top-rated-movie.component';
import { PopularMovieComponent } from './popular-movie/popular-movie.component';
import { UpcomingMovieComponent } from './upcoming-movie/upcoming-movie.component';
import { AddToFavoritesComponent } from './add-to-favorites/add-to-favorites.component';
import { ShowFavoritesComponent } from './show-favorites/show-favorites.component';
import { HeadersComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieappComponent,
    RegistrationComponent,
    HomeComponent,
    ViewMovieDetailsComponent,
    NowPlayingMovieComponent,
    TopRatedMovieComponent,
    PopularMovieComponent,
    UpcomingMovieComponent,
    AddToFavoritesComponent,
    HeadersComponent,
    ShowFavoritesComponent,
    CastDetailsComponent,
    VideoPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
