import { useQuery } from "react-query";
import { getMovieList } from "../service/MoviedbApi";

export function useMovieList(api: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: [api],
    queryFn: () => getMovieList(api),
    staleTime: 0, // 5 minutes in milliseconds
    cacheTime: 0, // 10 minutes in milliseconds
  });
  console.log(data);
  return { data, isLoading, error };
}
