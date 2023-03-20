import React from "react";
import Restaurants from "./Restaurants";
import { HStack, Circle, Text } from "@chakra-ui/react";
import { AiFillStar, AiOutlineLeft } from "react-icons/ai";

const RestaurantsPage = () => {
  return (
    <div>
      <HStack>
        <Circle cursor="pointer" size="26px" bg="#d5dbdb" color="black" m={5}>
          <AiOutlineLeft />
        </Circle>
        <Text fontSize={18}>Restaurants</Text>
      </HStack>
      <Restaurants />
      <Restaurants />
      <Restaurants />
      <Restaurants />
    </div>
  );
};

export default RestaurantsPage;
