import { useQuery } from "react-query";
import { getMovieRec } from "../service/MoviedbApi";

export function useMovieRec(movieId: string) {
  let movieApi = `movie/${movieId}/recommendations`;
  const { data, isLoading, error } = useQuery({
    queryKey: [movieApi],
    queryFn: () => getMovieRec(movieApi),
  });
  console.log(data);
  return { data, isLoading, error };
}
