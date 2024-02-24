import { useQuery } from "react-query";
import { getMovieList } from "../service/MoviedbApi";

export function useMovieCast(movieId: string) {
  let movieApi = `movie/${movieId}/credits`;
  const { data, isLoading, error } = useQuery({
    queryKey: [movieApi],
    queryFn: () => getMovieList(movieApi),
  });
  console.log(data);
  return { data, isLoading, error };
}
