import { useImage } from "react-image";
import { Movie } from "../types/MovieType";
import { getMovieImage } from "../utils/helpers";

export default function Image({ movie }: { movie: Movie }) {
  const { src } = useImage({ srcList: getMovieImage(movie.poster_path) });
  return (
    <img
      src={src}
      alt={movie.original_title}
      className="h-20 w-20 rounded-3xl  object-cover"
    />
  );
}
