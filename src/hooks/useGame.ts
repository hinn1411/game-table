import { useEffect, useState } from "react";
import { GameType } from "../types";
import { games as defaultGames } from "../constants";
import { apiGames } from "../apis/apiGames";

export const useFetchGames = () => {
  const [filteredStatus, setFilteredStatus] = useState<string>("All");
  const [games, setGames] = useState<GameType[]>(defaultGames);
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const newGames = await apiGames.getAllGames();
        setGames(newGames);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGame();
  }, []);
  return { filteredStatus, setFilteredStatus, games, setGames };
};

export const useCreateGame = () => {
  const createGame = async (name: string, releaseDay: string) => {
    try {
      await apiGames.addGame(name, releaseDay).then(() => location.reload());
    } catch (err) {
      console.log(err);
    }
  };
  return { createGame };
};

export const useUpdateGame = () => {
  const updateGame = async (gameId: number, name: string, status: string) => {
    try {
      await apiGames
        .updateGame(gameId, name, status)
        .then(() => location.reload());
    } catch (err) {
      console.log(err);
    }
  };
  return { updateGame };
};

export const useDeleteGame = () => {
  const deleteGame = async (gameId: number) => {
    try {
      await apiGames.deleteGame(gameId).then(() => location.reload());
    } catch (err) {
      console.log(err);
    }
  };
  return { deleteGame };
};
