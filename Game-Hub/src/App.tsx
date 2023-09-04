import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import Platforms from "./components/Platforms";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
      templateColumns={{
        lg: "250px 1fr",
        base: "1fr",
      }}
      templateRows={{ lg: "80px", base: "80px" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={2}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(selectedGenre) =>
              setGameQuery({ ...gameQuery, genre: selectedGenre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Platforms
          selectedPlatforms={gameQuery.platform}
          onSelectPlatform={(selectedPlatform) =>
            setGameQuery({ ...gameQuery, platform: selectedPlatform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}
export default App;
