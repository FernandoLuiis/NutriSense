import axios from 'axios';
const api = axios.create({
    baseURL: "http://10.197.70.48:3000"// "http://localhost:3000",
});

export { api };
