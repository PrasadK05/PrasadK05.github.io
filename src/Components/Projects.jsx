import {
  Box,
  Stack,
  SimpleGrid,
  HStack,
  Image,
  Text,
  Flex,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function Projects() {
  return (
    <Box
      width={{ base: "100%", sm: "100%", md: "90%", lg: "70%" }}
      margin="auto"
      mt={{ base: "10px", sm: "20px", md: "30px", lg: "100px" }}
    >
      <Box textAlign={"center"}>
        <Text
          fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
          as="b"
        >
          Projects
        </Text>
      </Box>

      <SimpleGrid gap={"20px"}>
        <Box w="100%" >
          <Flex
            justifyContent={"space-between"}
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "column",
            }}
            gap="5%"
          >
            <Box
              w={{ bas: "100%", sm: "100%", column: "100%", lg: "55%" }}
              textAlign={"center"}
            >
              <Image src="https://iili.io/D3Vmbf.png" w="100%" />
              <Text>Sugar Conmetics Clone</Text>
            </Box>
            <Box w={{ bas: "100%", sm: "100%", column: "100%", lg: "40%" }}>
              <VStack
                gap={{ bas: "10px", sm: "10px", column: "20px", lg: "30px" }}
              >
                <Box w="100%">
                  <Text>
                    <Text as="b">Discription</Text> : Sugar Cosmetics is an
                    Indian e-commerce company, founded by Vineeta Singh. It
                    focuses on selling makeup and skincare products that are
                    millennial friendly, best suited for Indian skin tones and
                    are cruelty-free.
                  </Text>
                </Box>
                <Box w="100%">
                  <Text as="b">Tech Stack : </Text>
                  <HStack>
                    <Image
                      src="https://cdn.iconscout.com/icon/free/png-64/html-59-225995.png"
                      w="60px"
                    />
                    <Image
                      src="https://cdn.iconscout.com/icon/free/png-64/css-38-226095.png"
                      w="60px"
                    />
                    <Image
                      src="https://cdn.iconscout.com/icon/free/png-64/javascript-2038874-1720087.png"
                      w="60px"
                    />
                  </HStack>
                </Box>
                <Box w="100%">
                  <HStack>
                    <Button>Github</Button>
                    <Button>Live</Button>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Box>

        <Box w="100%" >
          <Flex
            justifyContent={"space-between"}
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "column",
            }}
            gap="5%"
          >
            <Box
              w={{ bas: "100%", sm: "100%", column: "100%", lg: "55%" }}
              textAlign={"center"}
            >
              <Image src="https://iili.io/D38X6b.png" w="100%" />
              <Text>Zoom Car Clone</Text>
            </Box>
            <Box w={{ bas: "100%", sm: "100%", column: "100%", lg: "40%" }}>
              <VStack
                gap={{ bas: "10px", sm: "10px", column: "20px", lg: "30px" }}
              >
                <Box w="100%">
                  <Text>
                    <Text as="b">Discription</Text> : Zoomcar is an Indian car
                    sharing platform, headquartered in Bangalore. The company
                    was founded in 2013 by David Back and Greg Moran. It
                    currently operates in 34+ cities.
                  </Text>
                </Box>
                <Box w="100%">
                  <Text as="b">Tech Stack : </Text>
                  <HStack>
                    <Image
                      src="https://cdn.iconscout.com/icon/free/png-64/html-59-225995.png"
                      w="60px"
                    />
                    <Image
                      src="https://cdn.iconscout.com/icon/free/png-64/css-38-226095.png"
                      w="60px"
                    />
                    <Image
                      src="https://cdn.iconscout.com/icon/free/png-64/javascript-2038874-1720087.png"
                      w="60px"
                    />
                  </HStack>
                </Box>
                <Box w="100%">
                  <HStack>
                    <Button>Github</Button>
                    <Button>Live</Button>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Box>

        <Box w="100%">
          <Flex
            justifyContent={"space-between"}
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "column",
            }}
            gap="5%"
          >
            <Box
              w={{ bas: "100%", sm: "100%", column: "100%", lg: "55%" }}
              textAlign={"center"}
            >
              <Image src="https://iili.io/D38YFf.png" w="100%" />
              <Text>Freshly Clone</Text>
            </Box>
            <Box w={{ bas: "100%", sm: "100%", column: "100%", lg: "45%" }}>
              <VStack
                gap={{ bas: "10px", sm: "10px", column: "20px", lg: "30px" }}
              >
                <Box w="100%">
                  <Text>
                    <Text as="b">Discription</Text> : Freshly is a New
                    York-based prepared meal delivery company that delivers
                    throughout the United States.[1][2][3] Founded by Michael
                    Wystrach and Carter Comstock, the company ships one million
                    meals per week[4] and delivers to the contiguous United
                    States.
                  </Text>
                </Box>
                <Box w="100%">
                  <Text as="b">Tech Stack : </Text>
                  <HStack>
                    <Image
                      src="https://cdn.iconscout.com/icon/free/png-64/html-59-225995.png"
                      w="60px"
                    />
                    <Image
                      src="https://cdn.iconscout.com/icon/free/png-64/css-38-226095.png"
                      w="60px"
                    />
                    <Image
                      src="https://cdn.iconscout.com/icon/free/png-64/javascript-2038874-1720087.png"
                      w="60px"
                    />
                  </HStack>
                </Box>
                <Box w="100%">
                  <HStack>
                    <Button>Github</Button>
                    <Button>Live</Button>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
