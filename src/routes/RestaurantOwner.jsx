import React from "react"
import { Navigate } from "react-router"

export default function RestaurantOwner({ children }) {
  const user = useSelector((state) => state.user)
  return user.isRestaurant ? children : <Navigate to="/login" />
}
