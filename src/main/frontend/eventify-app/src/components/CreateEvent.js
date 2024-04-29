import React, { useState } from 'react';
import axios from 'axios';
import "./CreateEvent.css";

const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        location: '',
        startTime: '',
        endTime: '',
        createdBy: '' // Added "createdBy" field
    });

    const handleChange = (e) => {
        setEventData({...eventData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting event data:", eventData);
        try {
            const response = await axios.post('http://localhost:8080/events', eventData);
            console.log("Event created:", response.data);
            // Optionally reset form or give user feedback
            setEventData({
                title: '',
                description: '',
                location: '',
                startTime: '',
                endTime: '',
                createdBy: '' // Reset "createdBy" field
            });
            alert('Event created successfully!');
        } catch (error) {
            console.error("Error creating event:", error);
            alert('Failed to create event!');
        }
    };

    return (
        <div className="event-form-container">
            <h1>Create Event</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={eventData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                />
                <textarea
                    name="description"
                    value={eventData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <input
                    type="text"
                    name="location"
                    value={eventData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    required
                />
                <input
                    type="datetime-local"
                    name="startTime"
                    value={eventData.startTime}
                    onChange={handleChange}
                    required
                />
                <input
                    type="datetime-local"
                    name="endTime"
                    value={eventData.endTime}
                    onChange={handleChange}
                    required
                />
                {/* Added "createdBy" input field */}
                <input
                    type="text"
                    name="createdBy"
                    value={eventData.createdBy}
                    onChange={handleChange}
                    placeholder="Created by"
                    required
                />
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
}

export default CreateEvent;
