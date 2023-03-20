import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  ButtonGroup,
  Input,
  Stack,
  Center,
  HStack,
  Circle,
} from "@chakra-ui/react";

import { AiOutlineLeft } from "react-icons/ai";

const DonateNow = () => {
  return (
    <Box p={5}>
      <HStack>
        <Circle size="40px" bg="#d5dbdb" color="black" m={5}>
          <AiOutlineLeft />
        </Circle>
        <Text fontSize={25}>Donate Now</Text>
      </HStack>
      <Image
        src="src\assets\donateNowImage.jpg"
        alt="Green double couch with wooden legs"
        borderRadius="lg"
      />
      <Heading>
        Help us clothe and nourish those in need, donate food and clothes today
      </Heading>
      <Text mt={4}>What do you want to donate?</Text>
      <ButtonGroup gap="4" mt={5}>
        <Button colorScheme="messenger">Food</Button>
        <Button colorScheme="messenger" variant={"outline"}>
          Clothes
        </Button>
      </ButtonGroup>
      <Stack spacing={4} mt={4}>
        <Text>where to pick up ?</Text>
        <Input
          variant="filled"
          placeholder="Enter location"
          mt={2}
          maxW={"xs"}
        />
      </Stack>
      <Stack spacing={4} mt={4}>
        <Text>Food Item</Text>
        <Input
          variant="filled"
          placeholder="Enter Food Item"
          mt={2}
          maxW={"xs"}
        />
      </Stack>
      <Stack spacing={4} mt={4}>
        <Text>Quantity</Text>
        <Input
          variant="filled"
          placeholder="Enter Quantity"
          mt={2}
          maxW={"xs"}
        />
      </Stack>
      <Center w={"100%"} mt={20}>
        <Button colorScheme="messenger" w={"100%"} maxW={"xs"}>
          Donate
        </Button>
      </Center>
    </Box>
  );
};

export default DonateNow;
