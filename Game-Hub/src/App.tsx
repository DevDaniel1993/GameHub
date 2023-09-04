import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string | null;
  searchGame: string | null;
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
      templateRows={{ lg: "100px", base: "80px" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchedGame) =>
            setGameQuery({ ...gameQuery, searchGame: searchedGame })
          }
        />
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
        <HStack paddingX={2} marginY={4} spacing={8}>
          <PlatformSelector
            selectedPlatforms={gameQuery.platform}
            onSelectPlatform={(selectedPlatform) =>
              setGameQuery({ ...gameQuery, platform: selectedPlatform })
            }
          />
          <SortSelector
            selectedOrder={gameQuery.order}
            onOrderSelect={(selectedOrder) =>
              setGameQuery({ ...gameQuery, order: selectedOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}
export default App;
