const TOKEN_KEY = 'authToken';

const setUserToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

const getUserToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

const removeUserToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};


export default {
    setUserToken,
    getUserToken,
    removeUserToken
};
