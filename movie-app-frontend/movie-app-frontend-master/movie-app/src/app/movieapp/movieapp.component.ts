import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movieapp',
  templateUrl: './movieapp.component.html',
  styleUrls: ['./movieapp.component.css'],
})

export class MovieappComponent {
  constructor(private movie: MovieServiceService) {}
}

