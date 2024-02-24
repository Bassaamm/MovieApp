import { useQuery } from "react-query";
import { fetchMovieData } from "../service/MoviedbApi";

export function useMovieCast(movieId: string) {
  const movieApi = `movie/${movieId}/credits`;
  const { data, isLoading, error } = useQuery({
    queryKey: [movieApi],
    queryFn: () => fetchMovieData(movieApi),
  });
  console.log(data);
  return { data, isLoading, error };
}
