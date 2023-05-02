import { Box, SimpleGrid, HStack, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

export default function Projects() {
  return (
    <Box
      id="projects"
      width={{ base: "95%", sm: "95%", md: "90%", lg: "70%" }}
      margin="auto"
      mt={{ base: "20px", sm: "20px", md: "30px", lg: "100px" }}
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
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={{ base: "5px", sm: "5px", md: "10px", lg: "15px" }}
          pb={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
          borderRadius={"20px"}
          className="project-card"
        >
          <Image
            src="https://www.linkpicture.com/q/home_21.png"
            w={"100%"}
            borderTopRadius={"20px"}
          />
          <Box>
            <Text as={"b"} className="project-title">
              HubPoint
            </Text>
          </Box>
          <Box px={"5px"} className="project-description">
            HubPoint is customer relationship management (CRM) website that
            provides app services, marketing and ad tools for the website which
            will divert traffic.
          </Box>
          <Box>
            <HStack justifyContent={"center"} className="project-tech-stack">
              <Image
                src="https://img.icons8.com/plasticine/2x/react.png"
                w="40px"
              />
              <Image src="https://img.icons8.com/color/2x/redux.png" w="40px" />
              <Image
                src="https://img.icons8.com/color/2x/chakra-ui.png"
                w="40px"
              />
              <Image
                src="https://img.icons8.com/fluency/2x/node-js.png"
                w="40px"
              />
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/express-8-1175029.png"
                w="40px"
              />
              <Image
                src="https://img.icons8.com/color/2x/mongodb.png"
                w="40px"
              />
              <Image
                src="https://img.icons8.com/color/2x/java-web-token.png"
                w="40px"
              />
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/github-159-721954.png"
                w="40px"
              />
            </HStack>
          </Box>
          <Box w={"100%"}>
            <HStack justifyContent={"center"} gap="20px">
              <a
                href="https://github.com/aman-109/axiomatic-spring-6378-HubPointCRM"
                target={"_blank"}
                className="project-github-link"
              >
                <Button
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
                  Github
                </Button>
              </a>
              <a
                href="https://hubpoint-aman-109.vercel.app/"
                target={"_blank"}
                className="project-deployed-link"
              >
                <Button
                  bg={"green.400"}
                  color={"white"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  Live
                </Button>
              </a>
            </HStack>
          </Box>
        </Box>

        <Box
          // h={"500px"}
          className="project-card"
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={{ base: "5px", sm: "5px", md: "10px", lg: "15px" }}
          pb={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
          borderRadius={"20px"}
        >
          <Image
            src="https://www.linkpicture.com/q/home_9.png"
            w={"100%"}
            borderTopRadius={"20px"}
          />
          <Box>
            <Text as={"b"} className="project-title">
              MyGlamm Clone
            </Text>
          </Box>
          <Box px={"5px"} className="project-description">
            MyGlamm is an Indian e-commerce company that sells cosmetics and
            personal care products. It was founded in 2015, headquartered in
            Mumbai, India.
          </Box>
          <Box>
            <HStack justifyContent={"center"} className="project-tech-stack">
              <Image
                src="https://img.icons8.com/plasticine/2x/react.png"
                w="40px"
              />
              <Image src="https://img.icons8.com/color/2x/redux.png" w="40px" />
              <Image
                src="https://img.icons8.com/color/2x/chakra-ui.png"
                w="40px"
              />
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/github-159-721954.png"
                w="40px"
              />
            </HStack>
          </Box>
          <Box w={"100%"}>
            <HStack justifyContent={"center"} gap="20px">
              <a
                href="https://github.com/KanhaiyaChauhan037/succinct-wrench-1095"
                target={"_blank"}
                className="project-github-link"
              >
                <Button
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
                  Github
                </Button>
              </a>
              <a
                href="https://whitefeather.netlify.app/"
                target={"_blank"}
                className="project-deployed-link"
              >
                <Button
                  bg={"green.400"}
                  color={"white"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  Live
                </Button>
              </a>
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
          className="project-card"
        >
          <Image
            src="https://www.linkpicture.com/q/zoomcar.png"
            w={"100%"}
            borderTopRadius={"20px"}
          />
          <Box>
            <Text as={"b"} className="project-title">
              Zoom Car Clone
            </Text>
          </Box>
          <Box px={"5px"} className="project-description">
            Zoomcar is an Indian car sharing platform, headquartered in
            Bangalore. The company was founded in 2013 by David Back and Greg
            Moran. It currently operates in 34+ cities.
          </Box>
          <Box>
            <HStack justifyContent={"center"} className="project-tech-stack">
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
            <HStack justifyContent={"center"} gap="20px">
              <a
                href="https://github.com/zuhedshaikh95/Zoomcar-Clone"
                target={"_blank"}
                className="project-github-link"
              >
                <Button
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
                  Github
                </Button>
              </a>
              <a
                href="https://magical-kashata-a20ef2.netlify.app/"
                target={"_blank"}
                className="project-deployed-link"
              >
                <Button
                  bg={"green.400"}
                  color={"white"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  Live
                </Button>
              </a>
            </HStack>
          </Box>
        </Box>

        <Box
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
          pb={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
          borderRadius={"20px"}
          className="project-card"
        >
          <Image
            src="https://www.linkpicture.com/q/fre.png"
            w={"100%"}
            borderTopRadius={"20px"}
          />
          <Box>
            <Text as={"b"} className="project-title">
              Freshly Clone
            </Text>
          </Box>
          <Box px={"5px"} className="project-description">
            Freshly is a New York-based prepared meal delivery company that
            delivers throughout the United States. Founded by Michael Wystrach
            and Carter Comstock.
          </Box>
          <Box>
            <HStack justifyContent={"center"} className="project-tech-stack">
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
              <a
                href="https://github.com/PrasadK05/Freshly-Clone/tree/main/rct101-project"
                target={"_blank"}
                className="project-github-link"
              >
                <Button
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
                  Github
                </Button>
              </a>
              <a
                href="https://astounding-cheesecake-d26411.netlify.app/"
                target={"_blank"}
                className="project-deployed-link"
              >
                <Button
                  bg={"green.400"}
                  color={"white"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  Live
                </Button>
              </a>
            </HStack>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
