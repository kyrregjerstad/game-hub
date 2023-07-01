import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";

export const NavBar = () => {
  return (
    <HStack boxSize={"60px"}>
      <Image src={logo} />
      <Text fontSize="2xl" fontWeight="bold" color="white">
        Hello
      </Text>
    </HStack>
  );
};
