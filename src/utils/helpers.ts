export function getMovieImage(movieUrl: string): string {
  return `https://image.tmdb.org/t/p/original${movieUrl}`;
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

export function shorcutDescription(description: string) {
  return description.length > 150
    ? description.slice(0, 150) + "..."
    : description;
}
export function isLangEnglish(sentence: string) {
  const charCode = sentence.charCodeAt(0);
  console.log(charCode);
  if (charCode >= 0x0600 && charCode <= 0x06ff) {
    return false;
  } else if (charCode >= 0x0020 && charCode <= 0x007f) {
    return true;
  }

  return "unknown";
}
