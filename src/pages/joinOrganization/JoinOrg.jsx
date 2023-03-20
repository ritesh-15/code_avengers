import React from "react"
import { Link } from "react-router-dom"
import { Select } from '@chakra-ui/react'
import "./JoinOrg.css";

export default function joinOrg() {
  return (
    <section className="flex justify-center w-[95%] mx-auto items-center min-h-screen">
      <div className="w-full md:max-w-[550px]">
        <div className="mb-4">
        <h1 className="text-2xl font-bold">Join with us as a organization</h1>
          <p className="text-lg mt-2 font-light">We make a living by what we get, but we make a life by what we give 👋</p>

          {/* <p className="text-sm">Let's get started by signing up</p> */}
        </div>

        <form className="flex flex-col gap-4" action="">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Name
            </label>
            <input
              type="text"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Description about your organization
            </label>
            <input
              type="text"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Images of Organization
            </label>
            <input
              type="file"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>

            <Select placeholder='Select option'>
                <option value='option1'>Shelter</option>
                <option value='option2'>Orphnage</option>
                <option value='option3'>NGO's</option>
            </Select>


          <button className="bg-primary  text-white px-2 py-3 rounded-md">
           Join
          </button>
        </form>

        
    
      </div>
    </section>
  )
}
