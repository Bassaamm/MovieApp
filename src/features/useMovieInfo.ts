import { useQuery } from "react-query";
import { fetchMovieData } from "../service/MoviedbApi";

export function useMovieInfo(movieKey: string) {
  const movieApi = `movie/${movieKey}`;
  const { data, isLoading, error } = useQuery({
    queryKey: [movieApi],
    queryFn: () => fetchMovieData(movieApi),
  });
  console.log(data);
  return { data, isLoading, error };
}
