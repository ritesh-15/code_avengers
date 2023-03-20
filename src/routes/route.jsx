import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import OrganizationLayout from "../layout/OrganizationLayout";
import RestaurantLayout from "../layout/RestaurantLayout";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import OrgnizationDonations from "../pages/organization/donations/OrgnizationDonations";
import Donations from "../pages/restaurant/donations/Donations";
import Items from "../pages/restaurant/items/Items";
import SingleItem from "../pages/restaurant/item[id]/SingleItem";
import Order from "../pages/restaurant/orders/Order";
import DonateNow from "../pages/Donate/DonateNow";
import UserProfile from "../pages/auth/Profile/UserProfile";
import EditProfile from "../pages/auth/Profile/EditProfile";
import PaymentHistory from "../pages/history/PaymentHistory";
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
        path="/donate"
        element={
          <>
            <Protected>
              <DonateNow />
            </>
          }
        />
      </Route>

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
