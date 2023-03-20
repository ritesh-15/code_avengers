import { Outlet } from "react-router-dom"
import OrganizationSidebar from "../components/organization_sidebar/OrganizationSidebar"

export default function OrganizationLayout() {
  return (
    <section className="h-screen overflow-y-hidden flex bg-white">
      <OrganizationSidebar />
      <main className="w-[90%] mx-auto flex-1 overflow-y-auto min-h-screen">
        <Outlet />
      </main>
    </section>
  )
}
