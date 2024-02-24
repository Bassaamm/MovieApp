import { useQuery } from "react-query";
import { fetchMovieData } from "../service/MoviedbApi";

export function useMovieList(api: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: [api],
    queryFn: () => fetchMovieData(api),
  });
  console.log(data);
  return { data, isLoading, error };
}
