import axios from 'axios';

const api = axios.create({
    baseURL:'https://will-omnistack-backend.herokuapp.com/api',
});

export default api;