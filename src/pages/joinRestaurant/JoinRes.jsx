import React from "react";
import { useToast } from "@chakra-ui/toast";
import { Link } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import "./JoinRes.css";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { register } from "../../services/auth.service";

export default function joinRes() {
  const toast = useToast();
  const { handleSubmit, values, errors } = useFormik({
    initialValues: {
      name: "",
      location: "",
      description: "",
    },
    validationSchema: JoinResSchema,
    onSubmit: (values) =>
      MdAppRegistration.mutat({
        ...values,
        username: values.name,
      }),
  });

  const addResMutation = useMutation(addRestaurant, {
    onSuccess: (value) => {
      //store the jwt token
      localStorage.setItem("jwt_token", value.data.jwt);
      user;

      toast({
        title: "Restaurant Added.",
        description: "We've added your restaurant successfully.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    },
  });
  return (
    <section className="flex justify-center w-[95%] mx-auto items-center min-h-screen">
      <div className="w-full md:max-w-[550px]">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">
            Save your food with us, Join us as a Restaurant
          </h1>
          <p className="text-lg mt-2 font-light">Come hungry, leave happy.</p>
          {/* <p className="text-sm">Let's get started by signing up</p> */}
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
            label="Name"
            error={errors.location}
            value={values.location}
            name="name"
          />

          <FormControl
            onChange={handleChange}
            label="Name"
            error={errors.description}
            value={values.description}
            name="name"
          />

          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Images of Restaurant
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={ImageChange}
              required
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>

          <button className="bg-primary  text-white px-2 py-3 rounded-md">
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
