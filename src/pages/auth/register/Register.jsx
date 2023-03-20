import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Heading, VStack, HStack, Center } from "@chakra-ui/layout";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

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

        <FormControl>
          <FormLabel mt="10px">First Name</FormLabel>
          <Input mb="1em" rounded="none" varient="filled" />

          <FormLabel mt="10px">Last Name</FormLabel>
          <Input mb="1em" rounded="none" varient="filled" />

          <FormLabel mt="10px">E-mail Address</FormLabel>
          <Input mb="1em" rounded="none" varient="filled" />

          <FormLabel mt="10px">Password</FormLabel>
          <Input mb="1em" rounded="none" varient="filled" type="password" />
        </FormControl>
      </VStack>
      <Button
        mt="20px"
        bgColor="#2176FF"
        rounded="none"
        color="white"
        w={["full", "full"]}
        alignSelf="end"
      >
        SignUp
      </Button>
      <Center>
        <HStack>
          <Text mt="20px">or</Text>
        </HStack>
      </Center>
      <Center>
        <HStack mt="20px">
          <Text>Already have an account? </Text>
          <Link to="/login" className="register_link">
            Login
          </Link>
        </HStack>
      </Center>
    </Box>
  )
}
