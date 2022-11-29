const API_URL = 'https://api.thecatapi.com/v1/';
import axios from 'axios';

export const http = axios.create({
    baseURL: API_URL,
    headers: {
        'accept': '*',
        'content': '*',
    },
});
