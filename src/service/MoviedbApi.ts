import axios from "axios";
//&query=${querySearch}` for query
const API_KEY = `api_key=${import.meta.env.VITE_MOVIEDB_KEY}`;
const url = `https://api.themoviedb.org/3/moviedata?${API_KEY}`;

export async function getMovieList(apiInfo: string) {
  let movieType = url.replace("moviedata", apiInfo);
  const res = await axios.get(movieType);
  return res.data;
}

export async function getMovieInfo(movieId: string) {
  let movieIdData = url.replace("moviedata", movieId);
  const res = await axios.get(movieIdData);
  return res.data;
}
export async function searchMovie(movieNameApi: string, name: string) {
  let movieApi = url.replace("moviedata", movieNameApi);
  let movieName = `&query=${name}`;
  const res = await axios.get(movieApi + movieName);
  return res.data;
}
export async function movieCredits(movieCreditsApi: string) {
  let movieApi = url.replace("moviedata", movieCreditsApi);
  const res = await axios.get(movieApi);
  return res.data;
}
export async function getMovieRec(movieRecApi: string) {
  let movieApi = url.replace("moviedata", movieRecApi);
  const res = await axios.get(movieApi);
  return res.data;
}
