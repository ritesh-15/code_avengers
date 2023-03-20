<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import "./JoinOrg.css";
=======
import React, { useState } from "react"
import { Select, useToast } from "@chakra-ui/react"
import "./JoinOrg.css"
import { useNavigate } from "react-router"
import { useFormik } from "formik"
import { JoinOrganizationSchema } from "../../validation/join_org_validation"
import FormControl from "../../components/form_control/FormControl"
import { useMutation } from "react-query"
import {
  joinAsOrganization,
  register,
  updateUser,
} from "../../services/auth.service"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUser, setJWT } from "../../app/slices/userSlice"

export default function JoinOrganization() {
  const toast = useToast()
  const navigate = useNavigate()

  const [image, setImage] = useState(null)
  const [type, setType] = useState("")
  const dispatch = useDispatch()

  const registerOraganizationMutation = useMutation(register)
  const updateUserMutation = useMutation(({ id, data }) => {
    updateUser(id, data)
  })
  const joinOrganizationMutation = useMutation(joinAsOrganization)

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      description: "",
      location: "",
    },

    validationSchema: JoinOrganizationSchema,
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

      const organization = await joinOrganizationMutation.mutateAsync({
        data: {
          name: values.name,
          description: values.description,
          image: uploadedImage.data.secure_url,
          type: type,
        },
      })

      const updatedUser = await updateUserMutation.mutateAsync({
        id: user.data.user.id,
        data: {
          isOrganization: true,
          organization: organization.data.data.id,
        },
      })

      dispatch(setUser(updatedUser))
      dispatch(setJWT(user.data.jwt))

      toast({
        title: "Organization created successfully!",
        description: "Successfully created organization",
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
>>>>>>> e1ad15ceaadf572dd9934e5b359bea7c1e9ed2ba

  return (
    <section className="flex justify-center w-[95%] mx-auto items-center min-h-screen">
<<<<<<< HEAD
      <div className="w-full md:max-w-[550px]">
        <div className="mb-4">
=======
      <div className="w-full md:max-w-[750px]">
        <div className="mb-8">
>>>>>>> e1ad15ceaadf572dd9934e5b359bea7c1e9ed2ba
          <h1 className="text-2xl font-bold">Join with us as a organization</h1>
          <p className="text-lg mt-2 font-light">
            We make a living by what we get, but we make a life by what we give
            👋
          </p>
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
              Images of Organization
            </label>
            <input
              onChange={handleImageSet}
              type="file"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>

<<<<<<< HEAD
          <Select placeholder="Select option">
            <option value="option1">Shelter</option>
            <option value="option2">Orphnage</option>
            <option value="option3">NGO's</option>
          </Select>

          <button className="bg-primary  text-white px-2 py-3 rounded-md">
=======
          <Select
            onChange={(e) => {
              console.log(e.target.value)
              setType(e.target.value)
            }}
            value={type}
            name="type"
            placeholder="Select organization type"
            cursor="pointer"
          >
            <option value="Shelter">Shelter</option>
            <option value="Orphanage">Orphanage</option>
            <option value="NGO">NGO</option>
          </Select>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-primary text-white px-2 py-3 rounded-md"
          >
>>>>>>> e1ad15ceaadf572dd9934e5b359bea7c1e9ed2ba
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
