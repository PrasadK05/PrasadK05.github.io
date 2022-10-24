
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
  useColorMode
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon,MoonIcon, SunIcon } from '@chakra-ui/icons';



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position="sticky" top={"0px"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Button display={{base:"none", sm:"none", md:"block", lg:"block"}}>Home</Button>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Button>About Me</Button>
              <Button>Skills</Button>
              <Button>Projects</Button>
              <Button>Contact</Button>
            </HStack>
          </HStack>
          <Flex alignItems={'center'} gap="20px">
          <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://wallpapercave.com/wp/wp2582673.jpg'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Email</MenuItem>
                <MenuItem>Github</MenuItem>                
                <MenuItem>LinkedIn</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>             
             <Button>Home</Button>
             <Button>About Me</Button>
              <Button>Skills</Button>
              <Button>Projects</Button>
              <Button>Contact</Button>
            </Stack>
          </Box>
        ) : null}
      </Box>      
    </>
  );
}