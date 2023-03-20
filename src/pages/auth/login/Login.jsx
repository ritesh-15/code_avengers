import { useToast } from "@chakra-ui/toast";
import { useFormik } from "formik";
import React from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../../app/slices/userSlice";
import FormControl from "../../../components/form_control/FormControl";
import { login } from "../../../services/auth.service";
import { LoginSchema } from "../../../validation/auth_validation";
import "./Login.css";

export default function Login() {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) =>
      loginMutation.mutate({
        identifier: values.email,
        ...values,
      }),
  });

  const loginMutation = useMutation(login, {
    onSuccess: (payload) => {
      // store the jwt token
      localStorage.setItem("jwt_token", payload.data.jwt);

      // store the current logged in user
      dispatch(setUser(payload.data.user));

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      const { isOrganization, isRestaurant } = payload.data.user;

      if (isOrganization) return navigate("/orgniztion");
      if (isRestaurant) return navigate("/restaurant");

      navigate("/");
    },
    onError: (e) => {
      toast({
        title: "Something went wrong!",
        description: e.response.data.error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    },
  });

  return (
    <section className="flex justify-center w-[95%] mx-auto items-center min-h-screen">
      <div className="w-full md:max-w-[550px]">
        <div className="mb-4">
          <h1 className="text-xl  font-bold ">Hey, Hello 👋</h1>
          <p className="text-sm">Let's get started by signing you in</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
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

          <button
            type="submit"
            className="bg-primary  text-white px-2 py-3 rounded-md"
          >
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
  );
}
