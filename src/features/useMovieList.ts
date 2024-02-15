import { useQuery } from "react-query";
import { getMovieList } from "../service/MoviedbApi";

export function useMovieList(api: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: [api],
    queryFn: () => getMovieList(api),
  });
  return { data, isLoading, error };
}
