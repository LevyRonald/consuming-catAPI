const API_URL = 'https://api.thecatapi.com/v1/';
import axios from 'axios';

export const http = axios.create({
    baseURL: API_URL,
    headers: {
        'accept': '*',
        'content': '*',
        "x-api-key": 'live_bl6DTktqBeZcKVJHq1j2K4A9jTVKayMB16EEHAHV7WAJN2N1RPgJcia9WwairhHB',
    },
});
