import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { HStack, Text, Circle, Box, VStack } from "@chakra-ui/layout";
import { Image, Spacer, Button, Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const ProductSummary = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <HStack>
        <Circle size="40px" bg="#d5dbdb" color="black" m={5}>
          <AiOutlineLeft />
        </Circle>
        <Text fontSize={25}>Order Details</Text>
      </HStack>
      <Text fontSize={20} p={3}>
        Order Summary
      </Text>
      {/* {cart.length > 0
        ? cart.map((item) => <CartItem imageUrl={item.image} />)
        : ""} */}
      <CartItem />
      <Text fontSize={20} p={3}>
        Payment Summary
      </Text>

      <HStack m={4}>
        <Text>Order Total</Text>
        <Spacer />
        <Text></Text>
      </HStack>

      <HStack m={4}>
        <Text>Tax (18%)</Text>
        <Spacer />
        <Text>$7</Text>
      </HStack>

      <HStack m={4}>
        <Text>Discount</Text>
        <Spacer />
        <Text>-$10</Text>
      </HStack>

      <HStack m={4}>
        <Text>Delivery Charges</Text>
        <Spacer />
        <Text>$2</Text>
      </HStack>

      <hr style={{ margin: "10px", border: "1px solid black" }} />

      <HStack m={4}>
        <Text fontWeight={"bold"}>Total Amount</Text>
        <Spacer />
        <Text fontWeight={"bold"}>$36</Text>
      </HStack>

      <Center>
        <Button position={"fixed"} bottom={5} colorScheme="twitter">
          Proceed to Payment
        </Button>
      </Center>
    </div>
  );
};

export default ProductSummary;
