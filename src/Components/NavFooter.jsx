import React from "react";
import { VStack, HStack, Center, Text,Flex,Box } from "@chakra-ui/react";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { bottom } from "@popperjs/core";
const NavFooter = () => {
  return (
    <Flex position={"fixed"} bottom={0}>
      <Box p={4}>
        <VStack>
          <FaHome size={20} />
          <Text fontSize={13} mt={"4px"}>
            Home
          </Text>
        </VStack>
      </Box>

      <Box p={4}>
        <VStack>
          <FaSearch size={20} />
          <Text fontSize={13}>Search</Text>
        </VStack>
      </Box>
      <Box p={4}>
        <VStack>
          <TfiMenuAlt size={20} />
          <Text fontSize={13}>Donations</Text>
        </VStack>
      </Box>

      <Box p={4}>
        <VStack>
          <MdOutlineAccountCircle size={20} />
          <Text fontSize={13}>Profile</Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default NavFooter;
