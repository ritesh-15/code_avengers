import React from "react"
import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  ButtonGroup,
  Input,
  Stack,
  Center,
  HStack,
  Circle,
} from "@chakra-ui/react"

import { AiOutlineLeft } from "react-icons/ai"

const DonateNow = () => {
  return (
    <Box p={5}>
      <div className="w-full max-w-[750px] mx-auto">
        <div className="">
          <HStack>
            <Circle
              cursor="pointer"
              size="26px"
              bg="#d5dbdb"
              color="black"
              m={5}
            >
              <AiOutlineLeft />
            </Circle>
            <Text fontSize={18}>Donate Now</Text>
          </HStack>

          <Image
            src="src\assets\donateNowImage.jpg"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            className="w-full md:w-[350px] object-contain"
          />

          <Heading my={8}>
            Share a meal, feed a soul. Donate food with just a scroll.
          </Heading>

          <Stack spacing={4} mt={4}>
            <Text>where to pick up ?</Text>
            <Input variant="filled" placeholder="Enter location" mt={2} />
          </Stack>

          <Stack spacing={4} mt={4}>
            <Text>Food Item</Text>
            <Input variant="filled" placeholder="Enter Food Item" mt={2} />
          </Stack>

          <Stack spacing={4} mt={4}>
            <Text>Quantity</Text>
            <Input variant="filled" placeholder="Enter Quantity" mt={2} />
          </Stack>

          <Button className="mt-6" colorScheme="messenger" w={"100%"}>
            Donate
          </Button>
        </div>
      </div>
    </Box>
  )
}

export default DonateNow
