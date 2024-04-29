import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './AccountPage.css';

const AccountPage = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="account-container">
            {isLogin ? <LoginForm /> : <SignupForm />}
            <button onClick={toggleForm}>
                {isLogin ? 'Need an account? Sign up' : 'Already have an account? Log in'}
            </button>
        </div>
    );
}

export default AccountPage;
