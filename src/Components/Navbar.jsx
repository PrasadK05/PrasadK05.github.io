import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        px={4}
        position="sticky"
        top={"0px"}
        zIndex={1000}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            bg="transparent"
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link to="home" smooth={true} duration={1000} offset={-80}>
              {" "}
              <Button
                display={{ base: "none", sm: "none", md: "block", lg: "block" }}
                bg="transparent"
                color={"blue.400"}
              >
                Home
              </Button>
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link to="aboutme" smooth={true} duration={1000} offset={-80}>
                <Button bg="transparent" color={"blue.400"}>
                  About Me
                </Button>
              </Link>
              <Link to="skills" smooth={true} duration={1000} offset={-80}>
                <Button bg="transparent" color={"blue.400"}>
                  Skills
                </Button>
              </Link>
              <Link to="projects" smooth={true} duration={1000} offset={-80}>
                <Button bg="transparent" color={"blue.400"}>
                  Projects
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={1000} offset={-80}>
                <Button bg="transparent" color={"blue.400"}>
                  Contact
                </Button>
              </Link>
              <a href="https://drive.google.com/file/d/1fj4aTBunY4c8LKKoP95D6AwMRvsPtORu/view?usp=sharing" target={"_blank"}>
                <Button
                  // bg="transparent"
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
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap="20px">
            <Button
              onClick={toggleColorMode}
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
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://wallpapercave.com/wp/wp2582673.jpg"}
                />
              </MenuButton>
              <MenuList>
                <a href="https://github.com/PrasadK05" target={"_blank"}>
                  <MenuItem>Github</MenuItem>
                </a>
                <a
                  href="https://www.linkedin.com/in/prasad-karde/"
                  target={"_blank"}
                >
                  <MenuItem>LinkedIn</MenuItem>
                </a>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to="home" smooth={true} duration={1000} offset={-400}>
                <Button
                  bg="transparent"
                  color={"blue.400"}
                  display="block"
                  m="auto"
                >
                  Home
                </Button>
              </Link>
              <Link to="aboutme" smooth={true} duration={1000} offset={-400}>
                <Button
                  bg="transparent"
                  color={"blue.400"}
                  display="block"
                  m="auto"
                >
                  About Me
                </Button>
              </Link>
              <Link to="skills" smooth={true} duration={1000} offset={-400}>
                <Button
                  bg="transparent"
                  color={"blue.400"}
                  display="block"
                  m="auto"
                >
                  Skills
                </Button>
              </Link>
              <Link to="projects" smooth={true} duration={1000} offset={-400}>
                <Button
                  bg="transparent"
                  color={"blue.400"}
                  display="block"
                  m="auto"
                >
                  Projects
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={1000} offset={-400}>
                {" "}
                <Button
                  bg="transparent"
                  color={"blue.400"}
                  display="block"
                  m="auto"
                >
                  Contact
                </Button>
              </Link>
              {/* <Link> */}
              <a href="https://drive.google.com/file/d/1fj4aTBunY4c8LKKoP95D6AwMRvsPtORu/view?usp=sharing" target={"_blank"}>
                <Button
                  // flex={1}
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
                  display="block"
                  m="auto"
                >
                  Resume
                </Button>
              </a>
              {/* </Link> */}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

// ../downloads/Prasad-Karde-Resume.pdf
