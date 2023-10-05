package com.example.movie.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDetailsDTO {

    private String userEmailID;
    private String password;
    private String mobileNumber;
    private String userName;
}
