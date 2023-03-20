import { Link, NavLink } from "react-router-dom"
import { MdOutlineFastfood } from "react-icons/md"
import { BiDonateBlood } from "react-icons/bi"
import { BsClockHistory } from "react-icons/bs"

export default function OrganizationSidebar() {
  return (
    <aside className="min-h-screen p-4 flex-1 max-w-[300px]">
      <div className="">
        <Link to="/restaurant">
          <h1 className="text-2xl font-semibold text-black">Donorify</h1>
        </Link>
        <p className="text-sm">Transform leftover into means</p>
      </div>

      <ul className="flex flex-col mt-8 gap-4">
        <li className="list-none">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 bg-primary px-2 py-3 rounded-md text-white"
                : "flex items-center gap-2 bg-white px-2 py-3 rounded-md text-black"
            }
            to="/organization/"
          >
            <MdOutlineFastfood />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li className="list-none">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 bg-primary px-2 py-3 rounded-md text-white"
                : "flex items-center gap-2 bg-white px-2 py-3 rounded-md text-black hover:bg-[rgba(0,0,0,0.075)] transition-all"
            }
            to="/organization/donations"
          >
            <BiDonateBlood />
            <span>Donations</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}
