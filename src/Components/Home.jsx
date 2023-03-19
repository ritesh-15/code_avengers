import React, { Fragment } from "react";
import { Stack, Heading, Text, Image, Center } from "@chakra-ui/react";
import NgoCard from "./NgoCard";
import NavFooter from "./NavFooter";
import Header from "./Header";

const home = () => {
  return (
    <Fragment>
      <Header />
      <Stack>
        <NgoCard />
        <NgoCard />
        <NgoCard />
        <NgoCard />
        <NgoCard />
      </Stack>
      <NavFooter />
    </Fragment>
  );
};

export default home;
