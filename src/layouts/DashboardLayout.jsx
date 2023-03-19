import React from "react"
import { Outlet } from "react-router"
import Sidebar from "../components/sidebaar/Sidebar"

export default function DashboardLayout() {
  return (
    <section className="min_h_screen flex">
      <Sidebar className="" />
      <main className="flex-1 w_full">
        <Outlet />
      </main>
    </section>
  )
}
