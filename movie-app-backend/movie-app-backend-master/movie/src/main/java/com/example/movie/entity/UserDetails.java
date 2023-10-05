package com.example.movie.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class UserDetails {

    List<Movie> movies;
    @Id
    private String userEmailID;
    private String password;
    private String mobileNumber;
    private String userName;
}
