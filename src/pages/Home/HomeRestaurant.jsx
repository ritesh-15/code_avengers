import React, { useEffect, useState } from "react"
import { HStack, Spacer, Text } from "@chakra-ui/layout"
import { Menu, MenuButton, Box, Image, MenuItem } from "@chakra-ui/react"
import NavFooter from "../../Components/NavFooter"
import Header from "../../Components/Header"
import api from "../../api/axios"
import { Link } from "react-router-dom"
import Hotel from "./Hotel"
import { useQuery } from "react-query"
import { getOrganization } from "../../services/auth.service"

const homeRestaurant = () => {
  const [rests, setRests] = useState([])
  const url =
    "https://codeavengersserver-production.up.railway.app/api/restaurants"
  const fetchData = async () => {
    const res = await api.get(url)
    setRests(res.data.data)
  }

  const { data } = useQuery(["organizations"], getOrganization)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Header />

      <Image src="src\assets\home2.avif" alt="img" p={5} />

      <Text align={"center"} fontStyle={"italic"}>
        Transforming leftovers into meals
      </Text>

      <Text p={5}>Famous Restaurants near you</Text>

      <div>
        {rests.map((element) => {
          return (
            <Link to={`/restauranthome/${element.id}`}>
              <Hotel
                key={element.id}
                title={element.attributes.name}
                description={element.attributes.description}
                image={element.attributes.images[0].Image}
                location={element.attributes.location}
              />
            </Link>
          )
        })}
      </div>

      <Text p={5}>Nearest organization</Text>

      <div>
        {data?.data.data.map(({ id, attributes }) => {
          return (
            <Hotel
              key={id}
              title={attributes.name}
              description={attributes.description}
              image={attributes.image}
              location={attributes.location}
            />
          )
        })}
      </div>

      <NavFooter />
    </div>
  )
}

export default homeRestaurant
