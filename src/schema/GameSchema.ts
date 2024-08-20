import { z } from "zod";

export const PartialGameSchema = z.object({
  name: z.string().min(1, "You must enter name of the game").trim(),
  status: z.string(),
});

export const GameSchema = z.object({
  name: z.string().min(1, "You must enter name of the game").trim(),
  releaseDay: z.string().date("Please select a specific day"),
});
