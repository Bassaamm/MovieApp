import { Routes, Route } from "react-router-dom";
import { MovieInfo, MovieList, PageNotFound, Search , MohPage } from "../pages";

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<MovieList api="movie/now_playing" title="Home" />}
        />
        <Route path="/movie/:id" element={<MovieInfo />} />
        <Route path="/movie/mohsen" element={<MohPage />} />

        <Route
          path="/movies/popular"
          element={<MovieList api="movie/popular" title="Popular" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList api="movie/top_rated" title="Top rated" />}
        />
        <Route
          path="/movies/upcomping"
          element={<MovieList api="movie/upcoming" title="Upcoming" />}
        />
        <Route path="search" element={<Search api="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};
