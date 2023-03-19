import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import UserProfile from "../pages/profile/UserProfile";

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
        <Route
          path="/userProfile"
          element={
            <>
              <UserProfile />
            </>
          }
        />
      </Route>
    </Route>
  )
);
