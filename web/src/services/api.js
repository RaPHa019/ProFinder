import axios from 'axios';

//fetch: comando para uso de api nativo js
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;