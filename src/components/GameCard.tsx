import React from "react";
import type { Game } from "../hooks/useGames";
import { Card, CardBody, CardHeader, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <CardHeader fontSize={"2xl"}>{game.name}</CardHeader>
      </CardBody>
    </Card>
  );
};
