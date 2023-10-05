package com.example.UserAuthentication.service;

import com.example.UserAuthentication.entity.User;
import com.example.UserAuthentication.exception.InvalidCredintialsException;
import com.example.UserAuthentication.exception.UserAlreadyRegisteredException;
import com.example.UserAuthentication.exception.UserNotFoundException;
import com.example.UserAuthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User register(User user) throws UserAlreadyRegisteredException {
        Optional<User> optionalUser = userRepository.findUserByUserEmailID(user.getUserEmailID());
        if (optionalUser.isPresent()) {
            throw new UserAlreadyRegisteredException("Choose different email ID for registration!");
        }
        return userRepository.save(user);
    }

    @Override
    public User login(User user) throws UserNotFoundException, InvalidCredintialsException {
        Optional<User> optionalUser = userRepository.findUserByUserEmailID(user.getUserEmailID());
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException("User not found!");
        }
        User newUser = optionalUser.get();
        if (user.getPassword().equals(newUser.getPassword())) {
            return newUser;
        }
        throw new InvalidCredintialsException("please check your email id and password!");
    }
}
