import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      width="100%"
      _hover={{
        transform: "scale(1.01)",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      {children}
    </Box>
  );
};
