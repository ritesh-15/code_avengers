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
import JoinOrg from "../pages/joinOrganization/JoinOrg";
import JoinRes from "../pages/joinRestaurant/JoinRes";
import HomeRestaurant from "../pages/Home/HomeRestaurant";
import RestaurantHome from "../pages/view_restaurants/RestaurantHome";
import Cart from '../pages/cart/Cart'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/">
        <Route
          index
          path=""
          element={
            <>
              <HomeRestaurant />
            </>
          }
        />
        <Route path="/cart" element={<Cart/>}/>
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/restaurantHome"
          element={
            <>
              <RestaurantHome />
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
        <Route
          path="/donate"
          element={
            <>
              <DonateNow />
            </>
          }
        />
        <Route
          path="/join_org"
          element={
            <>
              <JoinOrg />
            </>
          }
        />

        <Route
          path="/join_res"
          element={
            <>
              <JoinRes />
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

      <Route path="organizationlayout" element={<OrganizationLayout />} />
      <Route path="organizationdonation" element={<OrgnizationDonations />} />
      {/* <Route path="organization" element={<Organization />}></Route> */}
    </Route>
  )
);
