import { Search } from "lucide-react";
import { Dispatch, FC, useCallback, useEffect, useMemo, useState } from "react";
import { useFetchGames } from "../../hooks/useGame";
import { GameType } from "../../types";

interface SearchBarProps {
  setGames: Dispatch<React.SetStateAction<GameType[]>>;
}

const SearchBar: FC<SearchBarProps> = ({ setGames }) => {
  const [query, setQuery] = useState<string>("");
  const { games } = useFetchGames();

  const filteredGames = useMemo(() => {
    if (query === "") {
      return games;
    }
    return games.filter((item) => item.name.includes(query));
  }, [query, games]);
  useEffect(() => {
    setGames(filteredGames);
  }, [filteredGames, setGames]);
  const searchHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );
  return (
    <div className="relative flex items-center ml-auto flex-1 md:flex-[0.25] space-x-1.5 px-3 py-2 border border-input bg-background rounded-md ring-offset-background file:border-0 file:border-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disable:cursor-not-allowed disabled:opacity-50">
      <Search className="h-4 w-4 text-adminPrimary cursor-pointer" />
      <input
        value={query}
        onChange={searchHandler}
        placeholder="Search your game..."
        className="flex h-auto p-0 w-full text-sm border-none focus:outline-none focus:ring-0  "
      />
    </div>
  );
};

export default SearchBar;
