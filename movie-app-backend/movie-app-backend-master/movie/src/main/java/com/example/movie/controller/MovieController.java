package com.example.movie.controller;

import com.example.movie.entity.Movie;
import com.example.movie.entity.UserDetails;
import com.example.movie.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/v2")
public class MovieController {

    @Autowired
    MovieService movieService;

    @PostMapping("/register")
    public ResponseEntity<?> registration(@RequestBody UserDetails userDetails) {
        UserDetails movie = movieService.registration(userDetails);
        if (movie != null) {
            return new ResponseEntity<>(movie, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Error Occured", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addToFavorites")
    public ResponseEntity<?> addToFavorites(HttpServletRequest httpServletRequest, @RequestBody Movie movie) {
        String email = (String) httpServletRequest.getAttribute("userEmailID");
        System.out.println(email);

        if (email != null) {
            return new ResponseEntity<>(movieService.addToFavorites(email, movie), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Error Occured", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/movie/{removeMovie}")
    public ResponseEntity<?> removeFromFavorites(HttpServletRequest httpServletRequest, @PathVariable String removeMovie) {
        String email = (String) httpServletRequest.getAttribute("userEmailID");
        if (email != null) {
            return new ResponseEntity<>(movieService.removeFromFavorites(email, removeMovie), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Error Occured", HttpStatus.NOT_FOUND);
        }

    }

    @GetMapping("/favoriteMovie")
    public ResponseEntity<?> favoriteMovies(HttpServletRequest httpServletRequest) {
        String email = (String) httpServletRequest.getAttribute("userEmailID");
        if (email != null) {
            return new ResponseEntity<>(movieService.viewFavorites(email), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Error Occured", HttpStatus.NOT_FOUND);
        }
    }

}
