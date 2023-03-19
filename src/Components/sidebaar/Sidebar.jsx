import React from "react"
import "./Sidebar.css"
import { RxDashboard } from "react-icons/rx"
import { BsCalendar4Event, BsChat } from "react-icons/bs"
import { BiDonateHeart } from "react-icons/bi"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar__heading">Donorify</h1>

      <ul className="sidebar__list">
        <li className="active">
          <RxDashboard className="sidebara__list__icon" />
          <span>Dashbord</span>
        </li>
        <li className="">
          <BsCalendar4Event className="sidebara__list__icon" />
          <span>Events</span>
        </li>
        <li className="">
          <BiDonateHeart className="sidebara__list__icon" />
          <span>Donations</span>
        </li>
        <li className="">
          <BsChat className="sidebara__list__icon" />
          <span>Chats</span>
        </li>
      </ul>
    </aside>
  )
}
