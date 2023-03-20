import React from "react";
import {
  Box,
  Card,
  Spacer,
  HStack,
  Text,
  Badge,
  Img,
  Center,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
const Restaurants = () => {
  return (
    <Box px={5} py={3}>
      <Center>
        <Card>
          <Img
            borderRadius={10}
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
            w="100vw"
          />
          <HStack m={4}>
            <Text fontWeight={"bold"}>The Tittle of Restaurant</Text>
            <Spacer />

            <Badge colorScheme="green">
              <HStack>
                <Text>3.4</Text>
                <AiFillStar />
              </HStack>
            </Badge>
          </HStack>

          <HStack mx={3} mb={3}>
            <Text fontSize={15}>pizza, Italian</Text>
            <Spacer />
            <Text fontSize={15}>Rs 150 for one</Text>
          </HStack>
        </Card>
      </Center>
    </Box>
  );
};

export default Restaurants;
