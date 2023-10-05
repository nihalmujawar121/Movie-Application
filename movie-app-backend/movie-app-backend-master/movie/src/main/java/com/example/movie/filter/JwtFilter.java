package com.example.movie.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class JwtFilter extends GenericFilter {


    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        String authHeader = httpServletRequest.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer")) {
            throw new ServletException("Token is Missing");
        } else {
            System.out.println("Authorization key" + authHeader);


            String token = authHeader.substring(7);

            Claims claims = Jwts.parser().setSigningKey("password").parseClaimsJws(token).getBody();
            System.out.println("Claims from Token" + claims);
            httpServletRequest.setAttribute("userEmailID", claims.get("userEmailID"));
            filterChain.doFilter(servletRequest, servletResponse);
        }
    }
}
