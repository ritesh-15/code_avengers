import React, { useState } from "react"
import "./JoinRes.css"
import FormControl from "../../components/form_control/FormControl"
import { useFormik } from "formik"
import { JoinRestaurantSchema } from "../../validation/join_org_validation"
import axios from "axios"
import {
  joinAsRestaurant,
  register,
  updateUser,
} from "../../services/auth.service"
import { useMutation } from "react-query"
import { setJWT, setUser } from "../../app/slices/userSlice"

const initialValues = {
  name: "",
  email: "",
  password: "",
  description: "",
}

export default function JoinRestaurant() {
  // states
  const [image, setImage] = useState(null)

  // mutations
  const registerOraganizationMutation = useMutation(register)
  const joinRestaurantMutation = useMutation(joinAsRestaurant)
  const updateUserMutation = useMutation(({ id, data }) => {
    updateUser(id, data)
  })

  // hooks
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    validationSchema: JoinRestaurantSchema,
    onSubmit: async (values) => {
      const formData = new FormData()
      formData.append("file", image)
      formData.append("upload_preset", "jmx1hbwt")

      const [user, uploadedImage] = await Promise.all([
        registerOraganizationMutation.mutateAsync({
          email: values.email,
          password: values.password,
          name: values.name,
          username: values.name,
        }),

        axios.post(
          `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_CLOUD_NAME
          }/upload`,
          formData
        ),
      ])

      const restaurant = await joinRestaurantMutation.mutateAsync({
        data: {
          name: values.name,
          description: values.description,
          location: values.location,
          images: uploadedImage.data.secure_url,
        },
      })

      const updatedUser = await updateUserMutation.mutateAsync({
        id: user.data.user.id,
        data: {
          isRestaurant: true,
          restaurant: restaurant.data.data.id,
        },
      })

      dispatch(setUser(updatedUser))
      dispatch(setJWT(user.data.jwt))

      const { isOrganization, isRestaurant } = user.data.user

      if (isOrganization) return navigate("/orgniztion")
      if (isRestaurant) return navigate("/restaurant")

      toast({
        title: "Restaurant created successfully!",
        description: "Successfully created restaurant",
        status: "success",
        duration: 4000,
        isClosable: true,
      })
    },
  })

  function handleImageSet(e) {
    const files = e.target.files
    setImage(files[0])
  }

  return (
    <section className="flex justify-center w-[95%] mx-auto items-center min-h-screen">
      <div className="w-full md:max-w-[550px]">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">
            Save your food with us, Join us as a Restaurant
          </h1>
          <p className="text-lg mt-2 font-light">Come hungry, leave happy.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormControl
              onChange={handleChange}
              label="Name"
              error={errors.name}
              value={values.name}
              type="text"
              name="name"
            />

            <FormControl
              onChange={handleChange}
              label="Email address"
              error={errors.email}
              value={values.email}
              type="email"
              name="email"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormControl
              onChange={handleChange}
              label="Password"
              error={errors.password}
              value={values.password}
              type="password"
              name="password"
            />

            <FormControl
              onChange={handleChange}
              label="Location"
              error={errors.location}
              value={values.location}
              type="text"
              name="location"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Description
            </label>
            <textarea
              onChange={handleChange}
              value={values.description}
              rows="3"
              name="description"
              className="bg-gray-100 resize-none outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Images of restaurant
            </label>
            <input
              onChange={handleImageSet}
              type="file"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>

          <button
            onClick={handleSubmit}
            type="button"
            className="bg-primary  text-white px-2 py-3 rounded-md"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  )
}
