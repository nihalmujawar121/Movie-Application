package com.example.UserAuthentication.service;

import com.example.UserAuthentication.entity.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityTokenGeneratorImpl implements SecurityTokenGenerator {

    @Override
    public Map<String, String> generateToken(User user) {

        Map<String, String> tokenMap = new HashMap<>();
        Map<String, Object> userDetailInfo = new HashMap<>();
        userDetailInfo.put("userEmailID", user.getUserEmailID());
        String jwtToken = Jwts.builder().setClaims(userDetailInfo).setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS512, "password").compact();

        tokenMap.put("token", jwtToken);
        tokenMap.put(user.getUserName(), "Login Successfully");

        return tokenMap;
    }
}
