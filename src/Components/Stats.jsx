import { Box, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function Stats() {
  return (
    <Box
      width={{ base: "100%", sm: "100%", md: "90%", lg: "70%" }}
      margin="auto"
      mt={{ base: "10px", sm: "20px", md: "30px", lg: "100px" }}
      border={"1px solid red"}
    >
      <Box
        mb={{ base: "15px", sm: "20px", md: "20x", lg: "25px" }}
        textAlign="center"
      >
        <Text
          fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
          as="b"
        >
          Github Stats
        </Text>
      </Box>
      <Box w="100%" mb={{ base: "15px", sm: "20px", md: "20x", lg: "25px" }}>
        <Link href="https://github.com/PrasadK05">
          <Image
            src="https://github-readme-streak-stats.herokuapp.com?user=PrasadK05"
            w="70%"
            m="auto"
          />
        </Link>
      </Box>

      <Box w="100%" mb={{ base: "15px", sm: "20px", md: "20x", lg: "25px" }}>
        <Link href="https://github.com/PrasadK05">
          <Image
            src="https://github-readme-stats.vercel.app/api?username=PrasadK05&show_icons=true"
            w="70%"
            m="auto"
          />
        </Link>
      </Box>

      <Box w="100%">
        <Link href="https://github.com/PrasadK05">
          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=PrasadK05"
            w="40%"
            m="auto"
          />
        </Link>
      </Box>
    </Box>
  );
}
