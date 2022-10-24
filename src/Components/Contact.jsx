import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  ListHeader,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Contact() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      id="contact"
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      mt={{ base: "20px", sm: "20px", md: "30px", lg: "100px" }}
      boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
    >
      <Box
        mb={{ base: "15px", sm: "20px", md: "20x", lg: "25px" }}
        textAlign="center"        
      >
        <Text
          fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
          as="b"
        >
          Get In Touch
        </Text>
      </Box>
      <Container
        as={Stack}
        maxW={"6xl"}
        width={{ base: "100%", sm: "100%", md: "90%", lg: "70%" }}
        margin="auto"
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={8}
          justifyContent={"space-between"}
          textAlign="center"
        >
          <Stack align={"flex-start"}>
            <Text fontSize={"lg"} as="b">Email</Text>
            <Link>kardeprasad1996@gmail.com</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontSize={"lg"} as="b">Mobile No.</Text>
            <Link>+91 9370455033</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontSize={"lg"} as="b">GitHub</Text>
            <Link href={"https://github.com/PrasadK05"} target={"_blank"}>
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/github-159-721954.png"
                w="40px"
              />
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontSize={"lg"} as="b">
              LinkedIn
            </Text>
            <Link href={"https://www.linkedin.com/in/prasad-karde/"} target={"_blank"}>
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/linkedin-circle-1868976-1583140.png"
                w={"40px"}
              />
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Text fontSize={"sm"} textAlign={"center"}>
          © 2022 | All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
