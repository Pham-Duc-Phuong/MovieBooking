import { z } from "zod";

export const FindMovie = z.object({
    nameMovie: z.string()
})
export type FindMovieType = z.infer<typeof FindMovie>