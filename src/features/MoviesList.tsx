import { Swiper, SwiperSlide } from "swiper/react";
import { useMovieList } from "./useMovieList";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

export default function MoviesList({ api }: { api: string; title: string }) {
  const { data, isLoading, error } = useMovieList(api);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error;
  console.log(data.results, "data");

  return (
    <div className="flex h-full w-full items-center justify-center ">
      {" "}
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
