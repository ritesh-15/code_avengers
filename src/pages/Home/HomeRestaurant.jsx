import React from 'react'
import { HStack, Spacer, Text } from '@chakra-ui/layout'
import {
  Menu,
  MenuButton,
  Box,
  Image,
  MenuItem
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import NavFooter from '../../Components/NavFooter';
import Header from '../../Components/Header';


const homeRestaurant = () => {
  return (
    <div>
      <Header />

      <Image src="src\assets\home2.avif" alt="img" p={5} />

      <Text align={"center"} fontStyle={"italic"}>
        Transforming leftovers into meals
      </Text>

      <Image src="src\assets\home3.avif" alt="img" p={5} />

      <Box bg="#605858" m={5} p={4} color="white" borderRadius={25}>
        <Text fontWeight={"bold"}>Donate to NGO</Text>
        <Text>One act of kindness at a time</Text>
      </Box>

      <Image src="src\assets\home4.avif" alt="img" p={5} />

      <Box bg="#605858" m={5} p={4} color="white" borderRadius={25} mb={20}>
        <Text fontWeight={"bold"}>Fertilize</Text>
        <Text>Growing better food, naturally</Text>
      </Box>

      <NavFooter />
    </div>
  );
}

export default homeRestaurant