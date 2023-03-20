import React from "react";
import axios from "axios";
import {
  CardBody,
  Stack,
  Heading,
  Image,
  Card,
  Text,
  Center,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import RestaurantHome from "../view_restaurants/RestaurantHome";
import { Link } from "react-router-dom";

const Hotel = (props) => {
  return (
      <Center>
          {/* <Link to={<RestaurantHome  />}/> */}
        <Card maxW="sm" m={4}>
          <CardBody>
            <Image
              src={props.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <HStack>
                <Heading size="md">{props.title}</Heading>
                <Spacer />
                <GoLocation color="grey" />
                <Text color={"grey"}>{props.location}</Text>
              </HStack>
              <Text>{props.description}</Text>
            </Stack>
          </CardBody>
        </Card>
      </Center>
  );
};

export default Hotel;
