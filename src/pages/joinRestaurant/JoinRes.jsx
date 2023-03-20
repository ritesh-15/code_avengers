import React from "react"
import { Link } from "react-router-dom"
import { Select } from '@chakra-ui/react'
import "./JoinRes.css";

export default function joinRes() {
  return (
    <section className="flex justify-center w-[95%] mx-auto items-center min-h-screen">
      <div className="w-full md:max-w-[550px]">
        <div className="mb-4">
            <h1 className="text-2xl font-bold">Save your food with us, Join us as a Restaurant</h1>
          <p className="text-lg mt-2 font-light">Come hungry, leave happy.</p>
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
              Location 
            </label>
            <input
              type="text"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Description about your Restaurant
            </label>
            <input
              type="text"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Images of Restaurant
            </label>
            <input
              type="file"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>


          <button className="bg-primary  text-white px-2 py-3 rounded-md">
           Join
          </button>
        </form>

        
    
      </div>
    </section>
  )
}
