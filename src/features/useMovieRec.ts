import { useQuery } from "react-query";
import { fetchMovieData } from "../service/MoviedbApi";

export function useMovieRec(movieId: string) {
  const movieApi = `movie/${movieId}/recommendations`;
  const { data, isLoading, error } = useQuery({
    queryKey: [movieApi],
    queryFn: () => fetchMovieData(movieApi),
  });
  console.log(data);
  return { data, isLoading, error };
}
