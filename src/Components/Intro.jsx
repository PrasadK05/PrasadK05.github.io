import React from "react";
import { Box, Flex, Text, Image, HStack, Button } from "@chakra-ui/react";

export default function Intro() {
  return (
    <Box
      width={{ base: "100%", sm: "100%", md: "90%", lg: "70%" }}
      margin="auto"
      mt={{base:"10px",sm:"20px", md:"30px", lg:"100px"}}
      border={"1px solid red"}
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
          >
            Prasad Karde
          </Text>
          <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "4xl" }}>
            I'm a{" "}
            <Text
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "4xl" }}
              as="b"
            >
              Full Stack Web Developer
            </Text>
          </Text>
          <Button mt={"20px"} mb={"20px"}>
            Resume
          </Button>
          <HStack gap={"20px"}>
            <Image
              src="https://cdn.iconscout.com/icon/free/png-64/github-159-721954.png"
              w={"50px"}
            />
            <Image
              src="https://cdn.iconscout.com/icon/free/png-64/linkedin-circle-1868976-1583140.png"
              w={"50px"}
            />
          </HStack>
        </Box>
        <Box>
          <Image
            src="https://avatars.githubusercontent.com/u/107466109?v=4"
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
