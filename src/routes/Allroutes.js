import { Routes, Route } from "react-router-dom";
import { MovieInfo, MovieList, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MovieList api="movie/now_playing" />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
        <Route
          path="/movies/popular"
          element={<MovieList api="movie/popular" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList api="movie/top_rated" />}
        />
        <Route
          path="/movies/upcomping"
          element={<MovieList api="movie/upcoming" />}
        />
        <Route path="search" element={<Search api="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};
