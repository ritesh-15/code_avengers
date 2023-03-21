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
import UserProfile from "../pages/auth/Profile/UserProfile";
import OrderHistory from "../pages/history/OrderHistory";
import DonationHistory from "../pages/history/DonationHistory";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        path="/"
        element={
          <>
            <Protected>
              <HomeRestaurant />
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
        path="/userProfile"
        element={
          <>
            <Protected>
              <UserProfile />
            </Protected>
          </>
        }
      />
      <Route
        path="/payment_history/:id"
        element={
          <>
            <Protected>
              <OrderHistory />
            </Protected>
          </>
        }
      />
      <Route
        path="/donation_history/:id"
        element={
          <>
            <Protected>
              <DonationHistory />
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
        path="/restauranthome/:id"
        element={
          <>
            <Protected>
              <RestaurantHome />
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
        path="/join-as-organization"
        element={
          <>
            <Protected isAuthRoute>
              <JoinOrganization />
            </Protected>
          </>
        }
      />

      <Route
        path="/join-as-restaurant"
        element={
          <>
            <Protected isAuthRoute>
              <JoinRestaurant />
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
