import axios from 'axios';
import tokenService from './tokenService';

const API_URL = 'http://localhost:8080/users/';

const login = async (email, password) => {
    const response = await axios.post(API_URL + 'login', { email, password });
    if (response.data.token) {
        tokenService.setUserToken(response.data.token);
    }
    return response.data;
};

const signup = async (userData) => {
    const response = await axios.post(API_URL, userData);
    if (response.data.token) {
        tokenService.setUserToken(response.data.token);
    }
    return response.data;
};

const logout = () => {
    tokenService.removeUserToken();
};

export default {
    login,
    signup,
    logout
};
