package com.example.UserAuthentication.service;

import com.example.UserAuthentication.entity.User;
import java.util.Map;

public interface SecurityTokenGenerator {

    Map<String, String> generateToken(User user);
}
