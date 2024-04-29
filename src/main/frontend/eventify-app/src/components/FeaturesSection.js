import React from "react";
import './FeaturesSection.css';

function FeaturesSection() {
    return (
        <div className="features-section">
            <h2>Explore Our Features</h2>
            <div className="features-list">
                <div className="feature">
                    <h3>Search Events</h3>
                    <p>Find exactly what you're looking for with our advanced search tools.</p>
                </div>
                <div className="feature">
                    <h3>Community</h3>
                    <p>Join a vibrant community of event enthusiasts just like you.</p>
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;
