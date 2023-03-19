import { Outlet } from "react-router-dom"
import Sidebar from "../components/sidebar/Sidebar"

export default function RestaurantLayout() {
  return (
    <section className="h-screen overflow-y-hidden flex bg-white">
      <Sidebar />
      <main className="w-[90%] mx-auto flex-1 overflow-y-auto min-h-screen">
        <Outlet />
      </main>
    </section>
  )
}
