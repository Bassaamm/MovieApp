import axios from "axios";
//&query=${querySearch}` for query
const API_KEY = `api_key=${import.meta.env.VITE_MOVIEDB_KEY}`;
const url = `https://api.themoviedb.org/3/moivestype?${API_KEY}`;

export async function getMovieList(apiInfo: string) {
  const res = await axios.get(url.replace("moivestype", apiInfo));
  return res.data;
}
