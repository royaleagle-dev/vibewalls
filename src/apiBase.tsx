import axios from 'axios'

const apiBase = axios.create({
    baseURL: 'http://localhost/vibewalls',
});

// const apiBase = axios.create({
//     baseURL: 'https://vibewalls.42web.io',
// })

export default apiBase