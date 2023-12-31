import {
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import Screenshots from "../components/Screenshots";
import useGame from "../hooks/useGame";
import useGameIdStore from "../gameIdStore";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  const setGameSlug = useGameIdStore((store) => store.setGameSlug);
  setGameSlug(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Image
        src={game?.background_image}
        borderRadius={15}
        paddingBottom={5}
        objectFit={"cover"}
        width="full"
      />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game?.name}</Heading>
          <ExpandableText>{game?.description_raw!}</ExpandableText>
          <GameAttributes game={game!} />
        </GridItem>

        <GridItem>
          <GameTrailer gameId={game?.id!} />
          <Screenshots gameId={game?.id!} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
