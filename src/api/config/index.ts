import axios from 'axios'

export const URI = import.meta.env.VITE_API_URI


export const instance = axios.create(
    {
        baseURL: URI
    }
)