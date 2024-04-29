import React from 'react';
import './EventList.css';

const EventList = ({ events }) => {
    return (
        <div className="event-list-container">
            {events.map(event => (
                <div key={event.id} className="event-card">
                    <h4>{event.title}</h4>
                    <p>Description: {event.description}</p>
                    <p>Location: {event.location}</p>
                    <p>Start: {new Date(event.startTime).toLocaleString()}</p>
                    <p>End: {new Date(event.endTime).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default EventList;
