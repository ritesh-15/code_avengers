import React from "react"
import { VStack, Text, Flex, Box, Spacer } from "@chakra-ui/react"
import { FaHome, FaSearch } from "react-icons/fa"
import { MdOutlineAccountCircle } from "react-icons/md"
import { TfiMenuAlt } from "react-icons/tfi"
import { Link } from "react-router-dom"

const NavFooter = () => {
  return (
    <Flex bottom={0}>
      <Spacer />

      <Box>
        <Link to="/">
          <VStack>
            <FaHome size={20} />
            <Text fontSize={13} mt={"4px"}>
              Home
            </Text>
          </VStack>
        </Link>
      </Box>

      <Spacer />

      <Box>
        <Link to="/">
          <VStack>
            <FaSearch size={20} />
            <Text fontSize={13}>Search</Text>
          </VStack>
        </Link>
      </Box>
      <Spacer />

      <Box>
        <Link to="/donate">
          <VStack>
            <TfiMenuAlt size={20} />
            <Text fontSize={13}>Donations</Text>
          </VStack>
        </Link>
      </Box>

      <Spacer />

      <Box>
        <Link to="/userProfile">
          <VStack>
            <MdOutlineAccountCircle size={20} />
            <Text fontSize={13}>Profile</Text>
          </VStack>
        </Link>
      </Box>
      <Spacer />
    </Flex>
  )
}

export default NavFooter
