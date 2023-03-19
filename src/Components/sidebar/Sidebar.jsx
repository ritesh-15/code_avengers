import { NavLink } from "react-router-dom"
import { MdOutlineFastfood } from "react-icons/md"
import { BiDonateBlood } from "react-icons/bi"
import { BsClockHistory } from "react-icons/bs"

export default function Sidebar() {
  return (
    <aside className="min-h-screen p-4 flex-1 max-w-[300px]">
      <div className="">
        <h1 className="text-2xl font-semibold text-black">Donorify</h1>
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
            to="/restaurant/"
          >
            <MdOutlineFastfood />
            <span>Food Items</span>
          </NavLink>
        </li>

        <li className="list-none">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 bg-primary px-2 py-3 rounded-md text-white"
                : "flex items-center gap-2 bg-white px-2 py-3 rounded-md text-black hover:bg-[rgba(0,0,0,0.075)] transition-all"
            }
            to="/restaurant/donations/"
          >
            <BiDonateBlood />
            <span>Donations</span>
          </NavLink>
        </li>

        <li className="list-none">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 bg-primary px-2 py-3 rounded-md text-white"
                : "flex items-center gap-2 bg-white px-2 py-3 rounded-md text-black hover:bg-[rgba(0,0,0,0.075)] transition-all"
            }
            to="/restaurant/orders/"
          >
            <BsClockHistory />
            <span>Orders</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}
