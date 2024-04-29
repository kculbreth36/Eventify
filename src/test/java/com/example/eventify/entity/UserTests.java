package com.example.eventify.entity;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Set;

public class UserTests {

    private static Validator validator;

    @BeforeAll
    public static void setup() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }

    @Test
    public void testUserValidationSuccess() {
        User user = new User();
        user.setUsername("validUsername");
        user.setEmail("user@example.com");
        user.setPassword("validPassword123");
        user.setRole("USER");

        Set<ConstraintViolation<User>> violations = validator.validate(user);
        assertTrue(violations.isEmpty());
    }

    @Test
    public void testUserValidationFailure() {
        User user = new User();
        user.setUsername("");  // Triggers both @NotBlank and @Size
        user.setEmail("invalid-email");  // Triggers @Email
        user.setPassword("123");  // Triggers @Size
        user.setRole("");  // Triggers @NotBlank

        Set<ConstraintViolation<User>> violations = validator.validate(user);
        violations.forEach(violation -> System.out.println(violation.getMessage()));
        assertEquals(5, violations.size(), "There should be exactly 5 constraint violations.");
    }

}
