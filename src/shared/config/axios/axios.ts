import axios from "axios";

export const multiAppAxiosInstance = axios.create({
  baseURL: 'http://localhost:5173/'
});