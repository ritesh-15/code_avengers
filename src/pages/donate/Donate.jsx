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
} from "@chakra-ui/react";

const Donate = () => {
  return (
    <Box p={5}>
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
        <Input variant="filled" placeholder="Enter location" mt={2} />
      </Stack>
      <Stack spacing={4} mt={4}>
        <Text>Food Item</Text>
        <Input variant="filled" placeholder="Enter Food Item" mt={2} />
      </Stack>
      <Stack spacing={4} mt={4}>
        <Text>Quantity</Text>
        <Input variant="filled" placeholder="Enter Quantity" mt={2} />
      </Stack>
      <Center w={"100%"} mt={20}>
        <Button colorScheme="messenger" w={"100%"}>
          Donate
        </Button>
      </Center>
    </Box>
  );
};

export default Donate;
