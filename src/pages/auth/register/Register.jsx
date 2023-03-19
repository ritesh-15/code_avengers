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
import "./Register.css";

export default function Register() {
  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[10, "10vh"]}
      mx="auto"
      border={["none", "10px"]}
      borderColor={["", "grey"]}
      borederRadius={10}
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full" mb="3">
          <Heading className="Heading_create_acc">Create a new account</Heading>
        </VStack>

        <FormControl>
          <FormLabel mt="20px">First Name</FormLabel>
          <Input bgColor="lightgray" rounded="none" varient="filled" />

          <FormLabel mt="20px">Last Name</FormLabel>
          <Input bgColor="lightgray" rounded="none" varient="filled" />

          <FormLabel mt="20px">Phone</FormLabel>
          <Input
            bgColor="lightgray"
            rounded="none"
            type="number"
            varient="filled"
          />

          <FormLabel mt="20px">E-mail Address</FormLabel>
          <Input
            bgColor="lightgray"
            rounded="none"
            type="email"
            varient="filled"
          />

          <FormLabel mt="20px">Password</FormLabel>
          <Input
            bgColor="lightgray"
            rounded="none"
            varient="filled"
            type="password"
          />
        </FormControl>
      </VStack>
      <Button
        className="signup_btn"
        mt="20px"
        bgColor="#2176FF"
        rounded="none"
        color="white"
        w={["full", "full"]}
        alignSelf="end"
      >
        Create account
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
  );
}
