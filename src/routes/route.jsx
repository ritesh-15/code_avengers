import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import RestaurantLayout from "../layout/RestaurantLayout"
import Login from "../pages/auth/login/Login"
import Register from "../pages/auth/register/Register"
import Donations from "../pages/restaurant/donations/Donations"
import Items from "../pages/restaurant/items/Items"
import SingleItem from "../pages/restaurant/item[id]/SingleItem"
import Order from "../pages/restaurant/orders/Order"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/">
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
      </Route>

      <Route path="/restaurant" element={<RestaurantLayout />}>
        <Route path="" index element={<Items />} />
        <Route path="items/:id" index element={<SingleItem />} />
        <Route path="donations" index element={<Donations />} />
        <Route path="orders" index element={<Order />} />
      </Route>
    </Route>
  )
)
