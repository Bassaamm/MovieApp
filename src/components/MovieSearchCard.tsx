import { Movie } from "@/types/MovieType";
import { useMovieSearch } from "@/features/useMovieSearch";
import { useDebounce } from "@uidotdev/usehooks";
import { getMovieImage } from "@/utils/helpers";
import { useNavigate } from "react-router-dom";

export default function MovieSearchCard({
  search,
  onOpenChange,
}: {
  search: string;
  onOpenChange: (open: boolean) => void;
}) {
  const debounceSearch = useDebounce(search, 400);
  const navigate = useNavigate();
  const { data, isLoading } = useMovieSearch(debounceSearch);
  if (isLoading)
    return (
      <div className="flex items-center justify-center ">
        <div className="mt-12 h-14 w-14 animate-spin rounded-full border-b-2 border-t-2 border-purple-500"></div>
      </div>
    );
  return (
    <div className="mx-4 grid grid-cols-2  grid-rows-1 gap-4  md:grid-cols-3 ">
      {data.results.map((movie: Movie) => (
        <div
          onClick={() => {
            navigate(`/movie/${movie.id}`);
            onOpenChange(false);
          }}
          className=" flex w-full    cursor-pointer    grid-cols-2 flex-col items-center rounded-xl   border-2 border-white hover:bg-slate-700  "
        >
          <img
            src={getMovieImage(movie.poster_path)}
            className="rounded-t-lg border-b-2 border-blue-900     object-cover"
            alt=""
          />
          <p className="w-full px-4 py-4 text-center">{movie.title}</p>
        </div>
      ))}
    </div>
  );
}
