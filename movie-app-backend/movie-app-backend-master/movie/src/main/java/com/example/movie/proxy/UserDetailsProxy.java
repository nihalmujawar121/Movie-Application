package com.example.movie.proxy;

import com.example.movie.entity.UserDetails;
import com.example.movie.entity.UserDetailsDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "UserAuthentication", url = "http://localhost:8082")
public interface UserDetailsProxy {

    @PostMapping("/api/v1/register")
    ResponseEntity<UserDetails> registerUser(@RequestBody UserDetailsDTO userDetails);

}

