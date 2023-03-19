import React from "react";
import { VStack, HStack, Center, Text } from "@chakra-ui/react";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
const NavFooter = () => {
  return (
    <HStack spacing={7} ml={5} mt={2}>
      <VStack>
        <FaHome size={20} />
        <Text fontSize={13} mt={"4px"}>
          Home
        </Text>
      </VStack>
      <VStack>
        <FaSearch size={20} />
        <Text fontSize={13}>Search</Text>
      </VStack>
      <VStack>
        <TfiMenuAlt size={20} />
        <Text fontSize={13}>Donations</Text>
      </VStack>
      <VStack mr={2}>
        <MdOutlineAccountCircle size={20} />
        <Text fontSize={13}>Profile</Text>
      </VStack>
    </HStack>
  );
};

export default NavFooter;
