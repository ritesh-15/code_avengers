import React from "react"
import { Link } from "react-router-dom"
import { Box, Text, Heading, VStack, HStack, Center } from "@chakra-ui/layout"
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"
import "./Login.css"

export default function Login() {
  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[10, "10vh"]}
      mx="auto"
      border={["none", "10px"]}
      borderColor={["", "grey"]}
      borderRadius={10}
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full" mb="3">
          <Heading>Login</Heading>
        </VStack>

        <FormControl>
          <FormLabel mt="20px">E-mail Address</FormLabel>
          <Input mb="1em" rounded="none" varient="filled" />

          <FormLabel>Password</FormLabel>
          <Input mb="1em" rounded="none" varient="filled" type="password" />
        </FormControl>
      </VStack>
      <Button
        bgColor="#2176FF"
        rounded="none"
        color="white"
        w={["full", "full"]}
        mt="20px"
        alignSelf="end"
      >
        Login
      </Button>
      <Center>
        <HStack>
          <Text mt="20px">or</Text>
        </HStack>
      </Center>
      <Center>
        <HStack mt="20px">
          <Text>Don't have a account? </Text>
          <Link to="/register" className="register_link">
            Register
          </Link>
        </HStack>
      </Center>
    </Box>
  )
}
