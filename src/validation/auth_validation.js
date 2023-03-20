import * as y from "yup"

export const LoginSchema = y.object({
  email: y.string().email("Must be a valid email address!").required(),
  password: y
    .string()
    .min(6, "Password length must be greater than 6")
    .required(),
})

export const RegisterSchema = y.object({
  name: y.string().required(),
  email: y.string().email("Must be a valid email address!").required(),
  password: y
    .string()
    .min(6, "Password length must be greater than 6")
    .required(),
})
