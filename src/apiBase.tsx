import axios from 'axios'

const apiBase = axios.create({
    baseURL: 'http://localhost/vibewalls',
});

export default apiBase