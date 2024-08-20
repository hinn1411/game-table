import { Dispatch, FC, useCallback, useEffect, useMemo, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LucideCircleChevronDown } from "lucide-react";
import { STATUS, statuses } from "../../constants/statuses";
import { GameType, StatusType } from "../../types";
import { useFetchGames } from "../../hooks/useGame";
interface StatusDroplistProps {
  setGames: Dispatch<React.SetStateAction<GameType[]>>;
}

const Droplist: FC<StatusDroplistProps> = ({ setGames }) => {
  const [filteredStatus, setFilteredStatus] = useState<string>(STATUS.ALL);
  const { games } = useFetchGames();

  const filteredGames = useMemo(() => {
    if (filteredStatus === STATUS.ALL) {
      return games;
    }
    return games.filter((game) => game.status === filteredStatus);
  }, [filteredStatus, games]);
  useEffect(() => {
    setGames(filteredGames);
  }, [setGames, filteredGames]);
  const handleChangeStatus = useCallback(
    (newStatus: string) => {
      setFilteredStatus(newStatus);
    },
    [setFilteredStatus]
  );
  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        {filteredStatus}
        <LucideCircleChevronDown className="size-4 fill-white/60" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-40 origin-top-right rounded-xl border border-white/5 bg-white p-1 text-sm/6 text-black shadow-lg transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {statuses.map((status: StatusType) => (
          <MenuItem key={status.id}>
            <button
              onClick={() => handleChangeStatus(status.name)}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100"
            >
              {status.name}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default Droplist;
