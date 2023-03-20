import React from "react";
import {
  Box,
  Image,
  Circle,
  Stack,
  HStack,
  Heading,
  Card,
  Button,
  Badge,
  Spacer,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/slices/cartSlice";
import { BiCartAdd } from "react-icons/bi";
const RestaurantProduct = () => {
  const dispatch=useDispatch()

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <Box px={4} py={2}>
          <Heading size="md">The perfect latte</Heading>
          <p className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            unde?
          </p>
        </Box>
        <HStack padding={2}>
          <Circle onClick={()=>{dispatch(addToCart({
            id,name,description,quantity,price,discount,image
          }))}}>
            <BiCartAdd size={25} />
          </Circle>

          <Spacer />
          <Badge
            colorScheme="green"
            maxWidth={"fit-content"}
            justifySelf="flex-end"
            ml={20}
          >
            Veg
          </Badge>
        </HStack>
      </Stack>
    </Card>
  );
};

export default RestaurantProduct;
