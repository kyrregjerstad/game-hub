import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

export const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <>
      <Box position={"fixed"}>
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
        <List>
          {data?.results.map((genre) => (
            <ListItem key={genre.id} paddingY={"5px"}>
              <HStack>
                <Image
                  boxSize={"32px"}
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                  alt={genre.name}
                  objectFit="cover"
                />
                <Button
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  fontSize="lg"
                  variant="link"
                  onClick={() => setSelectedGenreId(genre.id)}
                  whiteSpace="normal"
                  textAlign="left"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default GenreList;
