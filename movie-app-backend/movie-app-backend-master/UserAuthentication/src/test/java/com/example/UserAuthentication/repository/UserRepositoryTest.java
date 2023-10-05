package com.example.UserAuthentication.repository;

import com.example.UserAuthentication.entity.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;


@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    private User user;

    @BeforeEach
    void setUp() {
        user = new User("nihal@gmail.com", "14253678", "7507867843", "nihal121");
    }

    @AfterEach
    void tearDown() {
        user = null;
        userRepository.deleteAll();
    }

//    @Test
//    void userRepositoryTest_save_shouldReturnSavedUser() {
//        userRepository.save(user);
//        Optional<User> savedUser = userRepository.findUserByUserEmailID("nihal@gmail.com");
//        assertThat(savedUser.isPresent()).isTrue();
//        assertThat(savedUser.get().getUserEmailID()).isEqualTo("nihal@gmail.com");
//    }

}



