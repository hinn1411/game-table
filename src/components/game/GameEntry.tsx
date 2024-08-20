import { FC } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { TableRow, TableCell } from "../table";
import { GameType } from "../../types";
import { MoreHorizontal } from "lucide-react";
import ViewDetailButton from "../button/ViewDetailButton";
import { ModifyGameButton } from "../button";
import DeleteGameButton from "../button/DeleteGameButton";
interface GameEntryProps {
  game: GameType;
}
const GameEntry: FC<GameEntryProps> = ({ game }) => {
  return (
    <TableRow>
      <TableCell>{game.id}</TableCell>
      <TableCell>{game.name}</TableCell>
      <TableCell>{game.releaseDay}</TableCell>
      <TableCell>{game.status}</TableCell>
      <TableCell>
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-100 data-[open]:bg-gray-100 data-[focus]:outline-1 data-[focus]:outline-white">
            <MoreHorizontal className="w-4 h-4" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-40 origin-top-right rounded-xl border border-white/5 bg-white p-1 text-sm/6 text-black shadow-lg transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <ViewDetailButton game={game} />
            </MenuItem>
            <MenuItem>
              <ModifyGameButton game={game} />
              {/* <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/5">
                Update
              </button> */}
            </MenuItem>

            <MenuItem>
              <DeleteGameButton gameId={game.id} />
            </MenuItem>
          </MenuItems>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default GameEntry;
