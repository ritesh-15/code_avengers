import React from "react";
import RestaurantProduct from "./RestaurantProduct";
import {
  Box,
  Image,
  Text,
  Stack,
  Divider,
  HStack,
  Circle,
  Button,
  Center,
} from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { AiOutlineLeft } from "react-icons/ai";

const RestaurantHome = () => {
  return (
    <>
      <Box>
        <Circle
          cursor="pointer"
          size="26px"
          color="black"
          m={5}
          position="absolute"
          bg="grey"
        >
          <AiOutlineLeft />
        </Circle>
        <Image
          src="src\assets\restaurantImage.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          className="w-full md:w-[350px] object-contain"
        />
      </Box>

      <Box p={4}>
        <Stack>
          <Text fontWeight="bold" fontSize={20}>
            Sai Restaurant
          </Text>
          <p className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            unde?
          </p>
          <HStack>
            <GrLocation />
            <p className="text-sm">Jaipur, Rajasthan</p>
          </HStack>
        </Stack>
        <Divider mt={2} borderWidth={1} />
        <Stack mt={5}>
          <Text fontWeight="bold">Products</Text>
          <RestaurantProduct />
          <RestaurantProduct />
          <RestaurantProduct />
          <RestaurantProduct />
        </Stack>
      </Box>
      <Center my="2">
        <Button>continue purchase</Button>
      </Center>
    </>
  );
};

export default RestaurantHome;
