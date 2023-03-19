import React from "react"
import { Box , Text , Heading, VStack, HStack} from "@chakra-ui/layout"
import {Button, Checkbox, FormControl, FormLabel, Input} from "@chakra-ui/react"

export default function Register() {
  return (
    <Box
      w = {['full' , 'md']}
      p = {[8 , 10]}
      mt = {[10 , '10vh']}
      mx = 'auto'
      border={['none' , '10px']}
      borderColor={['' , 'grey']}
      borederRadius={10}
    >  
      <VStack spacing={4} align='flex-start' w='full'>
        <VStack spacing={1} align={['flex-start' , 'center']} w='full' mb='3'> 
          <Heading>SignUp</Heading>
          {/* <Text></Text> */}
        </VStack>
      

      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input rounded='none' varient='filled'/>

        <FormLabel>Last Name</FormLabel>
        <Input rounded='none' varient='filled'/>

        <FormLabel>E-mail Address</FormLabel>
        <Input rounded='none' varient='filled'/>

        <FormLabel>Password</FormLabel>
        <Input rounded='none' varient='filled' type='password'/>
      </FormControl>

      <HStack w='full' justify='space-between'>
        <Checkbox>Remember me.</Checkbox>

      </HStack>
      </VStack>
      <Button bgColor='blue.400' rounded='none' color='white' w={['full' , 'auto']} alignSelf='end'>Login</Button>
      
    </Box>

   

  )
}


