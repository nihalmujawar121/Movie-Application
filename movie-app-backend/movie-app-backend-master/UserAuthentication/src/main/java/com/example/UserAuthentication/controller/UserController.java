package com.example.UserAuthentication.controller;

import com.example.UserAuthentication.entity.User;
import com.example.UserAuthentication.exception.InvalidCredintialsException;
import com.example.UserAuthentication.exception.UserAlreadyRegisteredException;
import com.example.UserAuthentication.exception.UserNotFoundException;
import com.example.UserAuthentication.service.SecurityTokenGenerator;
import com.example.UserAuthentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


@RestController
@RequestMapping("/api/v1")
public class UserController {
    private final UserService userService;
    private final SecurityTokenGenerator securityTokenGenerator;


    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) throws UserAlreadyRegisteredException {
        User registeredUser = this.userService.register(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> loginUser(@RequestBody User user) throws UserNotFoundException, InvalidCredintialsException {
        User loggedInUser = this.userService.login(user);
        Map<String, String> token = this.securityTokenGenerator.generateToken(loggedInUser);
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

}

