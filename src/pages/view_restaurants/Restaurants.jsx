import React from "react";
// import axios from "axios";
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
import { GrLocation } from "react-icons/gr";

const Restaurants = ({ props }) => {
  console.log("from props", props.name);
  return (
    <Box px={5} py={3}>
      <Center>
        <Card>
          {/* <Img
            borderRadius={10}
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src={pro     ps.image}
            alt="Caffe Latte"
            w="100vw"
          /> */}
          <HStack m={4}>
            <Text fontWeight={"bold"}>{props.name}</Text>
            <Spacer />
            <Badge colorScheme="green">
              <HStack>
                <Text>3.4</Text>
                <AiFillStar />
              </HStack>
            </Badge>
          </HStack>

          <HStack mx={3} mb={3}>
            <Text fontSize={15}>{props.description}</Text>
            <Spacer />
            <HStack>
              <GrLocation />
              <p className="text-sm">{props.location}</p>
            </HStack>
          </HStack>
        </Card>
      </Center>
    </Box>
  );
};

export default Restaurants;
