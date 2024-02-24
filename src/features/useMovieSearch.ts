import { useQuery } from "react-query";
import { fetchMovieData } from "../service/MoviedbApi";

export function useMovieSearch(movieName: string) {
  const movieApi = `search/movie`;
  const { data, isLoading, error } = useQuery({
    queryKey: [movieApi, movieName],
    queryFn: () => fetchMovieData(movieApi, movieName),
  });

  return { data, isLoading, error };
}
