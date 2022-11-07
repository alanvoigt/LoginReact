import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/utils";

export const Api = axios.create({
    baseURL: "https://reqres.in/api/"
});

Api.interceptors.request.use(
    (config) => {
        // pegar usuário que tá logado e já alimentar com um token válido
        const user = getUserLocalStorage();

        config.headers!.Authorization = user?.token;
        return config;

    },

    (error) => {
        return Promise.reject(error)
    }
)