import React, {useState} from 'react';
import './EventSearch.css';


const EventSearch = ({ onSearch }) => {
    const [searchParams, setSearchParams] = useState({
        location: '',
        title: '',
        startDate: '',
        endDate: '',
        user: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchParams);
    };

    return (
        <form onSubmit={handleSubmit} className="search-container">
            <input type="text" name="location" placeholder="Location" className="search-input" onChange={handleInputChange} value={searchParams.location} />
            <input type="text" name="title" placeholder="Title" className="search-input" onChange={handleInputChange} value={searchParams.title} />
            <input type="date" name="startDate" placeholder="Start Date" className="search-input" onChange={handleInputChange} value={searchParams.startDate} />
            <input type="date" name="endDate" placeholder="End Date" className="search-input" onChange={handleInputChange} value={searchParams.endDate} />
            <input type="text" name="user" placeholder="User" className="search-input" onChange={handleInputChange} value={searchParams.user} />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
}

export default EventSearch;
