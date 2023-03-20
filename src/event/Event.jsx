import { React, useState } from "react";
import { AiOutlineLeft, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import {
  Text,
  HStack,
  Circle,
  Image,
  Box,
  Button,
  Spacer,
} from "@chakra-ui/react";

const Event = (props) => {
  const [fav, setFav] = useState(false);
  const handleFav = () => {
    if (fav === false) {
      setFav(true);
    } else {
      setFav(false);
    }
  };
  return (
    <div>
      <HStack>
        <Circle size="40px" bg="#d5dbdb" color="black" m={5}>
          <AiOutlineLeft />
        </Circle>
        <Text fontSize={25}>{props.title}</Text>
      </HStack>

      <Box p={5}>
        <Image
          src="https://images.unsplash.com/photo-1554893814-598f52fca25e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmdvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          align={"center"}
        />
      </Box>
      <HStack>
        <Text pl={5} fontSize={20}>
          Blood Donation Camp
        </Text>
        <Spacer />

        <button onClick={handleFav} style={{ marginRight: "25px" }}>
          {fav === false ? (
            <AiOutlineHeart size={20} />
          ) : (
            <AiFillHeart size={20} />
          )}
        </button>
      </HStack>

      <Text p={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nobis qui
        temporibus dolorum illo, eveniet optio reprehenderit quo dicta doloribus
        vero, quos eius aut eos! Distinctio animi unde sed neque molestias
        repellat quos officiis velit ut praesentium. Consequatur reiciendis
        ducimus quos magni architecto odio fugit dignissimos culpa doloribus
        excepturi, omnis molestiae amet magnam velit cum nulla tempore
        asperiores exercitationem, possimus error rerum rem! Quas doloribus
        nobis unde eum dolor reprehenderit!
      </Text>

      <Text p={5} fontWeight={"bold"}>
        Location
      </Text>
      <HStack bg="black" ml={4} mr={4} p={5} color="white" borderRadius={10}>
        
        <CiLocationOn size={25} />
        <Text>{props.location}</Text>
        
      </HStack>
    </div>
  );
};

export default Event;
