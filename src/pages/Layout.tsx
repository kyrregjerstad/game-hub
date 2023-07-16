import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Box, Flex } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Flex justify={"center"}>
        <Box maxWidth={"1920px"} width={"full"}>
          <NavBar />
          <Box padding={5}>
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
