import React from "react"
import "./Sidebar.css"
import { RxDashboard } from "react-icons/rx"
import { BsCalendar4Event, BsChat } from "react-icons/bs"
import { BiDonateHeart } from "react-icons/bi"
import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar__heading">Donorify</h1>

      <ul className="sidebar__list">
        <li>
          <NavLink
            to="/admin/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <RxDashboard className="sidebara__list__icon" />
            <span>Dashbord</span>
          </NavLink>
        </li>

        <li className="">
          <NavLink
            to="/admin/event"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <BsCalendar4Event className="sidebara__list__icon" />
            <span>Events</span>
          </NavLink>
        </li>

        <li className="">
          <NavLink
            to="/admin/donations"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <BiDonateHeart className="sidebara__list__icon" />
            <span>Donations</span>
          </NavLink>
        </li>

        <li className="">
          <NavLink
            to="/admin/chats"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <BsChat className="sidebara__list__icon" />
            <span>Chats</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}
