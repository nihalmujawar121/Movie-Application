import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '3b513c77605e4676eeb4c7cbb4ac4185';
  private apiKey2 = '3493628d7ac78102e484e8572a2e2d22';

  getAllMovies(): Observable<any> {
    const url = `${this.apiUrl}/discover/movie?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getDetails(movieId: string) {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getNowPlayingMovie() {
    const url = `${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getTopRatedMovie() {
    const url = `${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getPopularMovie() {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey2}`;
    return this.http.get<any>(url);
  }

  getUpcomingMovie() {
    const url = `${this.apiUrl}/movie/upcoming?api_key=${this.apiKey2}`;
    return this.http.get<any>(url);
  }

  getCastDetails(movieId: string) {
    const url = `${this.apiUrl}/movie/${movieId}/credits?api_key=${this.apiKey2}`;
    return this.http.get<any>(url);
  }

getReview(movieId:any){
  const url=`${this.apiUrl}/movie/${movieId}/reviews?api_key=${this.apiKey2}`;
  return this.http.get<any>(url);
}

getRecommendation(movieId:any){
    const url=`${this.apiUrl}/movie/${movieId}/recommendations?api_key=${this.apiKey2}`
    return this.http.get<any>(url);
  }

getGenre(){
  const url=`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey2}`;
  return this.http.get<any>(url)
}

getVideo(movieId:string){
  const url = `${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey2}`;
  return this.http.get<any>(url);
}

searchMovie(query:string):Observable<any>{
  const url=`${this.apiUrl}/search/movie?api_key=${this.apiKey2}&query=${query}`;
  return this.http.get<any>(url);
}

  addToFavorites(movie: any) {
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('Token'),
      'Content-Type': 'application/json',
    });

    const requestOptions = {
      headers: httpHeaders,
    };

    const movieData = JSON.stringify(movie);

    console.log(requestOptions);

    return this.http.post(
      'http://localhost:9002/api/v2/addToFavorites',
      movieData,
      requestOptions
    );
  }

  viewFavorites():Observable<any[]> {
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('Token'),
      'Content-Type': 'application/json',
    });

    const requestOptions = {
      headers: httpHeaders,
    };

    return this.http.get<any[]>(
      'http://localhost:9002/api/v2/favoriteMovie',
      requestOptions
    );
  }

  deleteFromFavorites(movieName:string){
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('Token'),
      'Content-Type': 'application/json',
    });

    const requestOptions = {
      headers: httpHeaders
      //responseType: 'string' as 'text',
    };

    return this.http.delete(
      `http://localhost:9002/api/v2/movie/${movieName}`,
      requestOptions
     
    );
    
  }
}
