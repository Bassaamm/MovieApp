import { useQuery } from "react-query";
import { getMovieList } from "../service/MoviedbApi";

export function useMovieList(api: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: [api],
    queryFn: () => getMovieList(api),
  });
  console.log(data);
  return { data, isLoading, error };
}
