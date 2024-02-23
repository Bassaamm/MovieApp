import { useQuery } from "react-query";
import { searchMovie } from "../service/MoviedbApi";

export function useMovieSearch(movieName: string) {
  let movieApi = `search/movie`;
  const { data, isLoading, error } = useQuery({
    queryKey: [movieApi],
    queryFn: () => searchMovie(movieApi, movieName),
    staleTime: 0, // 5 minutes in milliseconds
    cacheTime: 0, // 10 minutes in milliseconds
  });
  console.log(data);
  return { data, isLoading, error };
}
