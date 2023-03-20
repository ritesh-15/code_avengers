import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { HStack,Text,Circle,Box,VStack} from '@chakra-ui/layout';
import {Image,Spacer,Button,Center} from '@chakra-ui/react'

const cart = () => {
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

      <Box p={4} m={2} borderRadius={10} bg={"white"}>
        <HStack>
          <Image
            src="src\assets\bg.jpg"
            alt="img"
            width={"25%"}
            height={"25%"}
            borderRadius={10}
          />
          <Spacer />
          <Text>2 X $6</Text>
          <Spacer />
          <Text>Paneer</Text>
          <Spacer />
          <Text>$12</Text>
        </HStack>
      </Box>

      <Box p={4} m={2} borderRadius={10} bg={"white"}>
        <HStack>
          <Image
            src="src\assets\bg.jpg"
            alt="img"
            width={"25%"}
            height={"25%"}
            borderRadius={10}
          />
          <Spacer />
          <Text>1 X $10</Text>
          <Spacer />
          <Text>Fruit Plate</Text>
          <Spacer />
          <Text>$10</Text>
        </HStack>
      </Box>

      <Box p={4} m={2} borderRadius={10} bg={"white"}>
        <HStack>
          <Image
            src="src\assets\bg.jpg"
            alt="img"
            width={"25%"}
            height={"25%"}
            borderRadius={10}
          />
          <Spacer />
          <Text>3 X $5</Text>
          <Spacer />
          <Text>Paratha</Text>
          <Spacer />
          <Text>$15</Text>
        </HStack>
      </Box>

      <Text fontSize={20} p={3}>
        Payment Summary
      </Text>

      <HStack m={4}>
        <Text>Order Total</Text>
        <Spacer />
        <Text>$37</Text>
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
}

export default cart