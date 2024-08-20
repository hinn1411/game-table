import "./App.css";
import PageTitle from "./components/PageTitle";
import SearchBar from "./components/search/SearchBar";

import Droplist from "./components/ui/Droplist";
import GameTable from "./components/game/GameTable";
import ScreenWrapper from "./components/ScreenWrapper";
import { AddGameButton } from "./components/button";
import { useFetchGames } from "./hooks/useGame";

function App() {
  const { games, setGames } = useFetchGames();
  // const deferredQuery = useDeferredValue(query, { timeoutMs: 500 });
  return (
    <ScreenWrapper>
      {/* Header */}
      <div className="flex justify-between bg-white shadow-lg p-4">
        <PageTitle>React Game Table</PageTitle>
        <SearchBar setGames={setGames} />
      </div>
      {/* Button container  */}
      <div>
        <div className="flex items-center justify-end gap-6">
          <Droplist setGames={setGames} />
          <AddGameButton />
        </div>
      </div>
      {/* Table */}
      <GameTable games={games} />
    </ScreenWrapper>
  );
}

export default App;
