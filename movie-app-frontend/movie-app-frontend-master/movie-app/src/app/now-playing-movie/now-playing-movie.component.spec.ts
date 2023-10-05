import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingMovieComponent } from './now-playing-movie.component';

describe('NowPlayingMovieComponent', () => {
  let component: NowPlayingMovieComponent;
  let fixture: ComponentFixture<NowPlayingMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NowPlayingMovieComponent]
    });
    fixture = TestBed.createComponent(NowPlayingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
