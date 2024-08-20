import { GameType } from "../types";
import { axiosClient } from "./axiosClient";

export const apiGames = {
  getAllGames: async (): Promise<GameType[]> => {
    try {
      const { data } = await axiosClient.get("");
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  addGame: async (name: string, date: string) => {
    try {
      return await axiosClient.post("", {
        name,
        releaseDay: date,
        status: "Initializing",
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  updateGame: async (gameId: number, name: string, status: string) => {
    try {
      return await axiosClient.put(`/${gameId}`, {
        name,
        status,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  deleteGame: async (gameId: number) => {
    try {
      return await axiosClient.delete(`/${gameId}`);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
