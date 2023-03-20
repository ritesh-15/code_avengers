import api from "../api/axios"

export const login = (data) => {
  return api.post("/auth/local", data)
}

export const register = (data) => {
  return api.post("/auth/local/register", data)
}

export const updateUser = (id, data) => {
  console.log(data)
  return api.put(`/users/${id}`, data)
}

export const joinAsOrganization = (data) => {
  return api.post("/organizations", data)
}

export const joinAsRestaurant = (data) => {
  return api.post("/restaurants", data)
}
