import { useQuery } from "react-query";
import { searchMovie } from "../service/MoviedbApi";

export function useMovieSearch(movieName: string) {
  let movieApi = `search/movie`;
  const { data, isLoading, error } = useQuery({
    queryKey: [movieApi, movieName],
    queryFn: () => searchMovie(movieApi, movieName),
  });

  return { data, isLoading, error };
}
