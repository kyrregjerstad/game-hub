import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Emojis/fire.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <HStack padding="10px" position={"sticky"} top={0} bg={"gray.800"} zIndex={100}>
      <Link to="/">
        <Image src={logo} boxSize={"35px"} objectFit={"cover"} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
