package com.example.UserAuthentication.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(reason = "Invalid credintial", code = HttpStatus.CONFLICT)
public class InvalidCredintialsException extends Exception {
    public InvalidCredintialsException(String message) {
        super(message);
    }
}
