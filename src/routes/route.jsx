import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import DashboardLayout from "../layouts/DashboardLayout"
import Dashboard from "../pages/admin/dashboard/Dashboard"
import Login from "../pages/auth/login/Login"
import Register from "../pages/auth/register/Register"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/">
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<DashboardLayout />} path="/admin">
        <Route path="" index element={<Dashboard />} />
      </Route>
    </Route>
  )
)
