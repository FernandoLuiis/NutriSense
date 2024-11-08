import axios from 'axios';
const api = axios.create({
    baseURL: "http://10.197.9.69:3000"// "http://localhost:3000",
});

export { api };
