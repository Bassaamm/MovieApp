import { SwiperSlide } from "swiper/react";
import { Movie } from "../types/MovieType";
import { getMovieImage } from "../utils/helpers";
import Image from "./Image";
export default function MovieCard({ movie }: { movie: Movie }) {
  let imgae = getMovieImage(movie.backdrop_path);
  return (
    <SwiperSlide key={movie.id} className="relative">
      <div
        className="absolute inset-0 h-screen w-screen  bg-cover bg-center blur-lg filter"
        style={{ backgroundImage: `url(${imgae})` }}
      ></div>
      <div className="absolute inset-0  flex items-center justify-center">
        <Image movie={movie} />
      </div>
    </SwiperSlide>
  );
}
