import React from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  HStack,
  Heading,
  Card,
  Button,
  Badge,
  Spacer,
} from "@chakra-ui/react";
          import { BiCartAdd } from "react-icons/bi";


const RestaurantProduct = ({
  title,
  description,
  qunatity,
  price,
  image,
  discount,
  type,
}) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={image}
        alt="Caffe Latte"
        height="250px"
      />

      <Stack>
        <Box px={4} py={2}>
          <Heading size="md">{title}</Heading>
          <p className="text-md mt-2 inline-block">{description}</p>
        </Box>
        <HStack padding={2}>
          <BiCartAdd size={25} />
          <Spacer />
          <Badge
            colorScheme="green"
            maxWidth={"fit-content"}
            justifySelf="flex-end"
            ml={20}
          >
            {type}
          </Badge>
        </HStack>
      </Stack>
    </Card>
  );
};

export default RestaurantProduct;
