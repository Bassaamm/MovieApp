import { useParams } from "react-router-dom";
import Header from "./components/Header";
import MoviesList from "./features/MoviesList";
import { useMovieList } from "./features/useMovieList";
import { Movie } from "./types/MovieType";
import { getMovieImage, moviesTypes } from "./utils/helpers";
import { SwiperSlide } from "swiper/react";
import Image from "./components/Image";
export default function AppLayout() {
  const params = useParams();
  let movieType = moviesTypes[params.api!]?.api ?? "Movie not found";

  const { data, isLoading, error } = useMovieList(movieType);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error;
  return (
    <div className=" h-screen overflow-hidden bg-slate-900    font-sans">
      <Header />

      <MoviesList
        movies={data.results}
        render={(movie: Movie) => {
          return (
            <SwiperSlide key={movie.id} className="h-92  relative w-full">
              <div
                className="absolute inset-0 h-screen w-screen  bg-cover bg-center blur-md filter"
                style={{
                  backgroundImage: `url(${getMovieImage(movie.backdrop_path)})`,
                }}
              ></div>
              <div className=" absolute inset-0  flex items-center justify-center">
                <Image movie={movie} />
              </div>
            </SwiperSlide>
          );
        }}
      />
    </div>
  );
}
