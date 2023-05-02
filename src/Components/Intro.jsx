import React from "react";
import { Box, Flex, Text, Image, HStack, Button } from "@chakra-ui/react";
import Redirects from "../Utils/Redirect";

export default function Intro() {
  return (
    <Box
      id="home"
      width={{ base: "100%", sm: "100%", md: "90%", lg: "70%" }}
      margin="auto"
      mt={{ base: "10px", sm: "20px", md: "30px", lg: "100px" }}
    >
      <Flex
        justifyContent={{ base: "space-between", lg: "space-evenly" }}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Box p="20px">
          <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "4xl" }}>
            Hello, my name is
          </Text>
          <Text
            fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            as="b"
            textShadow={
              "2px 7px 5px rgba(0,0,0,0.3),0px -4px 10px rgba(255,255,255,0.3)"
            }
            id="user-detail-name"
          >
            Prasad Karde
          </Text>
          <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "4xl" }}>
            I'm a{" "}
            <Text
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "4xl" }}
              as="b"
              color={"blue.400"}
              textShadow={
                "2px 7px 5px rgba(0,0,0,0.3),0px -4px 10px rgba(255,255,255,0.3)"
              }
            >
              Full Stack Web Developer
            </Text>
          </Text>
          <a id="resume-link-2" class="nav-link resume" onClick={Redirects}>
            <Button
              id="resume-button-2"
              mt={"20px"}
              mb={"20px"}
              flex={1}
              fontSize={"sm"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Resume
            </Button>
          </a>
          <HStack gap={"20px"}>
            <a href="https://github.com/PrasadK05" target={"_blank"}>
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/github-159-721954.png"
                w={"50px"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/prasad-karde/"
              target={"_blank"}
            >
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/linkedin-circle-1868976-1583140.png"
                w={"50px"}
              />
            </a>
          </HStack>
        </Box>
        <Box display="flex" alignItems={"center"}>
          <Image
            className="home-img"
            src="resume_pic_resize.png"
            alt="Error"
            borderRadius="50%"
            w={{ base: "100%", sm: "100%", md: "60%", lg: "100%" }}
            m={{ md: "auto", lg: "auto" }}
          ></Image>
        </Box>
      </Flex>
    </Box>
  );
}
