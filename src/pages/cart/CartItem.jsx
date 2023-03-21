import React from "react"
import { HStack, Text, Spacer, Box, VStack } from "@chakra-ui/layout"
import { Img } from "@chakra-ui/react"

const CartItem = (props) => {
  return (
    <Box p={4} m={2} borderRadius={10} bg={"white"}>
      <HStack>
        <Img
          src={props.imageUrl}
          alt="img"
          width={"25%"}
          height={"25%"}
          borderRadius={10}
        />
        <Spacer />
        <Text>
          {props.quantity} X {props.price}
        </Text>
        <Spacer />
        <Text>{props.name}</Text>
        <Spacer />
        <Text>${props.price}</Text>
      </HStack>
    </Box>
  )
}

export default CartItem
