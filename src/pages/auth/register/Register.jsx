import { useToast } from "@chakra-ui/toast"
import { useFormik } from "formik"
import React from "react"
import { useMutation } from "react-query"
import { Link } from "react-router-dom"
import FormControl from "../../../components/form_control/FormControl"
import { register } from "../../../services/auth.service"
import { RegisterSchema } from "../../../validation/auth_validation"
import { useDispatch } from "react-redux"
import { setUser } from "../../../app/slices/userSlice"

export default function Register() {
  const toast = useToast()
  const dispatch = useDispatch()

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) =>
      registerMutation.mutate({
        ...values,
        username: values.name,
      }),
  })

  const registerMutation = useMutation(register, {
    onSuccess: (value) => {
      // store the jwt token
      localStorage.setItem("jwt_token", value.data.jwt)

      // store the current logged in user
      dispatch(setUser(value.data.user))

      const { isOrganization, isRestaurant } = value.data.user

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      })

      if (isOrganization) return navigate("/organization")
      if (isRestaurant) return navigate("/restaurant")

      navigate("/")
    },
    onError: (e) => {
      toast({
        title: "Something went wrong!",
        description: e.response.data.error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      })
    },
  })

  return (
    <section className="flex justify-center w-[95%] mx-auto items-center min-h-screen">
      <div className="w-full md:max-w-[550px]">
        <div className="mb-4">
          <h1 className="text-xl  font-bold ">Hey, Hello 👋</h1>
          <p className="text-sm">Let's get started by signing up</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
          <FormControl
            onChange={handleChange}
            label="Name"
            error={errors.name}
            value={values.name}
            name="name"
          />

          <FormControl
            onChange={handleChange}
            label="Email address"
            error={errors.email}
            value={values.email}
            name="email"
          />

          <FormControl
            onChange={handleChange}
            label="Password"
            error={errors.password}
            value={values.password}
            type="password"
            name="password"
          />

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
          <Link
            to="/join-as-organization"
            className="bg-white w-full  text-center text-primary border border-primary px-2 py-3 rounded-md"
          >
            Join as organization
          </Link>

          <Link
            to="/join-as-restaurant"
            className="bg-white w-full  text-center text-primary border border-primary px-2 py-3 rounded-md"
          >
            Join as restaurant
          </Link>
        </div>
      </div>
    </section>
  )
}
