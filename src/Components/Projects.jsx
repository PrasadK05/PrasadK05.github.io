import {
  Box,
  SimpleGrid,
  HStack,
  Image,
  Text,
  Flex,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";

export default function Projects() {
  return (
    <Box
      width={{ base: "100%", sm: "100%", md: "90%", lg: "70%" }}
      margin="auto"
      mt={{ base: "10px", sm: "20px", md: "30px", lg: "100px" }}
      border={"1px solid red"}
      textAlign="center"
    >
      <Box mb={{ base: "15px", sm: "20px", md: "20x", lg: "25px" }}>
        <Text
          fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
          as="b"
        >
          Projects
        </Text>
      </Box>
      <SimpleGrid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        textAlign={"center"}
        gap={{ base: "20px", sm: "30px", md: "30px", lg: "30px" }}
      >
        <Box
          // h={"500px"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
          pb={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
          borderRadius={"20px"}
        >
          <Image
            src="https://iili.io/D3Vmbf.png"
            w={"100%"}
            borderTopRadius={"20px"}
          />
          <Box>
            <Text>Sugar Cosmetics Clone</Text>
          </Box>
          <Box>
            Sugar Cosmetics is an Indian e-commerce company, founded by Vineeta
            Singh. It focuses on selling makeup and skincare products that are
            millennial friendly.
          </Box>
          <Box>
            <HStack justifyContent={"center"}>
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/html-59-225995.png"
                w="40px"
              />
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/css-38-226095.png"
                w="40px"
              />
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/javascript-2038874-1720087.png"
                w="40px"
              />
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/github-159-721954.png"
                w="40px"
              />
            </HStack>
          </Box>
          <Box w={"100%"}>
            <HStack justifyContent={"center"}>
              <Button>Github</Button>
              <Button>Live</Button>
            </HStack>
          </Box>
        </Box>

        <Box
          // h={"500px"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
          pb={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
          borderRadius={"20px"}
        >
          <Image
            src="https://iili.io/D38X6b.png"
            w={"100%"}
            borderTopRadius={"20px"}
          />
          <Box>
            <Text>Zoom Car Clone</Text>
          </Box>
          <Box>
            Zoomcar is an Indian car sharing platform, headquartered in
            Bangalore. The company was founded in 2013 by David Back and Greg
            Moran. It currently operates in 34+ cities.
          </Box>
          <Box>
            <HStack justifyContent={"center"}>
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/html-59-225995.png"
                w="40px"
              />
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/css-38-226095.png"
                w="40px"
              />
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/javascript-2038874-1720087.png"
                w="40px"
              />
              <Image
                src="https://img.icons8.com/color/2x/bootstrap.png"
                w="40px"
              />
               <Image
                src="https://cdn.iconscout.com/icon/free/png-64/github-159-721954.png"
                w="40px"
              />
            </HStack>
          </Box>
          <Box w={"100%"}>
            <HStack justifyContent={"center"}>
              <Button>Github</Button>
              <Button>Live</Button>
            </HStack>
          </Box>
        </Box>

        <Box
          // h={"500px"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
          pb={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
          borderRadius={"20px"}
        >
          <Image
            src="https://iili.io/D38YFf.png"
            w={"100%"}
            borderTopRadius={"20px"}
          />
          <Box>
            <Text>Freshly Clone</Text>
          </Box>
          <Box>
            Freshly is a New York-based prepared meal delivery company that
            delivers throughout the United States. Founded by Michael Wystrach
            and Carter Comstock.
          </Box>
          <Box>
            <HStack justifyContent={"center"}>
              <Image
                src="https://img.icons8.com/plasticine/2x/react.png"
                w="40px"
              />
              <Image
                src="https://img.icons8.com/color/2x/chakra-ui.png"
                w="40px"
              />
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/javascript-2038874-1720087.png"
                w="40px"
              />
              <Image
                src="https://img.icons8.com/color/2x/heroku.png"
                w="40px"
              />
               <Image
                src="https://cdn.iconscout.com/icon/free/png-64/github-159-721954.png"
                w="40px"
              />
            </HStack>
          </Box>
          <Box w={"100%"}>
            <HStack justifyContent={"center"}>
              <Button>Github</Button>
              <Button>Live</Button>
            </HStack>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

