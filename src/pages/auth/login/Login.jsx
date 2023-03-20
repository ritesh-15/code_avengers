import { Button } from "@chakra-ui/button"
import { defineStyleConfig } from "@chakra-ui/styled-system"
import React from "react"
import { Link } from "react-router-dom"
import "./Login.css"

const buttonTheme = defineStyleConfig({
  defaultProps: {
    size: "lg",
    variant: "outline",
    colorScheme: "brand",
  },
})

export default function Login() {
  return (
    <section className="flex justify-center w-[95%] mx-auto items-center min-h-screen">
      <div className="w-full md:max-w-[550px]">
        <div className="mb-4">
          <h1 className="text-xl  font-bold ">Hey, Hello 👋</h1>
          <p className="text-sm">Let's get started by signing you in</p>
        </div>

        <form className="flex flex-col gap-4" action="">
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
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-center mt-4 text-sm gap-2">
          <p>Dosn't have account yet?</p>
          <Link to="/register" className="text-primary cursor-pointer">
            Register
          </Link>
        </div>
      </div>
    </section>
  )
}
