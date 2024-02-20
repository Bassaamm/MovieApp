import { useImage } from "react-image";
import { Movie } from "../types/MovieType";
import { getMovieImage } from "../utils/helpers";

export default function Image({ movie }: { movie: Movie }) {
  const { src } = useImage({ srcList: getMovieImage(movie.poster_path) });
  return (
    <img
      src={src}
      alt={movie.original_title}
      className="h-92 w-72 rounded-3xl  object-cover md:h-[512px] md:w-[340px]"
    />
  );
}
