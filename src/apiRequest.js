import axios from "axios";

const apiRequest = axios.create({
    baseURL: "http://www.themealdb.com/api/json/v1/1",
    withCredentials: true
});

export default apiRequest;