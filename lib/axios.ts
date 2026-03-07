import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BE_URL ?? "http://localhost:7777/api",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);