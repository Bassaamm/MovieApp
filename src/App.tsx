import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import MoviesList from "./features/MoviesList";
import PageNotFound from "./components/PageNotFound";
import Search from "./features/Search";
import MoviesInfo from "./features/MoviesInfo";
import AppLayout from "./AppLayout";
import { Api } from "./enums/Api";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClinet}>
        <BrowserRouter>
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/home" />} />
              <Route
                path="/home"
                element={<MoviesList api={Api.AvaliableNow} title="Home" />}
              />
              <Route
                path="/popular"
                element={<MoviesList api={Api.Popular} title="Popular" />}
              />
              <Route
                path="/top-rated"
                element={<MoviesList api={Api.TopRated} title="Top rated" />}
              />
              <Route
                path="/upcoming"
                element={
                  <MoviesList api={Api.UpComingMovies} title="Upcoming" />
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/movie/:id" element={<MoviesInfo />} />
            <Route path="search" element={<Search api={Api.SearchMovie} />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
