import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge
      colorScheme={color}
      fontSize="0.8em"
      paddingX={2}
      borderRadius={"4px"}
      fontWeight="normal"
    >
      {score}
    </Badge>
  );
};
