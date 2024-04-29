package com.example.eventify.controller;

import com.example.eventify.dto.LoginDTO;
import com.example.eventify.entity.User;
import com.example.eventify.service.UserService;
import com.example.eventify.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
@RequestMapping("/users")
@Validated
public class UserController {
    @Autowired
    private UserService userService;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
        logger.info("Attempting login with email: {}", loginDTO.getEmail());
        try {
            User user = userService.authenticateUser(loginDTO.getEmail(), loginDTO.getPassword());
            if (user != null) {
                String token = JwtUtil.generateToken(user.getEmail());
                logger.info("Token generated: {}", token);
                return ResponseEntity.ok().body(Collections.singletonMap("token", token));
            } else {
                logger.warn("Login failed: Invalid credentials");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } catch (Exception e) {
            logger.error("Login error: {}", e.getMessage(), e);
            return ResponseEntity.badRequest().body("Login failed: " + e.getMessage());
        }
    }




    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/{id}") // Added {id} path variable
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findByUserId(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public User createUser(@Validated @RequestBody User user) {
        return userService.saveUser(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User updatedUser = userService.updateUser(id, userDetails);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}") // Added {id} path variable
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
