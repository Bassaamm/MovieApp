import { Swiper, SwiperSlide } from "swiper/react";
import { useMovieList } from "./useMovieList";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Movie } from "../types/MovieType";
import Image from "../components/Image";
import { Suspense } from "react";
import { FaBeer } from "react-icons/fa";

export default function MoviesList({ api }: { api: string; title: string }) {
  const { data, isLoading, error } = useMovieList(api);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error;
  console.log(data.results, "data");

  return (
    <div className="container ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {data.results.map((movie: Movie) => {
          return (
            <SwiperSlide key={movie.id} className="">
              <Image movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
