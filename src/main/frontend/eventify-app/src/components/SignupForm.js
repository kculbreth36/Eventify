// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/users', {
                username,
                email,
                password,
                role: 'user' // Assuming a default role for new users
            });
            console.log('Response:', response); // Log the response
            // Handle successful signup (e.g., redirect user, show success message)
            console.log('User created successfully:', response.data); // Log the user data
        } catch (error) {
            console.error('Error:', error); // Log the error
            // Handle signup error (e.g., display error message)
            if (error.response) {
                console.error('Error response data:', error.response.data); // Log the error response data
                setError(error.response.data.message || 'Unknown error occurred');
            } else {
                setError('Network error occurred. Please try again.'); // Handle network errors
            }
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;

