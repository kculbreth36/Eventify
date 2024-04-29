package com.example.eventify.service;

import com.example.eventify.entity.Event;
import com.example.eventify.entity.User;
import com.example.eventify.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> findAllEvents() {
        return eventRepository.findAll();
    }

    public List<Event> findEventsByLocation(String location) {
        return eventRepository.findByLocationContainingIgnoreCase(location);
    }

    public List<Event> findEventsByCreator(User user) {
        return eventRepository.findByCreatedBy(user);
    }

    public List<Event> findEventsBetweenDates(Date start, Date end) {
        return eventRepository.findByStartTimeGreaterThanEqualAndEndTimeLessThanEqual(start, end);
    }

    public List<Event> findEventsByTitle(String term) {
        return eventRepository.findByTitleContainingIgnoreCase(term);
    }

    public Event findEventById(Long id) {
        return eventRepository.findById(id).orElse(null);
    }

    public Event saveEvent(Event event) {
        event.setCreatedAt(new Date()); // Set the createdAt property to the current date and time
        return eventRepository.save(event);
    }



    public Event updateEvent(Long id, Event eventDetails) {
        Optional<Event> eventOptional = eventRepository.findById(id);
        if (eventOptional.isPresent()) {
            Event event = eventOptional.get();
            event.setTitle(eventDetails.getTitle());
            event.setDescription(eventDetails.getDescription());
            event.setLocation(eventDetails.getLocation());
            event.setStartTime(eventDetails.getStartTime());
            event.setEndTime(eventDetails.getEndTime());
            // Add more fields as necessary
            return eventRepository.save(event);
        } else {
            return null;
        }
    }



    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}
