import axios from "axios";

let options = { headers: { "Content-Type": "application/json" } };
const instance = axios.create(options);

instance.interceptors.request.use(function (config) {
    const token = window.localStorage.getItem("access_token");
    config.headers.Authorization = "Bearer " + token;
    return config;
});

export default instance;