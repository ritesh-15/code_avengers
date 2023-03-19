import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Login from "../pages/auth/login/Login"
import Register from "../pages/auth/register/Register"
import Home from '../Components/Home'
import Event  from "../event/Event"
import HomeRestaurant from "../pages/Home/HomeRestaurant"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<HomeRestaurant/>}>
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
          path="/event"
          element={
            <Event title='Event' location='Baramati, Pune, Maharashtra'/>
          }
        />
    </Route>
  )
)
