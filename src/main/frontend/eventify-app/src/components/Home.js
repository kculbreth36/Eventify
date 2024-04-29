import React from "react";
import WelcomeSection from "./WelcomeSection";
import FeaturesSection from "./FeaturesSection";
import './Home.css';
import Event from "./Event";

function Home() {
    return (
        <div className="home-container">
            <WelcomeSection />
            <FeaturesSection />
            <Event />
        </div>
    );
}

export default Home;
