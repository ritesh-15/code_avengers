import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import HomeRestaurant from "../pages/Home/HomeRestaurant";
import RestaurantLayout from "../layout/RestaurantLayout";
import Donations from "../pages/restaurant/donations/Donations";
import Items from "../pages/restaurant/items/Items";
import SingleItem from "../pages/restaurant/item[id]/SingleItem";
import Order from "../pages/restaurant/orders/Order";
import OrganizationLayout from "../layout/OrganizationLayout";
import Protected from "./Protected";
import OrgnizationDonations from "../pages/organization/donations/OrgnizationDonations";

import DonateNow from "../pages/Donate/DonateNow";
import RestaurantOwner from "./RestaurantOwner";
import OrganizationOwner from "./OrganizationOwner";
import RestaurantHome from "../pages/view_restaurants/RestaurantHome";
import Restaurants from "../pages/view_restaurants/Restaurants";
import RestaurantsPage from "../pages/view_restaurants/RestaurantsPage";
import ProductSummary from "../pages/cart/ProductSummary";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        path="/"
        element={
          <>
            <Protected>
              <ProductSummary />
            </Protected>
          </>
        }
      />

      <Route
        path="/login"
        element={
          <>
            <Protected isAuthRoute>
              <Login />
            </Protected>
          </>
        }
      />

      <Route
        path="/register"
        element={
          <>
            <Protected isAuthRoute>
              <Register />
            </Protected>
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Protected isAuthRoute>
              <Register />
            </Protected>
          </>
        }
      />

      <Route
        path="/donate"
        element={
          <>
            <Protected>
              <DonateNow />
            </Protected>
          </>
        }
      />
      <Route
        path="/restaurantHome"
        element={
          <>
            <Protected isAuthRoute>
              <RestaurantHome />
            </Protected>
          </>
        }
      />

      <Route
        path="/restaurant"
        element={
          <>
            <RestaurantOwner>
              <RestaurantLayout />
            </RestaurantOwner>
          </>
        }
      >
        <Route path="" index element={<Items />} />
        <Route path="items/:id" index element={<SingleItem />} />
        <Route path="donations" index element={<Donations />} />
        <Route path="orders" index element={<Order />} />
      </Route>

      <Route
        path="/organization"
        element={
          <>
            <OrganizationOwner>
              <OrganizationLayout />
            </OrganizationOwner>
          </>
        }
      >
        <Route path="donations" element={<OrgnizationDonations />} />
      </Route>
    </Route>
  )
);
