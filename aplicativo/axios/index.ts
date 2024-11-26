import axios from 'axios';
const api = axios.create({
    baseURL: "http://192.168.137.111:3000"// "http://localhost:3000",
});

export { api };
