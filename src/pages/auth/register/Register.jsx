import React from "react"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <section className="flex justify-center w-[95%] mx-auto items-center min-h-screen">
      <div className="w-full md:max-w-[550px]">
        <div className="mb-4">
          <h1 className="text-xl  font-bold ">Hey, Hello 👋</h1>
          <p className="text-sm">Let's get started by signing up</p>
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
              Email address
            </label>
            <input
              type="text"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Password
            </label>
            <input
              type="password"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>

          <button className="bg-primary  text-white px-2 py-3 rounded-md">
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-center mt-4 text-sm gap-2">
          <p>Already have an account?</p>
          <Link to="/login" className="text-primary cursor-pointer">
            Login
          </Link>
        </div>

        <span className="justify-center my-6 flex items-center font-light">
          or
        </span>

        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <a
            href=""
            className="bg-white w-full  text-center text-primary border border-primary px-2 py-3 rounded-md"
          >
            Join as organization
          </a>

          <a
            href=""
            className="bg-white w-full  text-center text-primary border border-primary px-2 py-3 rounded-md"
          >
            Join as restaurant
          </a>
        </div>
      </div>
    </section>
  )
}
