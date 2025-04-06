import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_BASE_URL;
const serverApiToken = import.meta.env.VITE_SERVER_API_TOKEN;

export const axiosClient = axios.create({
    baseURL: serverUrl,
    headers: {
        common: {
            // Fixed typo from 'commmon' to 'common'
            Authorization: `Bearer ${serverApiToken}`,
        },
    },
});
