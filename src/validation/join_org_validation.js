import * as y from "yup"

export const JoinOrganizationSchema = y.object({
  name: y.string().required(),
  description: y.string().required(),
  password: y.string().min(6).required(),
  email: y.string().email("email must be valid").required(),
  location: y.string().required(),
})

export const JoinRestaurantSchema = y.object({
  name: y.string().required(),
  description: y.string().required(),
  password: y.string().min(6).required(),
  email: y.string().email("email must be valid").required(),
  location: y.string().required(),
})
