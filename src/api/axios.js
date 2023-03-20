import axios from "axios"
import { API_URL } from "../constants"

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
})

export default api
