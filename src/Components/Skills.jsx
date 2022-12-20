import React from "react";
import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";

export default function Skills() {
  return (
    <Box
      id="skills"
      width={{ base: "95%", sm: "95%", md: "90%", lg: "70%" }}
      margin="auto"
      mt={{ base: "20px", sm: "20px", md: "30px", lg: "100px" }}
    //   border={"1px solid red"}
    >
      <Box
        mb={{ base: "15px", sm: "20px", md: "20x", lg: "25px" }}
        textAlign="center"
      >
        <Text
          fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
          as="b"
        >
          Skills
        </Text>
      </Box>
      <SimpleGrid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap="25px"
      >
        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image
            src="https://img.icons8.com/color/2x/html-5--v2.png"
            w="100%"
          />
          <Text as={"b"}>HTML</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image src="https://img.icons8.com/fluency/2x/css3.png" w="100%" />
          <Text as={"b"}>CSS</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image
            src="https://img.icons8.com/color/2x/javascript.png"
            w="100%"
          />
          <Text as={"b"}>Javascript</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image src="https://img.icons8.com/color/2x/bootstrap.png" w="100%" />
          <Text as={"b"}>Bootstrap</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image
            src="https://img.icons8.com/plasticine/2x/react.png"
            w="100%"
          />
          <Text as={"b"}>React JS</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image src="https://img.icons8.com/color/2x/redux.png" w="100%" />
          <Text as={"b"}>Redux</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image src="https://img.icons8.com/fluency/2x/node-js.png" w="100%" />
          <Text as={"b"}>Node JS</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image
            src="https://cdn.iconscout.com/icon/free/png-64/express-8-1175029.png"
            w="100%"
          />
          <Text as={"b"}>Express JS</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image src="https://img.icons8.com/color/2x/mongodb.png" w="100%" />
          <Text as={"b"}>MongoDB</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image src="https://img.icons8.com/color/2x/chakra-ui.png" w="100%" />
          <Text as={"b"}>Chakra UI</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image src="https://img.icons8.com/fluency/2x/typescript.png" w="100%" />
          <Text as={"b"}>TypeScript</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image src="https://img.icons8.com/color/2x/java-web-token.png" w="100%" />
          <Text as={"b"}>JSON Web Token</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" w="100%" />
          <Text as={"b"}>NEXT.js</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image src="https://img.icons8.com/color/2x/git.png" w="100%" />
          <Text as={"b"}>git</Text>
        </Box>

        <Box
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
        >
          <Image
            src="https://img.icons8.com/color/2x/visual-studio.png"
            w="100%"
          />
          <Text as={"b"}>VS Code</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
