import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (typeof email !== 'string' || typeof password !== 'string') {
            setError('Invalid email or password');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/users/login', { email, password });
            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
                console.log('Logged in successfully');
                // Redirect or change the component state after login
            } else {
                throw new Error('No token received');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Invalid email or password');
            } else {
                setError('Failed to log in: ' + error.message);
            }
            console.error('Login error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {error && <div>{error}</div>}
            <button type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;