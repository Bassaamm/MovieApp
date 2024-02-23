import { Movie } from "@/types/MovieType";
import Image from "./Image";
import { useMovieSearch } from "@/features/useMovieSearch";
import { useDebounce } from "@uidotdev/usehooks";
import { getMovieImage } from "@/utils/helpers";

export default function MovieSearchCard({ search }: { search: string }) {
  const debounceSearch = useDebounce(search, 400);

  const { data, isLoading } = useMovieSearch(debounceSearch);
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <div className="mt-12 h-14 w-14 animate-spin rounded-full border-b-2 border-t-2 border-purple-500"></div>
      </div>
    );
  return (
    <div className="flex flex-wrap">
      {data.results.map((movie: Movie) => (
        <div className="flex  overflow-y-scroll">
          <img src={getMovieImage(movie.poster_path)} className="h-20 w-20" />
          <div className="ml-4">
            <h1 className="text-xl text-white">{movie.original_title}</h1>
            <p className=" text-sm text-white">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
