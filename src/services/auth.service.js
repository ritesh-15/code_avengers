import api from "../api/axios"

export const login = (data) => {
  return api.post("/auth/local", data)
}

export const register = (data) => {
  return api.post("/auth/local/register", data)
}
