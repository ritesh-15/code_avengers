import { React, useEffect } from "react"
import { AiOutlineLeft } from "react-icons/ai"
import { HStack, Text, Circle, Box, VStack } from "@chakra-ui/layout"
import { Spacer, Button, Center } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux"
import CartItem from "./CartItem"
import { getTotalPrice } from "../../app/slices/cartSlice"
import { useNavigate } from "react-router-dom"

const ProductSummary = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()

  useEffect(() => {
    dispatch(getTotalPrice())
  }, [])

  const { cart, totalPrice } = useSelector((state) => state.cart)

  let discount = 0
  cart.forEach((item) => (discount += item.discount))

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

      <div>
        {cart.map((item) => {
          return (
            <CartItem
              name={item.name}
              imageUrl={item.image}
              price={item.price}
              quantity={item.quantity}
            />
          )
        })}
      </div>
      <Text fontSize={20} p={3}>
        Payment Summary
      </Text>

      <HStack m={4}>
        <Text>Order Total</Text>
        <Spacer />
        <Text>${totalPrice}</Text>
      </HStack>

      <HStack m={4}>
        <Text>Tax (18%)</Text>
        <Spacer />
        <Text>${0.18 * totalPrice}</Text>
      </HStack>

      <HStack m={4}>
        <Text>Discount</Text>
        <Spacer />
        <Text>${discount}</Text>
      </HStack>

      <HStack m={4}>
        <Text>Delivery Charges</Text>
        <Spacer />
        <Text>$0</Text>
      </HStack>

      <hr style={{ margin: "10px", border: "1px solid black" }} />

      <HStack m={4}>
        <Text fontWeight={"bold"}>Total Amount</Text>
        <Spacer />
        <Text fontWeight={"bold"}>${totalPrice - discount}</Text>
      </HStack>

      <Center>
        <Button position={"fixed"} bottom={5} colorScheme="twitter">
          Proceed to Payment
        </Button>
      </Center>
    </div>
  )
}

export default ProductSummary
