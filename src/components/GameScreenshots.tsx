import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={4}
    >
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} alt="Game screenshot" />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
