import { FC } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";
import GameEntry from "./GameEntry";
import { GameType } from "../../types";

interface GameTableProps {
  games: GameType[];
}

const GameTable: FC<GameTableProps> = ({ games }) => {
  return (
    <section className="bg-white shadow-md p-4 space-y-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold">All games</h2>
        <p className="text-sm text-slate-600">Managing games</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Release day</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {games.map((game: GameType) => (
            <GameEntry key={game.id} game={game} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default GameTable;
