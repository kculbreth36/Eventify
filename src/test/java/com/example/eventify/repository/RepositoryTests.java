package com.example.eventify.repository;

import com.example.eventify.entity.Event;
import com.example.eventify.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class RepositoryTests {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserRepository userRepository;

    private User user;
    private Event event;

    @BeforeEach
    void setUp() {
        // Set up user
        user = new User();
        user.setUsername("testUser");
        user.setPassword("testPass");
        user.setEmail("testUser@example.com");
        user.setRole("USER_ROLE");
        userRepository.save(user);

        // Set up event
        event = new Event();
        event.setTitle("Test Event");
        event.setDescription("This is a test event");
        event.setLocation("Test Location");
        event.setStartTime(new Date(124, 4, 1, 0, 0, 0));
        event.setEndTime(new Date(124, 4, 31, 23, 59, 59));
        event.setCreatedBy(user);
        eventRepository.save(event);
    }

    @Test
    public void whenFindByTitle_thenReturnEvent() {
        // When
        List<Event> foundEvents = eventRepository.findByTitleContainingIgnoreCase("Test");

        // Then
        assertThat(foundEvents).hasSize(1);
        assertThat(foundEvents.get(0).getTitle()).isEqualTo(event.getTitle());
    }

    @Test
    public void whenFindByCreator_thenReturnEvents() {
        // When
        List<Event> foundEvents = eventRepository.findByCreatedBy(user);

        // Then
        assertThat(foundEvents).hasSize(1);
        assertThat(foundEvents.get(0).getCreatedBy().getUsername()).isEqualTo(user.getUsername());
    }

    @Test
    public void whenFindByEmail_thenReturnUser() {
        // Given
        String email = "testUser2@example.com";
        User user = new User();
        user.setUsername("testUser2");
        user.setPassword("testPass2");
        user.setEmail(email);
        user.setRole("testRole");
        userRepository.save(user);

        // When
        User found = userRepository.findByEmail(email);

        // Then
        assertThat(found).isNotNull();
        assertThat(found.getEmail()).isEqualTo(email);
        assertThat(found.getRole()).isEqualTo("testRole");
    }


    // ... Additional tests for other custom methods...

    // After the tests you can clean up the data if necessary, although it is not required for in-memory databases.
    // They are reset for each test run.
}
