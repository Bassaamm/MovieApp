import { Swiper, SwiperRef } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Movie } from "../types/MovieType";
import { useEffect, useRef } from "react";
import { FaBeer } from "react-icons/fa";

export default function MoviesList({
  movies,
  render,
}: {
  movies: Movie[];
  render: (movie: Movie) => JSX.Element;
}) {
  const isTouchDevice = window.matchMedia("(hover: none)").matches;
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    const intervalId = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 3000); // 2 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="mx-auto  h-full w-full  ">
      <Swiper
        ref={swiperRef}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        cssMode={isTouchDevice}
        className="h-full"
      >
        {movies.map(render)}
      </Swiper>
    </div>
  );
}
