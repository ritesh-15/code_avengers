import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Home from "../Components/Home";
import Donate from "../pages/donate/Donate";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Home />}>
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
      <Route
        path="/donate"
        element={
          <>
            <Donate />
          </>
        }
      />
    </Route>
  )
);
