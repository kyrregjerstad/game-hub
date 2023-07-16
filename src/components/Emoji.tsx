import { Flex, Image } from "@chakra-ui/react";
import fire from "../assets/Emojis/fire.webp";
import fireGrey from "../assets/Emojis/fireGrey.webp";

interface Props {
  rating: number;
}

export const Emoji = ({ rating }: Props) => {
  const totalImages = 5;
  return (
    <Flex>
      {[...Array(totalImages)].map((_, i) => {
        const imgSrc = i < rating ? fire : fireGrey;
        return (
          <Image key={i} src={imgSrc} boxSize={"25px"} marginTop={2} borderRadius={8} />
        );
      })}
    </Flex>
  );
};
