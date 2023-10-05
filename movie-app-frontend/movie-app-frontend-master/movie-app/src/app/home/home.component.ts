import { Component, Input } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';
import { movie } from '../Model/Movie';
import { query } from '@angular/animations';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	movieOverview: any;
	constructor(private movie: MovieServiceService, private route: Router) {}

	imageSize = 'w500';
    
	movieData: any[] = [];
	movieImage: any[] = [];
	movieAllData: any[] = [];

	getMovieId: any[] = [];
	searchMovie: any;

	ngOnInit() {
		this.movie.getAllMovies().subscribe((data) => {
			console.log(data);
			data.results.map((movie: any) =>
				this.movieData.push(movie.original_title)
			);
			this.movieData.forEach((p) => console.log(p));
			this.movieImages();
			this.movieId();
			this.getAllMoviesData();
		});
	}

	getAllMoviesData() {
		this.movie.getAllMovies().subscribe(
			(data) => {
				console.log(data);
				this.movieAllData = data.results;
			},
			(e) => {
				alert('Error fetching movies:');
			}
		);
	}

	movieImages() {
		this.movie.getAllMovies().subscribe((data) => {
			console.log(data);
			data.results.map((movie: any) =>
				this.movieImage.push(movie.backdrop_path)
			);
			this.movieImage.forEach((p) => console.log(p));
		});
	}

	movieId() {
		this.movie.getAllMovies().subscribe((data) => {
			console.log(data);
			data.results.map((movie: any) => this.getMovieId.push(movie.id));
		});
		this.getMovieId.forEach((p) => console.log(p));
	}

	logOut() {
		localStorage.setItem('Token', '');
		this.route.navigateByUrl('/movie-app');
	}

	searchQuery: string = '';
	searchResults: any;

	search(): void {
		if (this.searchQuery) {
			this.movie.searchMovie(this.searchQuery).subscribe(
				(data) => {
					this.searchResults = data.results;
				},
				(error) => {
					console.error(error);
				}
			);
		}
	}
}
