package com.example.eventify.repository;

import com.example.eventify.entity.Event;
import com.example.eventify.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {

    // Find event by location containing search term (case insensitive)
    List<Event> findByLocationContainingIgnoreCase(String location);

    // Find events created by a specific user
    List<Event> findByCreatedBy(User user);

    // Find events within a specific date range
    List<Event> findByStartTimeGreaterThanEqualAndEndTimeLessThanEqual(Date start, Date end);

    // Find events by title containing search term (case insensitive)
    List<Event> findByTitleContainingIgnoreCase(String title);

}
