import React from "react";
import Restaurants from "./Restaurants";
import { HStack, Circle, Text } from "@chakra-ui/react";
import { AiOutlineLeft } from "react-icons/ai";
import { useEffect } from "react";
import api from "../../api/axios";
import { useState } from "react";

const RestaurantsPage = () => {
  useEffect(() => {
    getRestaurants();
  }, []);
  const [restaurants, setrestaurants] = useState([]);
  const getRestaurants = async () => {
    try {
      const res = await api.get(
        "https://codeavengersserver-production.up.railway.app/api/restaurants"
      );
      console.log(res.data.data);
      setrestaurants(res.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const mapp = () => {
    restaurants.map((item, index) => {
      return (
        <Restaurants
          image={item.attributes.image[0].Image}
          name={item.attributes.name}
          description={item.attributes.description}
          location={item.attributes.location}
          key={index}
        />
      );
    });
  };
  return (
    <div>
      <HStack>
        <Circle cursor="pointer" size="26px" bg="#d5dbdb" color="black" m={5}>
          <AiOutlineLeft />
        </Circle>
        <Text fontSize={18}>Restaurants</Text>
      </HStack>
      <div className="flex flex-wrap">
        {/* {restaurants.length > 0 ? {mapp()}: ""} */}
      </div>
    </div>
  );
};

export default RestaurantsPage;
