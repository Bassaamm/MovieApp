import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import MoviesList from "./features/MoviesList";
import PageNotFound from "./components/PageNotFound";
import Search from "./features/Search";
import MoviesInfo from "./features/MoviesInfo";
import AppLayout from "./AppLayout";
import { Api } from "./enums/Api";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/" />} />
          <Route
            path="/"
            element={<MoviesList api={Api.AvaliableNow} title="Home" />}
          />
          <Route
            path="/popular"
            element={<MoviesList api={Api.Popular} title="Popular" />}
          />
          <Route
            path="/top"
            element={<MoviesList api={Api.TopRated} title="Top rated" />}
          />
          <Route
            path="/upcomping"
            element={<MoviesList api={Api.UpComingMovies} title="Upcoming" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/movie/:id" element={<MoviesInfo />} />
        <Route path="search" element={<Search api={Api.SearchMovie} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
