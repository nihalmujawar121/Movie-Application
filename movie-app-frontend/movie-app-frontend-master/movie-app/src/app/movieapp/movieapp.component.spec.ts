import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieappComponent } from './movieapp.component';

describe('MovieappComponent', () => {
  let component: MovieappComponent;
  let fixture: ComponentFixture<MovieappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieappComponent]
    });
    fixture = TestBed.createComponent(MovieappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
