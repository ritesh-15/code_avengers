import React from "react";
import { VStack, HStack, Center, Text,Flex,Box,Spacer } from "@chakra-ui/react";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
const NavFooter = () => {
  return (
    <Flex bottom={0} >
      <Spacer />

      <Box>
        <VStack>
          <FaHome size={20} />
          <Text fontSize={13} mt={"4px"}>
            Home
          </Text>
        </VStack>
      </Box>

      <Spacer />

      <Box>
        <VStack>
          <FaSearch size={20} />
          <Text fontSize={13}>Search</Text>
        </VStack>
      </Box>
      <Spacer />

      <Box>
        <VStack>
          <TfiMenuAlt size={20} />
          <Text fontSize={13}>Donations</Text>
        </VStack>
      </Box>

      <Spacer />

      <Box>
        <VStack>
          <MdOutlineAccountCircle size={20} />
          <Text fontSize={13}>Profile</Text>
        </VStack>
      </Box>
      <Spacer />
    </Flex>
  );
};

export default NavFooter;
