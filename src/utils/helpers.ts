export function getMovieImage(movieUrl: string): string {
  return `https://image.tmdb.org/t/p/w500${movieUrl}`;
}

type MoviesTypes = {
  home: { api: string; title: string };
  popular: { api: string; title: string };
  "top-rated": { api: string; title: string };
  upcoming: { api: string; title: string };
  search: { api: string; title: string };
  movieInfo: { api: string; title: string };
  [key: string]: { api: string; title: string }; // Add this line
};
export const moviesTypes: MoviesTypes = {
  home: { api: "movie/now_playing", title: "Home" },
  popular: { api: "movie/popular", title: "Popular" },
  "top-rated": { api: "movie/top_rated", title: "Top rated" },
  upcoming: { api: "movie/upcoming", title: "Upcoming" },
  search: { api: "search/movie", title: "Search" },
  movieInfo: { api: "movie/:id", title: "Movie info" },
};
