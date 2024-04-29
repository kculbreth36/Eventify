import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventSearch from './EventSearch';
import EventList from './EventList';
import './EventList.css';

const Event = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/events');
                setEvents(response.data);
                setFilteredEvents(response.data); // Initially, no filter applied
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const handleSearch = (searchParams) => {
        // Filter events based on search parameters
        const filtered = events.filter(event => {
            return (searchParams.location ? event.location.toLowerCase().includes(searchParams.location.toLowerCase()) : true)
                && (searchParams.title ? event.title.toLowerCase().includes(searchParams.title.toLowerCase()) : true)
                && (searchParams.startDate ? new Date(event.startTime) >= new Date(searchParams.startDate) : true)
                && (searchParams.endDate ? new Date(event.endTime) <= new Date(searchParams.endDate) : true);
        });
        setFilteredEvents(filtered);
    };

    return (
        <div className="events-page">
            <EventSearch onSearch={handleSearch} />
            <EventList events={filteredEvents} />
        </div>
    );
};

export default Event;

