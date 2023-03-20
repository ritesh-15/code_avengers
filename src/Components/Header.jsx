import React from 'react'
import { Heading,Text,Input,HStack,Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <div>
      <HStack>
        <Text p={5}>Donorify</Text>
        <Spacer/>
        <Text p={5}>Baramati,Pune</Text>
      </HStack>

      

      <Heading m={3}>Find nearest drop point in just in search</Heading>
      <Input placeholder="Search for drop point"m={4} maxWidth={'80%'} />
      <Text m={3}>Nearest NGO's</Text>
    </div>
  );
}

export default Header