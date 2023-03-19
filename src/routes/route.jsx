import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Event from "../event/Event";
import HomeRestaurant from "../pages/Home/HomeRestaurant";
import RestaurantLayout from "../layout/RestaurantLayout";
import Donations from "../pages/restaurant/donations/Donations";
import Items from "../pages/restaurant/items/Items";
import SingleItem from "../pages/restaurant/item[id]/SingleItem";
import Order from "../pages/restaurant/orders/Order";

export const router = createBrowserRouter(
  createRoutesFromElements(
 

    <Route path="/">
      <Route path="/" element={<HomeRestaurant />}></Route>
      <Route
        path="/event"
        element={<Event title="Event" location="Baramati, Pune, Maharashtra" />}
      />
       <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      <Route path="/restaurant" element={<RestaurantLayout />}>
        <Route path="" index element={<Items />} />
        <Route path="items/:id" index element={<SingleItem />} />
        <Route path="donations" index element={<Donations />} />
        <Route path="orders" index element={<Order />} /> 
       </Route>
    </Route>
  )
);
