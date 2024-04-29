import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AccountPage from "./components/AccountPage";
import './App.css';
import AboutUs from "./components/AboutUs";
import CreateEvent from "./components/CreateEvent";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-event" element={<CreateEvent />} />
                    <Route path="/account" element={<AccountPage />} />
                </Routes>
                <AboutUs />
            </div>
        </Router>
    );
}

export default App;
