import React from "react";
<<<<<<< HEAD
import { VStack, Text, Flex, Box, Spacer } from "@chakra-ui/react";
=======
import { VStack, HStack, Center, Text,Flex,Box,Spacer } from "@chakra-ui/react";
>>>>>>> e1ad15ceaadf572dd9934e5b359bea7c1e9ed2ba
import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
const NavFooter = () => {
  return (
<<<<<<< HEAD
    <div style={{ backgroundColor: "red" }}>
      <Flex position={"fixed"} bottom={0}>
        <Spacer bg={"white"} />
        <Box p={4}>
          <VStack>
            <FaHome size={20} />
            <Text fontSize={13} mt={"4px"}>
              Home
            </Text>
          </VStack>
        </Box>
        <Spacer />
        <Box p={4}>
          <VStack>
            <FaSearch size={20} />
            <Text fontSize={13}>Search</Text>
          </VStack>
        </Box>
        <Spacer />
        <Box p={4}>
          <VStack>
            <TfiMenuAlt size={20} />
            <Text fontSize={13}>Donations</Text>
          </VStack>
        </Box>
        <Spacer />
        <Box p={4}>
          <VStack>
            <MdOutlineAccountCircle size={20} />
            <Text fontSize={13}>Profile</Text>
          </VStack>
        </Box>
        <Spacer />
      </Flex>
    </div>
=======
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
>>>>>>> e1ad15ceaadf572dd9934e5b359bea7c1e9ed2ba
  );
};

export default NavFooter;
