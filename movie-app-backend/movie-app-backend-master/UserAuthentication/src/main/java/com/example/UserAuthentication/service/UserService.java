package com.example.UserAuthentication.service;

import com.example.UserAuthentication.entity.User;
import com.example.UserAuthentication.exception.InvalidCredintialsException;
import com.example.UserAuthentication.exception.UserAlreadyRegisteredException;
import com.example.UserAuthentication.exception.UserNotFoundException;

public interface UserService {
    User register(User user) throws UserAlreadyRegisteredException;

    User login(User user) throws UserNotFoundException, InvalidCredintialsException;
}
