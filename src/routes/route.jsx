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
import OrganizationLayout from "../layout/OrganizationLayout";
import Organization from "../components/organization/Organization";
import OrgnizationDonations from "../pages/organization/donations/OrgnizationDonations";

import DonateNow from "../pages/Donate/DonateNow";
import RestaurantHome from "../pages/view_restaurants/RestaurantHome";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<HomeRestaurant />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/restaurantHome" element={<RestaurantHome />} />
      <Route
        path="/event"
        element={<Event title="Event" location="Pune, Maharashtra" />}
      />
      <Route path="/donate" element={<DonateNow />} />

      <Route path="/restaurant" element={<RestaurantLayout />}>
        <Route path="" index element={<Items />} />
        <Route path="items/:id" index element={<SingleItem />} />
        <Route path="donations" index element={<Donations />} />
        <Route path="orders" index element={<Order />} />
      </Route>

      <Route path="organizationlayout" element={<OrganizationLayout />} />
      <Route path="organizationdonation" element={<OrgnizationDonations />} />
      <Route path="organization" element={<Organization />}></Route>
    </Route>
  )
);
