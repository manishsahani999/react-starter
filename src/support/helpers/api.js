import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://35.186.159.34/',
    // baseURL: 'https://api.tuesday.wtf/api',
})

let AUTH_TOKEN = localStorage.getItem('token');

if (AUTH_TOKEN) { instance.defaults.headers.common['Authorization'] = `${AUTH_TOKEN}`; }

export const setAuthHeaders = (token) => instance.defaults.headers.common['Authorization'] = `${token}`;

export const handle = (res) => {
    if (res.status === 401) {
        localStorage.removeItem('token');

        const error = (res.data) || res.statusText;
        return Promise.reject(error);
    }

    return res.data;
}

export { instance as api };