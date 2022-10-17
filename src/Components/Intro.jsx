import React from 'react'
import {Box, Flex, Text, Image, HStack, Button} from "@chakra-ui/react"


export default function Intro() {
  return (
    <Box border={"1px solid red"}  width={"80%"} margin="auto">
        <Flex justifyContent={"space-evenly"}>
            <Box border={"1px solid blue"}>
                <Text fontSize={"6xl"}>Hii,</Text>
                <Text fontSize={"6xl"} >I am Prasad Karde</Text>
                <Text fontSize={"6xl"} >Full Stack Web Developer</Text>
                <Button>Resume</Button>
                <HStack>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-github"></i>
                </HStack>
            </Box>
            <Box border={"1px solid blue"}>
                <Image src="https://avatars.githubusercontent.com/u/107466109?v=4" alt="Error" borderRadius="50%"></Image>                
            </Box>
        </Flex>
      
    </Box>
  )
}
