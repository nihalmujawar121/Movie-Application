package com.example.movie.service;

import com.example.movie.entity.Movie;
import com.example.movie.entity.UserDetails;
import com.example.movie.entity.UserDetailsDTO;
import com.example.movie.proxy.UserDetailsProxy;
import com.example.movie.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    UserDetailsProxy userDetailsProxy;

    public UserDetails registration(UserDetails userDetails) {
        List<Movie> movieList = new ArrayList<>();
        userDetails.setMovies(movieList);
        ResponseEntity details = userDetailsProxy.registerUser(new UserDetailsDTO(userDetails.getUserEmailID(), userDetails.getPassword(), userDetails.getMobileNumber(), userDetails.getUserName()));
        System.out.println(details.getBody());
        return movieRepository.save(userDetails);
    }

    public UserDetails addToFavorites(String userEmailId, Movie movie) {
        System.out.println("hi");
        System.out.println(userEmailId + "email");
        UserDetails userDetails = movieRepository.findById(userEmailId).get();
        System.out.println(userEmailId);
        if (userDetails != null) {
            List<Movie> movieList = userDetails.getMovies();
            movieList.add(movie);
            userDetails.setMovies(movieList);
            return movieRepository.save(userDetails);
        } else {
            return null;
        }
    }

    public UserDetails removeFromFavorites(String userEmailId, String movieName) {
        UserDetails userDetails = movieRepository.findById(userEmailId).get();
        if (userDetails != null) {
            List<Movie> movie = userDetails.getMovies();
            Movie removeMovie = movie.stream().filter(movies -> movies.getOriginal_title().equals(movieName)).collect(Collectors.toList()).get(0);
            movie.remove(removeMovie);
            userDetails.setMovies(movie);
            return movieRepository.save(userDetails);
        } else {
            return null;
        }
    }

    public List<Movie> viewFavorites(String userEmailId) {
        UserDetails details = movieRepository.findById(userEmailId).get();
        if (details != null) {
            List<Movie> favoritesMovie = details.getMovies();
            return favoritesMovie;

        } else {
            return null;
        }
    }

}
