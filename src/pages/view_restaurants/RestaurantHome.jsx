import { React, useState, useEffect } from "react"
import {
  Box,
  Image,
  Text,
  Stack,
  Divider,
  HStack,
  Circle,
  Button,
  Center,
} from "@chakra-ui/react"
import { GrLocation } from "react-icons/gr"
import { AiOutlineLeft } from "react-icons/ai"
import api from "../../api/axios"
import Hotel from "../Home/Hotel"
import RestaurantProduct from "../../components/restaurant_product/RestaurantProduct"

const RestaurantHome = (props) => {
  const currHotel = {
    name: "",
    description: "",
    image: "",
    location: "",
  }
  const no = 1
  const [restaurant, setRestaurant] = useState(null)
  const [products, setProducts] = useState([])

  const url = `https://codeavengersserver-production.up.railway.app/api/restaurants/${no}?populate[0]=products
`
  const fetchData = async () => {
    const res = await api.get(url)
    setRestaurant(res.data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {/* <Hotel
        title={currHotel.name}
        description={currHotel.description}
        location={currHotel.location}
        // image={currHotel.image}
      /> */}

      {/* <Box>
        <Circle
          cursor="pointer"
          size="26px"
          color="black"
          m={5}
          position="absolute"
          bg="grey"
        >
          <AiOutlineLeft />
        </Circle>
        <Image
          src="src\assets\restaurantImage.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          className="w-full md:w-[350px] object-contain"
        />
      </Box> */}

      <Box p={4}>
        <Stack>
          <Text fontWeight="bold" fontSize={20}>
            {restaurant?.attributes.name}
          </Text>
          <Image
            src={restaurant?.attributes.images[0].Image}
            alt="Green double couch with wooden legs"
          />
          <p className="text-md">{restaurant?.attributes.description}</p>
          <HStack>
            <GrLocation />
            <p className="text-sm">{restaurant?.attributes.location}</p>
          </HStack>
        </Stack>
        <Divider mt={2} borderWidth={1} />
        <Stack mt={5}>
          <Text fontWeight="bold">Products</Text>
          {restaurant?.attributes.products.data.map(({ attributes }, index) => {
            const {
              name,
              description,
              quantity,
              price,
              discount,
              image,
              type,
            } = attributes
            return (
              <RestaurantProduct
                key={index}
                title={name}
                description={description}
                image={image}
                qunatity={quantity}
                price={price}
                discount={discount}
                type={type}
              />
            )
          })}
        </Stack>
      </Box>
      <Center my="2">
        <Button>continue purchase</Button>
      </Center>
    </>
  )
}

export default RestaurantHome

RestaurantHome.defaultProps = {
  id: 1,
}
