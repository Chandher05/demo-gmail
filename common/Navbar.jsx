import { Center, Flex } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InpuRightElement,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, SettingsIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Logo from "../public/gmailLogo.png";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      minH="30px"
      as="header"
      
      bg="red.300"
      backdropFilter="saturate(180%) blur(5px)"
      w="100%"
      p="2"
      alignItems="center"
      z-index="100"
    >
      <Button onClick={onOpen} m="2">
        <HamburgerIcon></HamburgerIcon>
      </Button>
      <Center m="2">
        {" "}
        <Image
          src={Logo}
          alt="GMAIL"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </Center>
      <InputGroup mx="6" backgroundColor="blur">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="white"></SearchIcon>
        </InputLeftElement>
        <Input maxW="50vw" focusBorderColor="white"></Input>
        {/* <InpuRightElement>
          <SettingsIcon color="white"></SettingsIcon>
        </InpuRightElement> */}
      </InputGroup>
    </Flex>
  );
}
