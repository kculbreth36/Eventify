import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <img
                src={require('/Users/kculb/IdeaProjects/Eventify/src/main/frontend/eventify-app/src/images/eventify.gif')}
                alt="Logo"
                className="gif"
                repeat={false}
            />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create-event">Create Event</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
