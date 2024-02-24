import { create } from "zustand";
import { Movie } from "../types/MovieType";

export const useMovieStore = create((set) => ({
  movies: [],
  setMovies: (movies: Movie) => set({ movies }),
}));
