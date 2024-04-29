package com.example.eventify.entity;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.AfterAll;

import java.util.Date;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class EventTest {

    private static ValidatorFactory validatorFactory;
    private static Validator validator;

    @BeforeAll
    static void createValidator() {
        validatorFactory = Validation.buildDefaultValidatorFactory();
        validator = validatorFactory.getValidator();
    }

    @AfterAll
    static void close() {
        validatorFactory.close();
    }

    @Test
    void event_whenValid_noConstraintViolations() {
        Event event = new Event();
        event.setTitle("Annual Conference");
        event.setDescription("This is a description for the annual conference.");
        event.setLocation("New York");
        event.setStartTime(new Date(System.currentTimeMillis() + 10000));
        event.setEndTime(new Date(System.currentTimeMillis() + 20000));

        Set<ConstraintViolation<Event>> violations = validator.validate(event);

        violations.forEach(violation -> System.out.println(violation.getPropertyPath() + ": " + violation.getMessage()));

        assertTrue(violations.isEmpty());

    }

    @Test
    void event_whenTitleBlank_constraintViolationOccurs() {
        Event event = new Event();
        event.setTitle("");  // invalid title
        event.setDescription("This is a description.");
        event.setLocation("New York");
        event.setStartTime(new Date(System.currentTimeMillis() + 10000));
        event.setEndTime(new Date(System.currentTimeMillis() + 20000));

        Set<ConstraintViolation<Event>> violations = validator.validate(event);

        violations.forEach(violation -> System.out.println(violation.getPropertyPath() + ": " + violation.getMessage()));

        assertFalse(violations.isEmpty());
        assertEquals(1, violations.size());
        assertEquals("Title is required", violations.iterator().next().getMessage());
    }

}
